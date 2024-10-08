<script>
    import { getContext } from "svelte";
    const copy = getContext("copy");
	const data = getContext("data");
    import { CircleArrowDown } from "lucide-svelte";
</script>

<div class="hero container">
    <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-12 heroimg">
            <img src="assets/prime/prime.png" alt="Prime logo">
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12" style="text-align:left;">
            <p>polluter</p>
        </div>
    </div>
    <h2>{copy.Subheadline}</h2>
    <CircleArrowDown size=50 color="#000" strokeWidth=1/>
</div>


<style>
    .hero {
        height:85%;
    }

    .hero img {
        max-width:300px;
        min-width:200px;
        float:right;
        padding-top:35%;
        padding-right:30px;
    }

    .hero p {
        font-size:6rem;
        color:#fff;
        position:relative;
        top:155px;
        left:-20px;
    }
    
    .hero h2 {
        max-width:500px;
        padding-top:50px;
    }

    
    @media (min-width:1400px) {
        .hero p {
            font-size:6rem;
            top:190px;
        }
    }
    
    @media (max-width:1200px) {
        .hero p {
            font-size:6rem;
            top:125px;
        }
    }
    
    @media (max-width:1000px) {
        .hero p {
            font-size:5rem;
            top:95px;
        }

        .hero h2 {
            max-width:300px;
        }
    }
    
    @media (max-width:769px) {
        .hero img {
            display:block;
            text-align:center;
            padding-right:0px;
            margin:auto;
            float:none;
        }

        .heroimg {
            text-align:center;
        }

        .hero p {
            font-size:4rem;
            display:block;
            text-align:center;
            color:#333333;
            padding-top:0px;
            position:relative;
            top:-50px;
            left:0px;
            text-wrap:nowrap;
            overflow:visible;
        }

        .hero h2 {
            width:100%;
            max-width:500px;
            padding-top:0px;
            font-size:var(--24px, 24px);
        }

    }

</style>