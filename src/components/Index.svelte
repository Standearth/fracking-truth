<script>
	import { getContext } from "svelte";
	import Header from "$components/Header.svelte";
	import Footer from "$components/Footer.svelte";
	import Cards from "$components/prime/Cards.svelte";
	import Story from "$components/prime/Story.svelte";
	import Evs from "$components/prime/Evs.svelte";
	import Recos from "$components/prime/Recos.svelte";

	const copy = getContext("copy");
	const data = getContext("data");

</script>

<Header />
<Cards />
<div class="borderpaper">
</div>
<Story />
<div class="borderpaper-r">
</div>
<Evs />
<Recos />
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
