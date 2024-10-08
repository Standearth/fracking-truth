<script>
     import { fade } from "svelte/transition";
     export let chart;
</script>


    {#if chart == 1}
    <div class="iframe-wrapper" transition:fade>
        <iframe src="https://e.infogram.com/cd237b9c-d711-4b1f-b32a-fa1ba03419bc?src=embed" title="Prime4" style="width:100%;border:none;min-height:500px;" width="100" unit="%" height="100" scrolling="no" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
    </div>
    {:else if chart == 2}
    <div class="iframe-wrapper" transition:fade>
        <iframe src="https://e.infogram.com/ccbc5dd7-1141-4fb7-828e-871c1c76f3d2?src=embed" title="Prime4" style="width:100%;border:none;min-height:500px;" width="100" unit="%" height="100" scrolling="no" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
    </div>
    {:else if chart == 3}
    <div class="iframe-wrapper" transition:fade>
        <iframe src="https://e.infogram.com/7a645c03-de85-4554-863b-6fd7f5baa116?src=embed" title="Prime4" style="width:100%;border:none;min-height:500px;" width="100" unit="%" height="100" scrolling="no" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
    </div>
    {:else if chart == 4}
    <div class="iframe-wrapper" transition:fade>
        <iframe src="https://e.infogram.com/75ef991a-c6bf-46e5-9a6b-12a69fc3ab1c?src=embed" title="Prime4" style="width:100%;border:none;min-height:500px;" width="100" unit="%" height="100" scrolling="no" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
    </div>
    {:else if chart == 5}
    <div class="iframe-wrapper" transition:fade>
        <iframe src="https://e.infogram.com/b733f0cb-030c-4dd3-bcb1-1d3e60bbd035?src=embed" title="Prime4" style="width:100%;border:none;min-height:500px;" width="100" unit="%" height="100" scrolling="no" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
    </div>
    {:else if chart == 6}
    <div class="iframe-wrapper" transition:fade>
        <iframe src="https://e.infogram.com/53b7436e-bd82-4477-877f-76e930104bd6?src=embed" title="Prime4" style="width:100%;border:none;min-height:500px;" width="100" unit="%" height="100" scrolling="no" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
    </div>
    {/if}

<style>
    .iframe-wrapper {
        max-width:100%;
        min-width:300px;
        
    }
</style>