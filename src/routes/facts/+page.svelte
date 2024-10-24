<script>
	import { setContext } from "svelte";
	import { browser } from "$app/environment";
	import Meta from "$components/Meta.svelte";
	import copy from "$data/copy.json";
	import version from "$utils/version.js";
	import Footer from "$components/Footer.svelte";
	import Meet from "$components/fracking-truth/Meet.svelte";
	import Faq from "$components/fracking-truth/Faq.svelte";
	import Action from "$components/fracking-truth/Action.svelte";
	import Truth from "$components/fracking-truth/Truth.svelte";
	import Pumps from "$components/fracking-truth/Pumps.svelte";
	export let data;
	let title, description, ogimage, slug;
	title = "Facts - The Fracking Truth";
	description ="All of the facts on un-natural gas and clean alternatives.";
	ogimage = "cmo_bg.webp";
	slug = "/facts";
			
	setContext("copy", copy);
	setContext("data", data.data);
</script>
<Meta {title} {description} {ogimage} {slug} />
<Faq />
<Action />
<Meet/>

<Truth />
<Pumps />
<Footer />
