<script>
	import { getContext } from "svelte";
	import Header from "$components/Header.svelte";
	import Footer from "$components/Footer.svelte";
	import Meet from "$components/fracking-truth/Meet.svelte";
	import Action from "$components/fracking-truth/Action.svelte";
	import Truth from "$components/fracking-truth/Truth.svelte";
	import Pumps from "$components/fracking-truth/Pumps.svelte";
	const copy = getContext("copy");
	const data = getContext("data");

</script>

<Header />
<Meet/>
<Action />
<Truth />
<Pumps />
<Footer />

<style>
	.borderpaper {
		width:100%;
		height:50px;
		background-image:url('assets/prime/paper.png');
		background-size:cover;
		background-position:center;
		border:none;
	}
	.borderpaper-r {
		width:100%;
		height:50px;
		background-image:url('assets/prime/paper.png');
		background-size:cover;
		background-position:center;
		border:none;
		rotate:-180deg;
		position:relative;
		top:-5px;
	}
</style>
