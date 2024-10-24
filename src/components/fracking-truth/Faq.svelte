<script>
    import { getContext } from "svelte";
    const copy = getContext("copy");
</script>
<div class="faq">
	<div class="container-xxl">
		<div class="top-header row">
			<div class="wordmark col-4 col-sm-2">
				<a href="https://stand.earth" aria-label="Stand.earth" target="_self"><img src="/assets/fracking/stand_logo_black.png" alt="Stand.earth"></a>
			</div>
			<div class="logo col-4 col-sm-8">
				<a href="/" aria-label="The Fracking Truth" target="_self"><img src="/assets/fracking/logo_frackingtruth.png" alt="Fracking Truth"></a>
			</div>
			<div class="wordmark-right col-4 col-sm-2">
				<a href="https://dogwoodbc.ca" aria-label="Dogwood BC" target="_self"><img src="/assets/dogwood.png" alt="Dogwood BC"></a>
			</div>
		</div>
		<div class="row form">
			<div class="col-lg-10 col-md-10 col-sm-12 mx-auto">
				<h1>{copy.FAQ.Heading}</h1>
			</div>
		</div>
	</div>
</div>
<img src="/assets/fracking/bubbles.png" alt="bubbles">
<div class="container">
	<div class="row heading">
		<div class="col-lg-10 col-md-10 col-sm-12">
			
			{#each copy.FAQ.top as t,i}
				<h2 style="padding-top:30px;">{t.heading}</h2>
				<p>{t.description}</p>
				<div class="accordion accordion-flush" id="accordion-{i}">
					{#each t.sections as s,v}
						<div class="accordion-item">
						<h2 class="accordion-header">
							<button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-{i}{v}" aria-expanded="true" aria-controls="collapse-{i}{v}">
								{s.title}
							</button>
						</h2>
						<div id="collapse-{i}{v}" class="accordion-collapse collapse" data-bs-parent="#accordion-{i}">
							<div class="accordion-body">
								<div class="row">
									<div class="col-lg-10 col-md-8 col-sm-12">
										<ul>
											{#each s.items as i}
												<li>{@html i}
												{#if i.subitems}
													<ul>
													{#each i.subitems as si}
														<li>{@html si}</li>
													{/each}
													</ul>
												{/if}
												</li>
											{/each}
										</ul>
									</div>
								</div>
							</div>
						</div>
						</div>
					{/each}
				</div>
			{/each}
		</div>
	</div>
</div>

<style>

	hr {
		border-color:#fdbfb1;
		border-top:5px solid #fdbfb1;
	}
    .action {
		background:#fdbfb1;
	}
	
	.faq {
        background:#fdbfb1;
        text-align:left;
	}

    .form {
        text-align:center;
    }

    .action p {
        font-size:1.5rem;
        font-weight:300;
    }

	.heading {
		margin-bottom:100px;
	}

	.heading li {
		padding-bottom:5px;
		padding-top:5px;
	}

    .heading h2, .faq h1 {
        font-family:"BN";
    }

    .top-header {
		display:flex;
		width:100%;
		margin:auto;
		height:auto;
		justify-content: space-between;
	}
	
	.wordmark {
		width: 12em;
		display:inline;
		padding:15px;
		float:left;
	}

	.wordmark img {
		max-width:8em;
	}

	.logo {
		width:9em;
		padding-top:20px;
	}
	
	.logo a {
		height:150px;
	}

	.wordmark-right {
		width: 12em;
		display:inline;
		padding:15px;
		float:right;
		overflow:visible;
	}

	.wordmark-right img {
		width:14rem;
	}

	.wordmark a {
		border: none;
		color: var(--color-fg);
	}

	.wordmark a:hover {
		background-color: transparent;
	}

    @media (max-width:768px) {
		.hero h1 {
			font-size:2rem;
			padding-top:20%;
		}

		.goons img {
		min-width:80%;
		width:100%;
		margin:auto;
		z-index:10;
		position:initial;
		left:0px;
		
	}

	.wordmark, .wordmark-right, .logo {
		width:5em;
	}

	.wordmark img {
		width:3em;
	}

	header {
		height:auto;
	}


	}

	.accordion {
        font-family:"Inter";
        font-weight:300;
        text-align:left;
    }

    .accordion button {
        font-family:"Inter";
        font-size:1.4rem;
        font-weight:600;

    }

    .accordion-header img {
        width:80px;
        padding-right:20px; 
        float:left;
        display:inline;
    }

    .accordion-header {
        max-width:700px;
        border-bottom:1px solid #000;
    }

    .accordion-item {
        border:none;
    }

    .accordion-item img {
        max-width:280px;
    }

    .accordion-item li {
        padding-top:10px;
        font-size:1.2rem;
    }

    .accordion-button:not(.collapsed) {
        background:none;
        border:none;
        color:#000;
    }

    .accordion-button:hover {
        border:none;
        background:none;
    }

    button:focus:not(:focus-visible), a:focus:not(:focus-visible), a[role="button"]:focus:not(:focus-visible), input:focus:not(:focus-visible), select:focus:not(:focus-visible), textarea:focus:not(:focus-visible) {
        outline:none;
    }

    .accordion-button:focus {
        border:none;
        box-shadow:none;
    }
</style>