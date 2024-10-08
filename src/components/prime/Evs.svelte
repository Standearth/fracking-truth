<script>
	import Scrolly from "$components/helpers/Scrolly.svelte";
    import { getContext } from "svelte";
    import { fade } from 'svelte/transition';
    import EvsChart from '$components/prime/EvsChart.svelte';


    let copy = getContext("copy");
	let value;
</script>

<section id="scrolly">
    <div class="container-xxl">
        <div class="row">
            <div class="col-12 mx-auto storyTop" transition:fade={{ delay: 250, duration: 300 }} style="text-align:center;">
                <h1>{copy.evs[0].Headline}</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-7 col-md-8 col-sm-12 sticky">
                <div class="chart">
                    <EvsChart chart={value}/>
                </div>
            </div>
            <div class="col-lg-5 col-md-8 col-sm-12 copysteps">
                <Scrolly bind:value>
                    {#each copy.evs as step,i}
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
        </div>
    </div>
	
</section>

<style>
    .sticky, .sticky h2, .sticky p {
		position: sticky;
        top:4rem;
	}

	.sticky h1 {
		position: sticky;
        top:4rem;
    }

    .sticky p {
        position:sticky;
        top: 8rem;
    }

    .copysteps {
        padding-bottom:140px;
    }

	.spacer {
		height: 50vh;
	}
    #scrolly {
        padding-bottom:150px;
    }

	.step {
		height: 80vh;
        z-index:1;
		text-align: center;
	}

	.step p {
		padding: 1rem;
	}

    .storyTop {
        padding-top:100px;
        padding-bottom:60px;
        text-align:center;
    }

    .chart {
        position:sticky;
        top:15rem;
        z-index:99;
        background:#fff;
    }

    .copy {
        padding:10px;
        border-radius:20px;
        color:#231F20;
        text-align:left;
        font-size:20px;
    }

    @media (max-width:990px) {
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
            top:60%;
            height:40vh;
            padding-top:20px;
            background:#f5f4ed;
        }
    }
</style>
