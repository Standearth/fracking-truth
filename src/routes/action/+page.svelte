<script>
	import { setContext } from "svelte";
	import { browser } from "$app/environment";
	import Meta from "$components/Meta.svelte";
	import copy from "$data/copy.json";
	import version from "$utils/version.js";
	import Header from "$components/Header.svelte";
	import Footer from "$components/Footer.svelte";
	import Meet from "$components/fracking-truth/Meet.svelte";
	import Action from "$components/fracking-truth/Action2.svelte";
	import Truth from "$components/fracking-truth/Truth.svelte";
	import Pumps from "$components/fracking-truth/Pumps.svelte";
	export let data;
	let title, description, ogimage, slug;
	title = "Take Action - Tell federal politicians to ban fossil fuel advertising";
	description ="We have a rare opportunity right now to stop fossil fuel companies from advertising their polluting products to us.";
	ogimage = "cmo_bg.webp";
	slug = "/action";
			
	setContext("copy", copy);
	setContext("data", data.data);
</script>
<Meta {title} {description} {ogimage} {slug} />
<Action />
<Meet/>

<Truth />
<Pumps />
<Footer />
