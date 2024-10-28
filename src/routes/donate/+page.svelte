<script>
	import { setContext } from "svelte";
	import { browser } from "$app/environment";
	import Meta from "$components/Meta.svelte";
	import copy from "$data/copy.json";
	import version from "$utils/version.js";
	import Header from "$components/Header.svelte";
	import Footer from "$components/Footer.svelte";
	import Meet from "$components/fracking-truth/Meet.svelte";
	import Donate from "$components/fracking-truth/Donate.svelte";
	import Truth from "$components/fracking-truth/Truth.svelte";
	import Pumps from "$components/fracking-truth/Pumps.svelte";
	export let data
	let title, description, ogimage, slug;
	title = "Make a donation - Help stop gas industry misinformation - The Fracking Truth";
	description ="Give today to create a path to a clean, healthy, and livable future!";
	ogimage = "cmo_bg.png";
	slug = "/donate";
			
	setContext("copy", copy);
	setContext("data", data.data);
</script>
<Meta {title} {description} {ogimage} {slug} />
<Donate />
<Meet/>

<Truth />
<Pumps />
<Footer />
