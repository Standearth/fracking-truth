<script>
	import { setContext } from "svelte";
	import Meta from "$components/Meta.svelte";
	import copy from "$data/copy.json";
	import Footer from "$components/Footer.svelte";
	import Faq from "$components/fracking-truth/Faq.svelte";
	import Pumps from "$components/fracking-truth/Pumps.svelte";
	import VideoCarousel from "$components/fracking-truth/VideoCarousel.svelte";
	export let data;
	let title, description, ogimage, slug;
	title = "Heat Pumps in the Okanagan | The Fracking Truth";
	description ="Heat pumps keep Okanagan homes cool, clean, and ready for wildfire season.";
	ogimage = "cmo_bg.png";
	slug = "/okanagan";

	const videos = [
		{ id: "1248519175" },
		{ id: "1248519177" },
		{ id: "1248519176" },
		{ id: "1248519174" }
	];

	setContext("copy", copy);
	setContext("data", data.data);
</script>
<Meta {title} {description} {ogimage} {slug} />
<Faq heading={copy.Okanagan.Heading} intro={copy.Okanagan.Intro} sections={[...copy.Okanagan.sections, ...copy.FAQ.top]}>
	<VideoCarousel {videos} heading="Local Testimonials" />
</Faq>
<div style="height:100px;width:100%;display:block;"></div>
<Pumps />
<Footer />
