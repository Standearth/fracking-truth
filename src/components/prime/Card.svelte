<script>
import { Plane, Ship, Truck, Car } from "lucide-svelte";

export let Quote = "test";
export let Byline = "test";
export let Headshot = "3.jpg";
export let Flip = "test";
export let Icon;
export let Number = "number";

</script>

<div class="flip-card">
    <div class="flip-card-inner">
        <div class="flip-card-front">
            <div class="card-body container">
              <div class="container">
                <h2  class="card-title" >What Amazon Sold</h2>
                <div class="row">
                  <div class="col-lg-5 col-md-5 col-sm-8 mx-auto">
                    <img src="assets/prime/{Headshot}" alt="amazon executives">
                  </div>
                  <div class="col-lg-7 col-md-7 col-sm-12">
                    <h4>{Quote}</h4>
                    <p><i>{Byline}</i></p>
                    <div class="btn">Buy this!</div>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <div class="flip-card-back">
            <div class="container">
              <h2>What Amazon Delivered</h2>
              <div class="row nums">
                  <div class="col-10 mx-auto">
                  {#if Icon == "plane"}
                    <span class="cardicon"><Plane size=100 /></span>
                  {:else if Icon == "truck"}
                    <span class="cardicon"><Truck size=100 /></span>
                  {:else if Icon == "ship"}
                    <span class="cardicon"><Ship size=100 /></span>
                  {:else if Icon == "cable"}
                    <span class="cardicon"><Car size=100 /></span>
                  {/if}
                    <span class="bignumber">{Number}</span>
                  </div>
              </div>
              <div class="row">
                <div class="col-10 mx-auto" style="text-align:center;">
                  <h4>{Flip}</h4>
                </div>
              </div>
            </div>
        </div>
      </div>
  </div>

<style>

  h2 {
    font-weight:bold;
  }

.nums {
  text-align:center;
  padding-top:20px;
}

.flip-card-front h4, .flip-card-front h2 {
  padding-top:40px;
}

.flip-card-front .btn {
  background:orange;
  padding:10px 30px 10px 30px;
  border-radius:50px;
  font-weight:bold;

}

.cardicon {
  position:relative;
  top:-30px;
}

.flip-card {
  background-color: transparent;
  max-width: 800px;
  height: 600px;
  padding-top:100px;
  padding-bottom:100px;
  margin:auto;
  border: none;
  perspective: 1000px; /* Remove this if you don't want the 3D effect */
}

.bignumber {
  font-size:6rem;
  padding-left:20px;
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
  border:2px solid #000;
  border-radius:20px;
}

/* Style the back side */
.flip-card-back {
  background-color: #f5f4ed;
  color: black;
  border-radius:20px;
  transform: rotateY(180deg);
  padding-top:30px;
}

@media (max-width:768px) {
  .flip-card {
    background-color: transparent;
    max-width: 800px;
    min-height:100vh;
    height:auto;
    padding-top:100px;
    padding-bottom:100px;
    margin:auto;
    border: none;
    perspective: 1000px; /* Remove this if you don't want the 3D effect */
  }
  .flip-card-front {
    background-color: #fff;
    color: black;
    border:none;
    border-radius:20px;
  }

  .flip-card-front img {
    max-width:350px;
    margin:auto;
  }

  .flip-card-front h4 {
    padding-top:0px;
  }

  .flip-card-back {
    background-color:#fff;
  }
}

</style>