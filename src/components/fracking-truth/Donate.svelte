<script>
    import { getContext } from "svelte";
    const copy = getContext("copy");
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

    let amount = '';
	let chain = '';
	let params = '?';
    onMount(() => {
        // save the id parameter if it's in the url or an empty string
        amount = $page.url.searchParams.get('amount') || '';
		chain = $page.url.searchParams.has('chain');
		params = $page.url.search;
    });
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
                <h1>Help stop gas industry misinformation</h1>
            </div>
        </div>
        <div class="row form">
            <div class="col-lg-7 col-md-7 col-sm-12 mx-auto">
                <p><strong>Gas industry misinformation is getting in the way of climate action. </strong></p>

				<p>We’re doing everything we can to dispel myths and encourage climate-friendly policies at all levels of government – municipal, provincial, and federal. </p>

				<p>But we need your help. Gas companies and associations have a lot of money and power. It takes a lot to debunk their misinformation, counter their lobbying efforts, and lead campaigns for a transition to clean energy. </p>

				<p>With your help, we can do more to challenge industry lies and reach more people with accurate information. More awareness leads to more action. </p>

				<p>Together we can take on corporate gas giants and relegate them to the dustbin of history - where they belong. </p>

				<h2>Give today to create a path to a clean, healthy, and livable future!  </h2>
				<img src="/assets/fracking/cmo_bg.webp" alt="Monster Squad">
				<p style="padding-top:10px;font-size:12px;"><i>Please note: The Fracking Truth campaign is organized by Stand.earth and Dogwood BC and your donation will be shared between the two organizations. Stand.earth is a registered non-profit society in Canada, under the name Stand Environmental Society (BC Reg Id: S0059653). Since we are not a registered charity, we cannot issue a tax receipt for donations made in Canada.</i></p>
            </div>
            <div class="col-lg-5 col-md-5 col-sm-12 iframewrap">
				{#if amount != '' && chain == true}
                	<iframe src="https://act.stand.earth/page/74842/donate/1{params}&transaction.donationAmt={amount}" style="width:100%;height:1450px;" title="Make a donation"></iframe>
				{:else if amount != '' && chain == false}
					<iframe src="https://act.stand.earth/page/74842/donate/1{params}&transaction.donationAmt={amount}" style="width:100%;height:1450px;" title="Make a donation"></iframe>
				{:else}
					<iframe src="https://act.stand.earth/page/74842/donate/1{params}" style="width:100%;height:1450px;" title="Make a donation"></iframe>
				{/if}
            </div>
        </div>
    </div>
</div>
<img src="/assets/fracking/bubbles.png" alt="bubbles">
<style>
    .action {
        background:#fdbfb1;
        text-align:left;
    }

	.iframewrap {
		background:#fff;
		border-radius:12px;
	}

    .heading {
        text-align:center;
    }

    .heading {
        padding-top:30px;
        padding-bottom:30px;
    }

    .form {
        text-align:left;
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