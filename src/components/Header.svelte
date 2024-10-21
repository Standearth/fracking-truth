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
</script>
<header style='background:{background};'>
	<div class="container-xxl">
		<div class="top-header row">
			<div class="wordmark col-4 col-sm-2">
				<a href="https://stand.earth" aria-label="Stand.earth" target="_self"><img src="/assets/fracking/stand_logo_black.png" alt="Stand.earth"></a>
			</div>
			<div class="logo col-4 col-sm-8">
				<a href="/" aria-label="The Fracking Truth" target="_self"><img src="/assets/fracking/logo_frackingtruth.png" alt="Fracking Truth"></a>
			</div>
			<div class="wordmark-right col-4 col-sm-2">
				<a href="https://dogwoodbc.ca" aria-label="Dogwood BC" target="_self"><img src="/assets/dogwood.png" alt="Dogwood BC"></a>
			</div>
		</div>
		<div class="hero row">
			<div class="copy col-xl-7 col-lg-8 col-md-8 col-sm-12">
				<h1 style="color:{text_color};">The Monster Misconceptions of <span style='color:{accent_color};'>UN</span>Natural Gas</h1>
				<h3>Fracked gas is fuel on the <br/>fire of climate change.</h3>
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
		height:90vh;
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
		float:left;
	}

	.wordmark img {
		max-width:8em;
	}

	.logo {
		width:9em;
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

	.goons {
		position:relative;
	}

	.goons img {
		min-width:140%;
		position:absolute;
		bottom:5%;
		left:-40%;
		z-index:10;
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

		.goons img {
		width:100%;
		z-index:10;
	}

	}

	@media (max-width:768px) {
		.hero h1 {
			font-size:2rem;
			padding-top:20%;
		}

		.goons img {
		min-width:80%;
		width:100%;
		margin:auto;
		z-index:10;
		position:initial;
		left:0px;
		
	}

	.wordmark, .wordmark-right, .logo {
		width:5em;
	}

	.wordmark img {
		width:3em;
	}

	header {
		height:auto;
	}


	}
</style>
