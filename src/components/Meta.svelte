<script>
	export let title = "The Fracking Truth - Monster Misconceptions of Unnatural Gas";
	export let description = "Fracked gas is fuel on the fire of climate change";
	export let url = "https://thefrackingtruth.ca";
	export let keywords = "";
	export let ogimage = "illustration-goon-squad.webp";
	export let preloadFont = [];
	export let slug = "";
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="author" content="Stand.earth" />
	<meta name="news_keywords" content={keywords} />
	<link rel="icon" type="image/x-icon" href="/assets/fracking/small_logo.png">


	<meta property="og:title" content={title} />
	<meta property="og:site_name" content="Stand.earth" />
	<meta property="og:url" content={url}{slug} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="article" />
	<meta property="og:locale" content="en_US" />

	<meta property="og:image" content="{url}/assets/fracking/{ogimage}" />
	<meta property="og:image:type" content="image/jpeg" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="628" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="https://stand.earth" />
	<meta name="twitter:creator" content="@standearth" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image:src" content="{url}/assets/fracking/{ogimage}" />

	<meta name="robots" content="max-image-preview:large" />

	<link rel="canonical" href="{url}{slug}" />

	<!-- Google tag (gtag.js) -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-X44KFXXS70"></script>
	<script>
	window.dataLayer = window.dataLayer || [];
	function gtag(){dataLayer.push(arguments);}
	gtag('js', new Date());

	gtag('config', 'G-X44KFXXS70');
	</script>

	{#each preloadFont as href}
		<link rel="preload" {href} as="font" type="font/woff2" crossorigin />
	{/each}

	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet">
</svelte:head>
