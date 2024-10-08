<script>
     import { fade } from "svelte/transition";
     export let chart;
</script>


    {#if chart == 0}
    <div class="iframe-wrapper" transition:fade>
        <iframe src="https://e.infogram.com/3b283c68-e6af-42a6-b60a-bf8050029913?src=embed" title="EVs" style="width:100%;border:none;min-height:500px;" width="100" unit="%" height="100" scrolling="no" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
    </div>
    {:else if chart == 1}
    <div class="iframe-wrapper" transition:fade>
        <iframe src="https://e.infogram.com/b09a653f-b130-4b24-8052-742d0b3437e8?src=embed" title="EVs and total" style="width:100%;border:none;min-height:500px;" width="100" unit="%" height="100" scrolling="no" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
    </div>
    {/if}

<style>
    .iframe-wrapper {
        max-width:100%;
        min-width:300px;
        
    }
</style>