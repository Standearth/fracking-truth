<script>
import { LayerCake, Svg } from 'layercake';
import Area from '$components/layercake/Area.svelte';
import AxisX from '$components/layercake/AxisX.svg.svelte';
import AxisY from '$components/layercake/AxisY.svg.svelte';
import { scaleLinear } from 'd3-scale';
import { stack } from 'd3-shape';
import { extent, max } from 'd3-array';
import { tweened } from 'svelte/motion';
import { cubicOut } from 'svelte/easing';
	import Dice_3 from 'lucide-svelte/icons/dice-3';

export let chart = 0;

// Parse the CSV data
const data = [
  { Year: 2023, EVs: 19300, Total: 280899 },
  { Year: 2024, EVs: 20374, Total: 296349 },
  { Year: 2025, EVs: 27521, Total: 312648 },
  { Year: 2026, EVs: 37174, Total: 329844 },
  { Year: 2027, EVs: 50214, Total: 347985 },
  { Year: 2028, EVs: 67827, Total: 367124 },
  { Year: 2029, EVs: 91618, Total: 387316 },
  { Year: 2030, EVs: 120000, Total: 408618 }
];

// Create scales
const xScale = scaleLinear().domain(extent(data, d => d.Year));

// Create stacked data for full chart
$: stackedData = chart === 1
  ? stack().keys(['EVs', 'Total'])(data)
  : [data.map(d => ({data: d, 0: 0, 1: d.EVs}))];

// Calculate the maximum y value
$: maxY = chart === 1
  ? max(stackedData[stackedData.length - 1], d => d[1])
  : max(data, d => d.EVs);

// Use tweened store for yScale domain
let yDomain = [[0, maxY]];

$: yScale = scaleLinear().domain(yDomain);


let width;
let height;
</script>

<div class="chart-container" bind:clientWidth={width} bind:clientHeight={height}>
  <LayerCake debug=true
    {data}
    x={d => d.Year}
    y={chart === 1 ? d => [d.EVs, d.Total] : d => d.EVs}
    {xScale}
    yScale={yScale}
    {width}
    {height}
  >
    <Svg>
      <AxisX />
      <AxisY />
      {#each stackedData as series, i}
        <Area 
          data={series} 
          fill={i === 0 ? '#3498db' : '#e74c3c'}
        />
      {/each}
    </Svg>
  </LayerCake>
</div>

<style>
  .chart-container {
    width: 80%;
    height: 300px;
    margin:auto;
  }
</style>