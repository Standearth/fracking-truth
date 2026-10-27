<script>
    import { getContext } from "svelte";
    const copy = getContext("copy");
    import { page } from '$app/stores';
    import { onMount } from 'svelte';
    // TODO: replace with the Engaging Networks page ID for the new heat pump / zero carbon action
    const EN_PAGE_ID = "74529";
    let params = '';
    onMount(() => {
        // save the id parameter if it's in the url or an empty string
        params = $page.url.search;
    });
</script>
<img src="/assets/fracking/flames.png" alt="flames">
<div class="action" id="petition">
    <div class="container-xxl">
        <div class="row">
            <div class="col-8 mx-auto">
                <p>Heat pumps keep our homes cool during heat waves and smoky wildfire summers, warm in the winter, and can lower our energy bills.</p>
                <p>Every new home built with a heat pump instead of a gas furnace is a home that's healthier, more comfortable, and ready for the future.</p>
            </div>
        </div>
        <div class="row form">
            <div class="col-lg-6 col-md-6 col-sm-12">
                <img src="/assets/fracking/heatpump.webp" alt="An electric heat pump">
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12">
                <h2>Tell B.C. decision-makers: Make every new home a heat pump home!</h2>
                <iframe src="https://act.stand.earth/page/{EN_PAGE_ID}/petition/1{params}" style="width:100%;height:630px;" title="Sign the petition" scrolling="no"></iframe>
            </div>
        </div>
    </div>
</div>
<style>
    .action {
        background:#dea4ff;
        text-align:center;
    }

    .form {
        padding-top:20px;
    }

    .form img {
        padding-top:100px;
        max-width:350px;
        margin:auto;
    }

    .action p {
        font-size:1.5rem;
        font-weight:300;
    }

    .action h2 {
        font-family:"BN";
    }

    @media (max-width:769px) {
        .form img {
            padding-top:0px;
        }
    }
</style>