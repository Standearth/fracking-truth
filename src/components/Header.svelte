<script>
	// shadow, plain, line, bubble
	import wordmark from "$svg/stand_logo.svg";
	import Hero from "$components/prime/Hero.svelte";
	import { Download, Megaphone } from "lucide-svelte";
</script>
<header>
	<div class="container-xxl">
		<div class="top-header row">
			<div class="wordmark col-6">
				<a href="https://stand.earth" aria-label="Stand.earth" target="_self">{@html wordmark}</a>
			</div>
			<div class="nav col-6">
				<a href="https://stand.earth/wp-content/uploads/2024/09/PRIME_POLLUTER-09.2024.pdf" target="_new"><Download size=20/>  Download PDF</a> <span>|</span> <a href="https://act.stand.earth/page/51302/petition/1?ea.tracking.id=homepage" target="_new"><Megaphone size=20/> Take Action</a>
			</div>
		</div>
	</div>
	<Hero />
</header>

<style>
	header {
		height:100vh;
		background-image:url('/assets/prime/primepolluter.jpg');
		background-size:cover;
		background-position:center;
		background-attachment:fixed;
	}

	.top-header {
		display:flex;
		width:100%;
		margin:auto;
		max-height:40px;
		justify-content: space-between;
	}
	
	.wordmark {
		width: 9em;
		display:inline;
		padding:15px;
		float:left;
	}

	.wordmark a {
		border: none;
		color: var(--color-fg);
	}

	.wordmark a:hover {
		background-color: transparent;
	}

	.nav {
		padding:10px;
		float:right;
		justify-content:right;
		font-size:16px;
		color:#fff;
		font-weight:bold;
	}
	.nav a {
		color:#fff;
		text-decoration:none;
		padding:10px;
	}
	.nav span {
		padding:10px;
	}

	@media (max-width:769px) {
		header {
			background-position:left;
		}

		.nav span {
			display:none;
		}

		.nav a {
			display:block;
			color: #333333;
		}

	}
</style>
