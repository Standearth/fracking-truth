<script>
    export let Name = "test";
    export let Description = "test";
    export let Images = "3.jpg";
    export let Spoiler = "test";
    export let Color = "#000";
    export let Text_Color = "#bbb";
    import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from "lucide-svelte";

    
    </script>
    
    <div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front" style="background:{Color};">
                <div class="card-body container">
                  <div class="container">
                    <div class="row">
                      <div class="col-12">
                        <h3 style="color:{Text_Color}">{Name}</h3>
                        <img src="assets/fracking/{Images}" alt="{Name}">
                        <h4 style="color:{Text_Color}">{Description}</h4>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            <div class="flip-card-back" style="background:{Color}">
                <div class="container">
                  <h3>Spoiler Alert!</h3>
                  <div class="row">
                    <div class="col-12" style="text-align:center;">
                      <h4 style="color:{Text_Color}">{Spoiler}</h4>
                      <div class="share">
                        <h5>Share this monster misconception:</h5>
                        <a href="https://instagram.com"><InstagramIcon /></a>
                        <a href="https://facebook.com"><FacebookIcon /></a>
                        <a href="https://twitter.com"><TwitterIcon /></a>
                        <a href="https://linkedin.com"><LinkedinIcon /></a>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
      </div>
    
    <style>
    
      h2,h3 {
        font-family:"BN";
        padding-top:20px;
      }

      h3 {
        font-size:1.7rem;
        min-height:100px;
      }
    

    .flip-card-front img {
        max-height:200px;
        margin:auto;
        z-index:5;
    }  
    
    .flip-card-front h4 {
        z-index:10;
        position:absolute;
        bottom:25px;

    }
    
    .share {
        position:absolute;
        bottom:20%;
        z-index:99;
    }

    .share a {
        padding:5px;
    }

    .flip-card-back {
        z-index:40;
    }
    
    .flip-card {
      background-color: transparent;
      max-width: 800px;
      padding-top:50px;
      height: 600px;
      margin:auto;
      border: none;
      perspective: 1000px; /* Remove this if you don't want the 3D effect */
    }

    .flip-card h4 {
        font-weight:300;
        font-family:"Inter";
    }
    
    
    /* This container is needed to position the front and back side */
    .flip-card-inner {
      position: relative;
      width: 100%;
      height: 100%;
      text-align: center;
      transition: transform 0.8s;
      transition-delay:0.5s;
      transform-style: preserve-3d;
    }
    
    /* Do an horizontal flip when you move the mouse over the flip box container */
    .flip-card:hover .flip-card-inner {
      transform: rotateY(180deg);
    }
    
    /* Position the front and back side */
    .flip-card-front, .flip-card-back {
      position: absolute;
      width: 100%;
      height: 100%;
      -webkit-backface-visibility: hidden; /* Safari */
      backface-visibility: hidden;
    }
    
    /* Style the front side (fallback if image is missing) */
    .flip-card-front {
      background-color: #fff;
      color: black;
      border-radius:20px;
    }
    
    /* Style the back side */
    .flip-card-back {
      background-color: #f5f4ed;
      color: black;
      border-radius:20px;
      transform: rotateY(180deg);
    }

    
    </style>