<script>
    import { getContext } from "svelte";
    const copy = getContext("copy");
	const data = getContext("data");
    import { Splide, SplideSlide } from "@splidejs/svelte-splide";
</script>

<div class="recos">
    
</div>
<div style="background:#f5f4ed;">
    <div class="container">
        <div class="row">
            <div class="col-lg-8 col-sm-12 copy mx-auto">
                <h2>{copy.recommendations.Headline}</h2>
                {@html copy.recommendations.Copy}
            </div>
        </div>
    </div>
</div>


<style>
    .recos {
        text-align:center;
        background:#f5f4ed;
        padding:100px;
        min-height:400px;
        background-image:url('https://chargethestreets.org/wp-content/uploads/2023/05/amazon-truck.jpg');
        background-size:cover;
        background-position:center;
    }

    .copy {
        padding:30px;
        background:#ffffff;
        border-radius:20px;
        position:relative;
        top:-130px;
        text-align:center;
    }

    .copy {
        font-size:20px;
    }

</style>