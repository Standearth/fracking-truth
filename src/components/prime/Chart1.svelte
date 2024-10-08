<script>
    import { LayerCake, Svg, flatten, stack } from 'layercake';
  
    import { scaleBand, scaleOrdinal } from 'd3-scale';
    import { format } from 'd3-format';
  
    import BarStacked from '$components/layercake/BarStacked.svelte';
    import AxisX from '$components/prime/AxisX.svelte';
    import AxisY from '$components/prime/AxisY.svelte';
    import { tweened } from 'svelte/motion';
    import { cubicOut } from 'svelte/easing';
 
    import { interpolateLab } from 'd3-interpolate';
    // This example loads csv data as json using @rollup/plugin-dsv
    

    export let value;
    const tweenOptions = {
        duration: 800,
        interpolate: interpolateLab,
    };
    import data from '$data/fruitOrdinal.csv';
    
    const seriesColors = tweened(['#00bbff', '#8bcef6', '#c4e2ed', '#f7f6e3'], tweenOptions);

    $: if (value == 1) {
      seriesColors.set(['#ffffff', '#000000', '#888888', '#cccccc']);
    } else {
      seriesColors.set(['#00bbff', '#8bcef6', '#c4e2ed', '#f7f6e3']);
    }
  
    const xKey = [0, 1];
    const yKey = 'year';
    const zKey = 'key';

    const seriesNames = Object.keys(data[0]).filter(d => d !== yKey);
    data.forEach(d => {
            seriesNames.forEach(name => {
                d[name] = +d[name];
            });
        });
    const stackedData = stack(data, seriesNames);
  
    /* --------------------------------------------
     * Cast data
     */
    
  
    const formatLabelX = d => format(`~s`)(d);
  </script>
  
  <div class="chart-container">
    <LayerCake
      padding={{ top: 0, bottom: 20, left: 35 }}
      x={xKey}
      y={d => d.data[yKey]}
      z={zKey}
      yScale={scaleBand().paddingInner(0.05)}
      zScale={scaleOrdinal()}
      zDomain={seriesNames}
      zRange={$seriesColors}
      flatData={flatten(stackedData)}
      data={stackedData}
    >
      <Svg>
        <AxisX baseline format={formatLabelX} />
        <AxisY gridlines={false} />
        <BarStacked />
      </Svg>
    </LayerCake>
  </div>
  
  <style>
    /*
      The wrapper div needs to have an explicit width and height in CSS.
      It can also be a flexbox child or CSS grid element.
      The point being it needs dimensions since the <LayerCake> element will
      expand to fill it.
    */
    .chart-container {
      width: 100%;
      height: 250px;
    }
  </style>