<script>
    import { getContext } from "svelte";
    import Card from "$components/fracking-truth/Card.svelte";
    const copy = getContext("copy");
    import { FacebookIcon, InstagramIcon, LinkedinIcon } from "lucide-svelte";
</script>
<div class="container-xxl">
    <div class="row">
        <div class="col-lg-6 col-md-8 col-sm-12">
            <div class="meet">
                <img src="/assets/fracking/skull.png" alt="Meet the Squad">
                <h2>Meet the <br/>Monster Squad</h2>
                <p>There are so many Monster Misconceptions around using fracked gas to heat our homes. Why?</p>
                <p>Because the gas industry has branded its product as “natural” to make it sound green so we keep using it — and executives can keep making massive profits. 
                </p>
                <p><strong>But we won’t be duped. </strong></p>
            </div>
        </div>
        <div class="col-lg-6 col-md-4 col-sm-12 meet-video">
            <div style="padding:50% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/947204185?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="FORWARD! For a Frack Free Future"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
            <div class="share">
                <a style="background:#8134AF;" href="https://instagram.com">Share on Instagram <InstagramIcon /></a>
                <a style="background:#4267B2;" href="https://facebook.com">Share on Facebook <FacebookIcon /></a>
            </div>
        </div>
    </div>
    <div class="cards row">
            {#each copy.Monsters as card}
            <div class="col-lg-3 col-md-6 col-sm-12 monster">
                    <Card {...card}/>
            </div>
            {/each}   
    </div>
</div>

<style>

.meet h2 {
    font-family:"BN";
    color:#471c15;
}

.meet {
    text-align:center;
}

iframe {
    padding-top:30px;
    width:100%;
}

.meet img {
    max-width:60px;
    margin:auto;
}

.meet p {
    font-size:1.5rem;
    font-weight:300;
}

.share {
    text-align:center;
    padding-top:30px;
}

.share a {
    text-decoration:none;
    padding:10px;
    color:#fff;
    border-radius:10px;
    min-width:300px;
}

</style>