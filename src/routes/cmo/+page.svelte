<script>
	import { setContext } from "svelte";
	import { browser } from "$app/environment";
	import Meta from "$components/Meta.svelte";
	import copy from "$data/copy.json";
	import version from "$utils/version.js";
	import Header from "$components/Header.svelte";
	import Footer from "$components/Footer.svelte";
	import Meet from "$components/fracking-truth/Meet.svelte";
	import Action from "$components/fracking-truth/Action.svelte";
	import Truth from "$components/fracking-truth/Truth.svelte";
	import Pumps from "$components/fracking-truth/Pumps.svelte";

	export let data;
	data.slug = 'cmo';
	let title, description, image, background, border, text_color, accent_color, ogimage, slug;
	version();
	switch(data.slug) {
		case 'frackenstein':
			title = "Frackenstein - Monster Misconceptions of Un-natural Gas | The Fracking Truth";
			description ="Fracked gas is fuel on the fire of climate change";
			image = "frackenstein_bg.webp";
			background = "#dede4c";
			border = "bubbles_yellow.png";	
			text_color = "#778203";
			accent_color = "#f8ffa5";
			ogimage = "frackenstein_bg.png";
			slug = "/frackenstein";
			break;
		case 'giant':
			title = "Greenhouse Gas Giant - Monster Misconceptions of Un-natural Gas | The Fracking Truth";
			description ="Fracked gas is fuel on the fire of climate change";
			image = "green_bg.webp";
			background = "#afffcc";
			border = "bubbles_green.png";	
			text_color = "#00ab47";
			accent_color = "#0b190e";
			ogimage = "green_bg.png";
			slug = "/giant";
			break;
		case 'devil':
			title = "Danger Devil - Monster Misconceptions of Un-natural Gas | The Fracking Truth";
			description ="Fracked gas is fuel on the fire of climate change";
			image = "devil_bg.webp";
			background = "#b4f3ff";
			border = "bubbles_blue.png";	
			text_color = "#0392b2";
			accent_color = "#0d1d39";
			ogimage = "devil_bg.png";
			slug = "/devil";
			break;
		case 'cmo':
			title = "Chief Misconception Officer - Monster Misconceptions of Un-natural Gas | The Fracking Truth";
			description ="Fracked gas is fuel on the fire of climate change";
			image = "cmo_bg.webp";
			ogimage = "cmo_bg.png";
			slug = "/cmo";
			break;
	}
	setContext("copy", copy);
	setContext("data", data.data);
</script>
<Meta {title} {description} {ogimage} {slug} />
<Header {title} {description} {background} {border} {image} {text_color} {accent_color}/>
<Meet/>
<Action />
<Truth />
<Pumps />
<Footer />
