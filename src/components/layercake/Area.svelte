<script>
	import { getContext } from "svelte";
	import { area, curveLinear } from "d3";

	const { xGet, yGet, yScale } = getContext("LayerCake");

	export let data;
	export let fill = "#ccc";
	export let curve = curveLinear;

	$: path = area()
		.x((d) => $xGet(d.data))
		.y0(() => $yScale.range()[0]) // Set y0 to the bottom of the chart
		.y1((d) => $yScale(d[1]))
		.curve(curve);

	$: d = path(data);
</script>

<path {d} {fill} opacity="0.5" />
