<script>
	import DemoLink from "$components/demo/Demo.Link.svelte";
	import DemoImg from "$components/demo/Demo.Img.svelte";
	import DemoButtonSet from "$components/demo/Demo.ButtonSet.svelte";
	import DemoRange from "$components/demo/Demo.Range.svelte";
	import DemoSelect from "$components/demo/Demo.Select.svelte";
	import DemoToggle from "$components/demo/Demo.Toggle.svelte";
	import DemoSortTable from "$components/demo/Demo.SortTable.svelte";
	import DemoLayerCake from "$components/demo/Demo.LayerCake.svelte";
	import DemoSvelteElement from "$components/demo/Demo.SvelteElement.svelte";
	import DemoSvelteComponent from "$components/demo/Demo.SvelteComponent.svelte";
	import DemoFigure from "$components/demo/Demo.Figure.svelte";
	import DemoTip from "$components/demo/Demo.Tip.svelte";
	import DemoScrolly from "$components/demo/Demo.Scrolly.svelte";
	import DarkModeToggle from "$components/helpers/DarkModeToggle.svelte";
</script>

<div id="demo">
	<h1>Demo</h1>
	<DarkModeToggle />
	<DemoLink />
	<DemoImg />
	 <DemoButtonSet /> 
	 <DemoRange /> 
	 <DemoSelect /> 
	 <DemoToggle /> 
	 <DemoSortTable /> 
	 <DemoLayerCake /> 
	<DemoSvelteElement />
	<DemoSvelteComponent />
	<DemoTip />
	<DemoFigure />
	<DemoScrolly />
</div>

<style>
	#demo {
		max-width: 40rem;
		padding: 16px;
		margin: 0 auto;
	}

	:global(#demo section) {
		margin: 32px auto;
		padding-top: 32px;
	}

	:global(#demo h2 span) {
		background: var(--color-mark);
		padding: 0 8px;
	}
</style>
