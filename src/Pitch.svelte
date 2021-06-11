<script lang="ts">
    import * as Pancake from "@sveltejs/pancake";

    export let points = [
        { x: 0,    y: 0 },
        { x: 1,    y: 1 },
        { x: 2,    y: 4 },
        { x: 3,    y: 9 },
        { x: 4,    y: 16 },
        { x: 5,    y: 25 },
        { x: 6,    y: 36 },
        { x: 7,    y: 49 },
        { x: 8,    y: 64 },
        { x: 9,    y: 81 },
        { x: 10, y: 100 }
    ];
    export let x1 = 0;
    export let x2 = 10;
    export let y1 = 0;
    export let y2 = 100;
    export let title = "";
</script>

<div class="chart">
    <!-- It's this Pancake.chart that needs text-align: center; to be reset to text-align: left; -->
    <Pancake.Chart {x1} {x2} {y1} {y2}>
        <!-- Chart title. See https://github.com/Rich-Harris/pancake/blob/master/site/examples/data/0/App.svelte -->
        <Pancake.Point x={x2 / 20} y={y2}>
            <div class="text">
                <h3 class="title">{title}</h3>
            </div>
        </Pancake.Point>

        <Pancake.Box {x2} {y2}>
            <div class="axes"></div>
        </Pancake.Box>

        <Pancake.Grid vertical count={5} let:value>
            <span class="x label">{value}</span>
        </Pancake.Grid>

        <Pancake.Grid horizontal count={5} let:value let:last>
            <div class="y label"><span>{value} {last ? '%' : ''}</span></div>
            <!-- <span class="y label">{value}</span> -->
        </Pancake.Grid>

        <Pancake.Svg>
            <Pancake.SvgLine data={points} let:d>
                <path class="data" {d}/>
            </Pancake.SvgLine>
        </Pancake.Svg>
    </Pancake.Chart>
</div>

<style>
    .grid-line {
        position: relative;
        display: block;
    }
    .grid-line.horizontal {
        width: calc(100% + 2em);
        left: -2em;
        border-bottom: 1px dashed #ccc;
    }
    .title {
        white-space: pre;
    }
    .chart {
        height: 100%;
        padding: 3em 2em 2em 3em;
        box-sizing: border-box;
    }
    :global(.chart > div) {
        text-align: left;
    }
    .axes {
        width: 100%;
        height: 100%;
        border-left: 1px solid black;
        border-bottom: 1px solid black;
    }
    .y.label {
        position: absolute;
        left: -3.5em;
        width: 2em;
        text-align: right;
        bottom: -0.5em;
        white-space: pre;
        font-size: 12px;
    }
    .x.label {
        position: absolute;
        width: 4em;
        left: -2em;
        bottom: -22px;
        font-family: sans-serif;
        text-align: center;
        font-size: 12px;
    }
    path.data {
        stroke: red;
        stroke-linejoin: round;
        stroke-linecap: round;
        stroke-width: 2px;
        fill: none;
    }
</style>