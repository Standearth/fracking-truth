<script>
	import Scrolly from "$components/helpers/Scrolly.svelte";
    import Chart1 from "$components/prime/Chart1.svelte";
    import Donut from "$components/prime/Donut.svelte";
    import Area from "$components/prime/Area.svelte";
    import { getContext } from "svelte";
    import { fade } from 'svelte/transition';
    import { Plane, Ship, Truck, Car } from "lucide-svelte";
    import Infogram from "$components/prime/Infogram.svelte"


    let copy = getContext("copy");
	let value;
    let viz;
</script>

<section id="scrolly">
    <div class="container-xxl">
    <div class="row">
        <div class="col-8 mx-auto storyTop" transition:fade={{ delay: 250, duration: 300 }}>
            <h1>{copy.StoryTop.Headline}</h1>
            <p>{copy.StoryTop.Subheadline}</p>
        </div>
    </div>
    <div class="row">
        <div class="col-xl-6 col-lg-5 col-md-6 col-sm-12 copysteps">
            <Scrolly bind:value>
                {#each copy.story as step,i}
                    {@const active = value === i}
                    <div class="step container" class:active>
                        <div class="row">
                            <div class="col-12 copy">
                                <p>{@html step.Copy}</p>
                            </div>
                        </div>
                    </div>
                {/each}
            </Scrolly>
        </div>
        <div class="col-xl-6 col-lg-7 col-md-6 col-sm-12 sticky">
            
            {#if value == 0}
            <img src="assets/prime/packages.png" transition:fade alt="Amazon Packages">
            {:else if value == 1}
            <div transition:fade class="chart"><Infogram chart=1/></div>
            {:else if value == 2}
            <div transition:fade class="chart"><Infogram chart=2/></div>
            {:else if value == 3}
            <div transition:fade class="modes"><Plane size = 40/><Ship size = 40 /><Truck size = 40 /></div>
            {:else if value == 4}
            <div transition:fade class="chart"><div class="chart"><Infogram chart=3/></div></div>
            {:else if value == 5}
            <div transition:fade class="chart"><div class="chart"><Infogram chart=4/></div></div>
            {:else if value == 6}
            <div transition:fade class="chart"><div class="chart"><Infogram chart=5/></div></div>
            {:else if value == 7}
            <div transition:fade class="chart"><div class="chart"><Infogram chart=6/></div></div>
            {/if}
        </div>
    </div>
    
    </div>
	
</section>

<style>
	.sticky, .sticky h2, .sticky p {
		position: sticky;
        top:4rem;
	}

    .copysteps {
        padding-bottom:300px;
    }

    .sticky img {
        position:sticky;
        max-width:400px;
        margin:auto;
        top: 8rem;
    }

	.spacer {
		height: 50vh;
	}

	.step {
		height: 80vh;
        margin-bottom:200px;
		text-align: center;
	}

	.step p {
		padding: 1rem;
	}

    .chart {
        position:sticky;
        top:10rem;
    }

    .modes {
        text-align:center;
        color:#ffffff;

    }
    
    .storyTop {
        padding-top:200px;
        padding-bottom:200px;
        text-align:center;
    }

    .copy {
        padding:10px;
        background:#f5f4ed;
        border-radius:20px;
        color:#231F20;
        text-align:left;
        font-size:20px;
    }

    section {
        background:#231F20;
        color:#fff;
    }

    @media (max-width:769px) {
        #scrolly {
            position:relative;
        }

        .sticky {
            position:absolute;
            bottom:0px;
            width:100%;
        }

        .chart {
            position:sticky;
            padding-top:20px;
            top:50%;
            height:50vh;
            background:#231f20;
        }

        .sticky img {
            top:75%;
            background:#231f20;
            padding:50px;

        }
    }

    @media (max-width:486px) {
        .chart {
            position:sticky;
            padding-top:20px;
            top:60%;
            height:40vh;
            background:#231f20;
        }

    }

</style>
