<script>
    import { getContext } from "svelte";
    const copy = getContext("copy");
</script>

<div class="container-xxl pump">
    <div class="row">
        <div class="col-10 mx-auto">
            <h1>Heat pumps are the perfect solution</h1>
        </div>
    </div>
</div>

<div class="cloud">
    <div class="container">
        <div class="row">
            <div class="col-10 mx-auto">
                <p>While gas companies push their products on us, we have a more modern, clean, and affordable technology to heat our homes: electric heat pumps!</p>
                <ul>
                    <li>Heat pumps are 300% more efficient than gas furnaces and use electricity as an input, leading to lower greenhouse gas emissions </li>
                    <li>For these reasons, heat pumps also lead to lower monthly energy bills for residents  </li>
                    <li>Heat pumps offer stable monthly energy costs (unlike furnaces that depend on volatile gas prices) </li>
                    <li>Heat pumps double as air conditioners in the summer </li>
                    <li>Heat pumps have an air purifying function </li>
                    <li>Advancements in heat pump technology mean they can now heat homes in the coldest of temperatures, including in northern Canada </li>
                    <li>Installing heat pumps at the construction stage means homes can be built faster and at a lower cost than using gas furnaces which require expensive pipelines and gas hookups</li>
                    <li>Equipping homes with heat pumps from the beginning means skipping the cost of retrofits in the future</li>
                    <li>Unlike gas equipment, heat pumps don’t emit poisonous chemicals </li>
                </ul>
                <p>Heat pumps are a win-win-win for the climate, our wallets, and public health.</p>               
                <p><strong>There is misinformation out there - because the gas industry wants to keep selling its harmful product. </strong></p>   
            </div>
        </div>
    </div>
    
</div>

<style>
.pump {
    padding-top:100px;
}

h1 {
    font-family:"BN";
}
.cloud {
    min-height:900px;
    width:100%;
    background-image:url('assets/fracking/bubble.png');
    background-position:center bottom;
    background-size:cover;
    font-size:1.2rem;
    padding-top:300px;
    margin-bottom:100px;
}


</style>