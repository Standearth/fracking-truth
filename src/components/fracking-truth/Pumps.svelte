<script>
    import { getContext } from "svelte";
    const copy = getContext("copy");
    export let factsLink = true;
</script>

<!-- full-width wrapper carries the background so it spans edge to edge -->
<div class="pump">
<div class="container-xxl">
    <div class="row" style='max-width:800px;margin:auto;'>
        <div class="col-lg-8 col-sm-12 mx-auto">
            <h1>Heat pumps are the perfect solution</h1>
        </div>
        <div class="col-lg-4 col-sm-12">
            <img alt="heat pump" src="/assets/fracking/heatpump.webp">
        </div>
    </div>
    <div class="row">
        <div class="col-lg-8 col-12 mx-auto">
            <p>Modern electric heat pumps keep our homes comfortable all year round — and they're cleaner, healthier, and often cheaper to run than gas.</p>
            <ul>
                <li><strong>Cool in the summer:</strong> Heat pumps double as air conditioners, keeping families safe during heat waves</li>
                <li><strong>Clean air on smoky days:</strong> Because heat pumps cool your home, you can keep the windows shut on hot, smoky wildfire days — and with a good filter they help clean indoor air. Unlike gas appliances, they don't create indoor air pollution either</li>
                <li><strong>Warm in the winter:</strong> Today's cold-climate heat pumps heat homes efficiently, even in the coldest temperatures</li>
                <li><strong>Lower bills:</strong> Heat pumps use about ⅓ of the energy of a gas furnace, so many B.C. households can save on their energy bills</li>
                <li><strong>Good for the climate:</strong> Running on B.C.'s mostly clean electricity, heat pumps dramatically cut the carbon pollution from heating our homes</li>
            </ul>
            {#if factsLink}
            <p><strong>Don’t be fooled by industry fear mongering about heat pumps; the future is electric. Check out <a href="/facts">this FACTS page</a> for accurate info. </strong></p>
            {/if}
        </div>
    </div>
</div>
</div>

<!-- soapboxx action embed removed for now: https://standearth.soapboxx.us/embed/6707e94529787be1acccb744 -->

<style>
.pump {
    padding-top:50px;
}

h1 {
    font-family:"BN";
    float:left;
    max-width:500px;
}
.pump {
    min-height:800px;
    width:100%;
    background-image:url('/assets/fracking/bubble.png');
    background-position:center top;
    background-size:cover;
    padding-bottom:180px;
    font-size:1.2rem;
    margin-bottom:60px;
    text-align:left;
}

/* on narrower screens the text is taller than the cloud artwork, so use a plain panel in the cloud colour */
@media (max-width:992px) {
    .pump {
        background-image:none;
        background-color:#b4f3ff;
        padding-bottom:50px;
        min-height:0;
    }
}

.pump img {
    max-width:200px; 
    float:right;
    display:inline;
}


</style>