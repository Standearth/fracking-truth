<script>
    import { getContext } from "svelte";
    const copy = getContext("copy");
</script>
<img src="/assets/fracking/flames.png" alt="flames">
<a name="petition"></a>
<div class="action">
    <div class="container-xxl">
        <div class="row">
            <div class="col-8 mx-auto">
                <p>We know fracked gas is a fossil fuel like oil and coal, all of which pollute communities and heat the planet. </p>
                <p>And we know there are cleaner, safer, and more affordable ways to heat our homes — like using an electric heat pump. </p>
            </div>
        </div>
        <div class="row form">
            <div class="col-lg-6 col-md-6 col-sm-12">
                <img src="/assets/fracking/homepage_letter.webp" alt="Your letter to gas companies">
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12">
                <h2>Tell gas companies to stop greenwashing their toxic products!</h2>
                <iframe src="https://act.stand.earth/page/74529/petition/1" style="width:100%;height:620px;" title="Sign the petition" scrolling="no"></iframe>
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