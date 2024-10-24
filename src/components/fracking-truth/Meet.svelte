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
            <iframe width="560" height="315" src="https://www.youtube.com/embed/St1XZCxEgjU?si=g8C2rhGuqQpp_EtI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
    min-height: 150px;
    padding: 20px;
    margin-top: 40px;
}

.share a {
    text-decoration:none;
    padding:10px;
    color:#fff;
    border-radius:10px;
    min-width:300px;
}

</style>