<script>
    import { getContext } from "svelte";
    const copy = getContext("copy");
</script>
<div class="action">
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
        <div class="row heading">
            <div class="col-8 mx-auto">
                <h1>Tell federal politicians to ban fossil fuel advertising</h1>
            </div>
        </div>
        <div class="row form">
            <div class="col-lg-7 col-md-7 col-sm-12 mx-auto">
                <p>We have a rare opportunity right now to stop fossil fuel companies from advertising their polluting products to us.</p>
                <p>There's a proposal in front of the federal parliament (Bill C-372) that would prohibit oil and gas companies from promoting fossil fuels (with a few minor exceptions). It would also prohibit the industry from promoting its products in a way that is false, misleading, or deceptive.</p>
                <p>And we all know these practices are rampant! </p>
                <p>So let's put an end to them. Just like we did tobacco companies. </p>
                <p><strong>Sign this petition to show parliamentarians that there is overwhelming support for an ad ban and that we want our health and the climate to come before corporate profits. </strong></p>
            </div>
            <div class="col-lg-5 col-md-5 col-sm-12">
                <img src="/assets/fracking/illustration-fracking-dangers.webp" alt="monsters">
            </div>
        </div>
        <div class="row form">
            <div class="col-lg-7 col-md-7 col-sm-12 mx-auto">
                <img src="/assets/fracking/ads_pet.png" alt="petition text">
            </div>
            <div class="col-lg-5 col-md-5 col-sm-12">
                <h2>Sign the petition</h2>
                <iframe src="https://act.stand.earth/page/74672/petition/1" style="width:100%;height:620px;" title="Sign the petition" scrolling="no"></iframe>
            </div>
        </div>
    </div>
</div>
<img src="/assets/fracking/flames2.png" alt="flames">
<style>
    .action {
        background:#dea4ff;
        text-align:left;
    }

    .heading {
        text-align:center;
    }

    .heading {
        padding-top:30px;
        padding-bottom:30px;
    }

    .form {
        text-align:center;
    }

    .action p {
        font-size:1.5rem;
        font-weight:300;
    }

    .action h2, .action h1 {
        font-family:"BN";
    }

    .top-header {
		display:flex;
		width:100%;
		margin:auto;
		height:auto;
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