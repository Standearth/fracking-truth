<script>
	import wordmark from "$svg/stand_logo.svg";
	import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from "lucide-svelte";
	import { Download, Megaphone, FileText } from "lucide-svelte";
  
	const links = [
	  { name: "facebook", url: "https://facebook.com/standearth/" },
	  {
		name: "instagram",
		url: "https://www.instagram.com/stand.earth",
	  }, 
	  { name: "linkedin", url: "https://www.linkedin.com/company/stand.earth" },
	  { name: "twitter", url: "https://twitter.com/standearth/" }
	];
  
  
  </script>
  <div class="logos">
	<div class="container">
		<div class="row">
			<div class="col-lg-12 mx-auto col-sm-12">
				<h3>Produced in collaboration with:</h3>
				<a href="https://www.pacificenvironment.org/">
					<img src="assets/prime/pe.png" alt="Pacific Environment">
				</a>
				<a href="https://shipitzero.org/">
					<img src="assets/prime/siz.png" alt="Ship it Zero">
				</a>
				<a href="https://clean-mobility.org/">
					<img src="assets/prime/cmc.jpg" alt="Clean Mobility Collective">
				</a>
			</div>
		</div>
	</div>
</div> 
 <div class="footernav">
	<div class="container">
		<div class="row">
			<div class="col-lg-12 mx-auto col-sm-12">
				<a href="https://stand.earth/wp-content/uploads/2024/09/PRIME_POLLUTER-09.2024.pdf" target="_new"><Download size=20/>  Download PDF</a> <span>|</span> <a href="https://docs.google.com/document/d/1OJiHLlhuB4Mz3c6LqJlGFu-XhutHhXfEvLC3GOcB1GI/edit" target="_new"><FileText size=20/> Review Methodology</a> <span>|</span> <a href="https://act.stand.earth/page/51302/petition/1?ea.tracking.id=homepage" target="_new"><Megaphone size=20/> Take Action</a>
			</div>
		</div>
	</div>
</div> 

  <footer> 
	<div class="container">
		<div class="row">
			<div class="col-lg-8 col-sm-12 mx-auto about">
				<div class="wordmark">
					<a href="https://stand.earth">{@html wordmark}</a>
				  </div>
				  <p>
					<a href="https://stand.earth">Stand.earth</a> delivers large-scale change by interrupting the systems that create environmental and climate crises, and challenging corporations and governments to treat people and the planet with respect.
				  </p>
			</div>
		</div>
		<div clas="row ">
			<div class = "col-lg-6 col-sm-12 mx-auto mennu" style="text-align:center;">
				<a href="https://www.stand.earth/our-work">Our Work</a>  <span>|</span>  <a href="https://www.stand.earth/donate">Ways to Give</a>		
		</div>
	</div>
	
	<div class="row">
		<div class="col-lg-8 mx-auto col-sm-12 links">
			<ul>
				{#each links as link}
				  <li>
					<a href="{link.url}">
					  {#if link.name == 'facebook'}
						<FacebookIcon />
						{:else if link.name == 'instagram'}
						<InstagramIcon />
						{:else if link.name == 'twitter'}
						<TwitterIcon />
						{:else if link.name == 'linkedin'}
						<LinkedinIcon />
					  {/if}
					</a>
				  </li>
				{/each}
			  </ul>
		</div>
	</div>
  </footer>
  
  <style>
	footer {
	  background-color: #000;
	  color: #fff;
	  font-family: var(--sans);
	  padding-top: 1rem;
	  padding-bottom: 1rem;
	}

	a,
	a:visited,
	a:hover {
	  color: var(--stand-tertiary);
	}

	ul {
		padding-left:0px;
	}
  
	.wordmark {
	  max-width: 10em;
	  padding: 1em;
	  margin:auto;
	}
  
	.about {
	  margin: 1rem auto;
	  margin-top: 0;
	  text-align: center;
	}
  
	.links ul {
	  display: flex;
	  flex-wrap: wrap;
	  justify-content: center;
	}
  
	.links li {
	  display: flex;
	  padding: 0.5em 1em;
	}
  
	.links a {
	  display: flex;
	  border: none;
	  align-items: center;
	  text-decoration: none;
	  
	}

	.mennu {
		text-align:center;
		margin:auto;
		padding-bottom:30px;
	}

	.mennu a, .mennu span {
		padding:10px;
	  font-weight:bold;
	}
  
	.links span {
	  margin-left: 0.5em;
	}
  
	@media only screen and (min-width: 30em) {
	  .story {
		width: 50%;
		padding: 0 1em;
	  }

	}
  

 @media (max-width:574px) {
	.footernav a {
		width:100%;
		text-align:center;
		display:block;
		padding:10px;
	}
	.footernav span {
		display:none;
	}
 }

	@media only screen and (min-width: 50em) {
	  .story {
		width: 25%;
		padding: 0 1em;
	  }
	}

	.footernav a {
		color:#fff;
		text-decoration:none;
		padding:10px;
	}
	.footernav span {
		padding:10px;
	}

	.footernav {
		padding:30px;
		text-align:center;
		background:#e50b12;
	}

	.logos img {
		max-width:15em;
		display:inline;
	}

	.logos {
		text-align:center;
	}
  </style>
  