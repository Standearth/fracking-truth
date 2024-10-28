<script>
    import { getContext } from "svelte";
    const copy = getContext("copy");
</script>

<div class="container-xxl pump">
    <div class="row" style='max-width:800px;margin:auto;'>
        <div class="col-lg-8 col-sm-12 mx-auto">
            <h1>Heat pumps are the perfect solution</h1>
        </div>
        <div class="col-lg-4 col-sm-12">
            <img alt="heat pump" src="/assets/fracking/heatpump.webp">
        </div>
    </div>
    <div class="row">
        <div class="col-8 mx-auto">
            <p>While gas companies push their products on us, we have a more modern, clean, and affordable technology to heat our homes: electric heat pumps!</p>
            <ul>
                <li>Heat pumps are more efficient than gas furnaces and use electricity as an input, leading to lower greenhouse gas emissions and energy bills</li>
                <li>Heat pumps can heat homes in the coldest of temperatures and double as air conditioners in the summer  </li>
                <li>Unlike gas appliances, heat pumps don’t emit poisonous chemicals and can filter indoor air </li>
            </ul>
            
            <p><strong>Don’t be fooled by industry fear mongering about heat pumps. Check out <a href="/facts">this FACTS page</a> for accurate info. </strong></p>   
        </div>
    </div>
</div>
    
<div style="max-width:1200px;height:525px;margin:auto;"><iframe src="https://standearth.soapboxx.us/embed/6707e94529787be1acccb744" frameBorder="0" width="100%" height="525px" style="border:none;" title="soapboxx"></iframe></div>

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
    font-size:1.2rem;
    margin-bottom:100px;
    text-align:left;
}

.pump img {
    max-width:200px; 
    float:right;
    display:inline;
}


</style>