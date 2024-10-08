<script>
	import "$styles/app.css";
	import Header from "$components/Header.svelte";
</script>

<svelte:head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css">
</svelte:head>

<main id="content">
	<slot />
</main>
