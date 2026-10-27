<script>
	// shadow, plain, line, bubble
	import wordmark_stand from "$svg/stand_logo_black.svg";
	import { getContext } from "svelte";
	const copy = getContext("copy");
	export let image = "cmo_bg.webp";
	export let background = "#fdbfb1" ;
	export let border = "bubbles.png";
	export let text_color = "#471c15";
	export let accent_color = "#ff7c61";
	// optional overrides for the hero copy (HTML); defaults to the monster misconception headline
	export let heading = "";
	export let subheading = "";
</script>
<header style='background:{background};'>
	<div class="container-xxl">
		<div class="top-header row">
			<div class="logo col-6">
				<a href="/" aria-label="The Fracking Truth" target="_self"><img src="/assets/fracking/logo_frackingtruth.png" alt="Fracking Truth"></a>
			</div>
			<div class="wordmark col-6">
				<a href="https://stand.earth" aria-label="Stand.earth" target="_self"><img src="/assets/fracking/stand_logo_black.png" alt="Stand.earth"></a>
			</div>
		</div>
		<div class="hero row">
			<div class="copy col-xl-7 col-lg-8 col-md-8 col-sm-12">
				{#if heading}
					<h1 style="color:{text_color};">{@html heading}</h1>
				{:else}
					<h1 style="color:{text_color};">The Monster Misconceptions of <span style='color:{accent_color};'>UN</span>Natural Gas</h1>
				{/if}
				{#if subheading}
					<h3>{@html subheading}</h3>
				{:else}
					<h3><strong>The truth: </strong>Fracked gas is fuel on the <br/>fire of climate change.</h3>
				{/if}
				<img src="/assets/fracking/arrow_down.png" alt="learn more">
			</div>
			<div class="goons col-xl-5 col-lg-4 col-md-4 col-sm-12">
				<img src="/assets/fracking/{image}" alt="Monster Misconceptions">
			</div>
		</div>
	</div>
</header>
<img src="/assets/fracking/{border}" alt="bubbles">

<style>
	header {
		min-height:70vh;
		padding-bottom:40px;
	}

	.top-header {
		display:flex;
		width:100%;
		margin:auto;
		max-height:40px;
		justify-content: space-between;
	}
	
	.wordmark {
		width: 12em;
		display:inline;
		padding:15px;
		text-align:right;
	}

	.wordmark img {
		max-width:8em;
	}

	.logo {
		width:12em;
		padding-top:20px;
	}
	
	.logo a {
		height:150px;
	}

	.wordmark-right {
		width: 12em;
		display:inline;
		padding:15px;
		float:right;
		overflow:visible;
	}

	.wordmark-right img {
		width:14rem;
	}

	.wordmark a {
		border: none;
		color: var(--color-fg);
	}

	.wordmark a:hover {
		background-color: transparent;
	}

	.hero h1 {
		padding-top:20%;
		font-family:"BN";
		font-size:4.8rem;
	}

	.hero h3 {
		font-family:"Inter";
		font-weight:300;
		font-size:2rem;
	}

	.hero h1 span {
		color:#ff7c61;
	}

	.copy {
		z-index:15;
	}

	.copy img {
		max-height:40px;
	}

	.hero {
		align-items:flex-end;
	}

	/* illustration stays in its own column so it never covers the headline */
	.goons img {
		width:100%;
		max-width:600px;
		margin-left:auto;
		display:block;
	}

	@media (max-width:1295px) {
		.hero h1 {
			font-size:4rem;
			padding-top:40%;
		}

	}
	
	@media (max-width:1200px) {
		.hero h1 {
			font-size:3rem;
			padding-top:40%;
		}

	}

	@media (max-width:992px) {
		.hero h1 {
			font-size:3rem;
			padding-top:40%;
		}

	}

	@media (max-width:768px) {
		.hero h1 {
			font-size:2rem;
			padding-top:20%;
		}

		.goons img {
		margin:auto;
	}

	.wordmark, .wordmark-right {
		width:5em;
	}

	.logo {
		width:7em;
	}

	.wordmark img {
		width:3em;
	}

	header {
		min-height:0;
	}


	}
</style>
