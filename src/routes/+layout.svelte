<script>
	import "$styles/app.css";
	import Header from "$components/Header.svelte";
	import { onMount } from "svelte";
	import { afterNavigate } from "$app/navigation";

	// open links to other sites in a new tab (most links come from {@html} copy)
	// links that set their own target (e.g. target="_self") are left alone
	function externalLinksInNewTab() {
		document.querySelectorAll("a[href]").forEach((a) => {
			if (a.hasAttribute("target")) return;
			if (!/^https?:/.test(a.href) || a.hostname === location.hostname) return;
			a.target = "_blank";
			a.rel = "noopener noreferrer";
		});
	}
	onMount(externalLinksInNewTab);
	afterNavigate(externalLinksInNewTab);
</script>

<svelte:head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/js/bootstrap.min.js" integrity="sha512-ykZ1QQr0Jy/4ZkvKuqWn4iF3lqPZyij9iRv6sGqLRdTPkY69YX6+7wvVGmsdBbiIfN/8OdsI7HABjvEok6ZopQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
</svelte:head>

<main id="content">
	<slot />
</main>
