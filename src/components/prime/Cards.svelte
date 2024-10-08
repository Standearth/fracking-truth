<script>
    import Card from "$components/prime/Card.svelte";
    import { Splide, SplideSlide } from '@splidejs/svelte-splide';
    // Default theme
    import '@splidejs/svelte-splide/css/skyblue';
    import { getContext } from "svelte";
    const copy = getContext("copy");
    </script>
    <div class="carous">
        <Splide aria-label="What Amazon Sold">
        {#each copy.cards as card}
            <SplideSlide>
                <Card {...card}/>
            </SplideSlide>
        {/each}   
        </Splide>
    </div>
    
    
    <style>
    </style>