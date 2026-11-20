<script>
	import { onMount } from "svelte";
	// Horizontally scrollable strip of Vimeo embeds.
	export let videos = [];
	export let heading = "";

	// Hide as much of the Vimeo chrome as the embed API allows.
	// (title/byline/portrait/vimeo_logo may be overridden by the video owner's
	// embed settings on vimeo.com depending on the account plan.)
	const params = new URLSearchParams({
		dnt: "1",
		title: "0",
		byline: "0",
		portrait: "0",
		badge: "0",
		vimeo_logo: "0",
		pip: "0",
		airplay: "0",
		chromecast: "0",
		speed: "0",
		cc: "0",
		transcript: "0",
		quality_selector: "0",
		watch_full_video: "0",
		autopause: "1"
	}).toString();

	let track;
	let thumbs = {};
	let playing = {};
	let order = videos;

	// Fetch each video's thumbnail so we can show a clean poster with a
	// centred play button; the Vimeo player only loads once clicked.
	onMount(() => {
		// Shuffle so visitors see a different order on each load.
		const shuffled = [...videos];
		for (let i = shuffled.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
		}
		order = shuffled;

		videos.forEach(async (v) => {
			try {
				const res = await fetch(
					`https://vimeo.com/api/oembed.json?url=https://vimeo.com/${v.id}&width=960`
				);
				const json = await res.json();
				if (json.thumbnail_url) thumbs = { ...thumbs, [v.id]: json.thumbnail_url };
			} catch (e) {}
		});
	});

	function play(id) {
		playing = { ...playing, [id]: true };
	}

	function scrollBy(dir) {
		if (!track) return;
		const card = track.querySelector(".card");
		const step = card ? card.offsetWidth + 16 : track.clientWidth;
		track.scrollBy({ left: dir * step, behavior: "smooth" });
	}
</script>

{#if videos.length}
	<section class="video-carousel container" aria-label={heading || "Video testimonials"}>
		{#if heading}<h2>{heading}</h2>{/if}
		<div class="stage">
			<button class="nav prev" type="button" aria-label="Scroll to previous videos" on:click={() => scrollBy(-1)}><svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
			<div class="track" bind:this={track}>
				{#each order as v, i (v.id)}
					<div class="card">
						{#if playing[v.id]}
							<iframe
								src="https://player.vimeo.com/video/{v.id}?{params}&autoplay=1"
								title={v.title || `Testimonial ${i + 1} of ${videos.length}`}
								frameborder="0"
								allow="autoplay; fullscreen; encrypted-media"
								referrerpolicy="strict-origin-when-cross-origin"
								allowfullscreen
							></iframe>
						{:else}
							<button
								class="poster"
								type="button"
								aria-label="Play {v.title || `testimonial ${i + 1} of ${videos.length}`}"
								on:click={() => play(v.id)}
							>
								{#if thumbs[v.id]}<img src={thumbs[v.id]} alt="" loading="lazy" />{/if}
								<span class="play" aria-hidden="true">
									<svg viewBox="0 0 24 24" width="28" height="28"><path d="M8 5.5v13l11-6.5z" fill="currentColor" /></svg>
								</span>
							</button>
						{/if}
					</div>
				{/each}
			</div>
			<button class="nav next" type="button" aria-label="Scroll to next videos" on:click={() => scrollBy(1)}><svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
		</div>
	</section>
{/if}

<style>
	.video-carousel {
		padding-top: 30px;
		padding-bottom: 20px;
	}

	h2 {
		font-family: "BN";
		text-align: center;
		padding-bottom: 15px;
	}

	.stage {
		display: flex;
		align-items: center;
		gap: 10px;
	}

	.track {
		flex: 1;
		display: flex;
		gap: 16px;
		overflow-x: auto;
		scroll-snap-type: x mandatory;
		scroll-padding: 0;
		padding-bottom: 10px;
		scrollbar-width: thin;
		scrollbar-color: #000 transparent;
	}

	/* ~2.4 visible on desktop, with the next one peeking in */
	.card {
		flex: 0 0 calc((100% - 16px) / 2.4);
		aspect-ratio: 16 / 9;
		background: #000;
		scroll-snap-align: start;
		position: relative;
	}

	.card iframe {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
	}

	.card .poster {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
		border: none;
		border-radius: 0;
		background: #000;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.card .poster img {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.card .poster .play {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 64px;
		height: 64px;
		border-radius: 50%;
		background: rgba(0, 0, 0, 0.6);
		color: #fff;
		transition: background 0.15s, transform 0.15s;
	}

	.card .poster .play svg {
		margin-left: 3px;
	}

	.card .poster:hover .play,
	.card .poster:focus-visible .play {
		background: #000;
		transform: scale(1.08);
	}

	.stage .nav {
		flex: none;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 40px;
		height: 40px;
		margin: 0;
		padding: 0;
		border-radius: 50%;
		border: 2px solid #000;
		background: #fdbfb1;
		color: #000;
		line-height: 0;
		box-shadow: none;
		cursor: pointer;
		transition: background 0.15s, color 0.15s;
	}

	.stage .nav svg {
		display: block;
		flex: none;
	}

	.stage .nav.prev svg {
		margin-left: -2px;
	}

	.stage .nav.next svg {
		margin-right: -2px;
	}

	.stage .nav:hover {
		background: #000;
		color: #fdbfb1;
	}

	@media (max-width: 992px) {
		.card {
			flex-basis: 70%;
		}
	}

	@media (max-width: 576px) {
		.stage .nav {
			display: none;
		}
		.card {
			flex-basis: 88%;
		}
	}
</style>
