<script>
	import { getContext } from "svelte";
	import Header from "$components/Header.svelte";
	import Footer from "$components/Footer.svelte";
	import Meet from "$components/fracking-truth/Meet.svelte";
	import Truth from "$components/fracking-truth/Truth.svelte";
	import Pumps from "$components/fracking-truth/Pumps.svelte";
	const copy = getContext("copy");
	const data = getContext("data");

</script>

<Header
	heading="Ditch Fossil Gas. Switch to a Modern <span style='color:#ff7c61;'>Heat Pump.</span>"
	subheading="<strong>The truth: </strong>Heat pumps keep homes cool in summer, warm in winter, and can lower your energy bills."
/>
<Pumps />
<Meet/>
<Truth />
<Footer />

