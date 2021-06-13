<script lang="ts">
    import * as Pancake from "@sveltejs/pancake";
    import type { PitchPoint } from "./PitchPoint";

    let x1 = 0;
    let x2 = 0;
    let y1 = 0;
    let y2 = 1;
    export let title = "";
    export let points: PitchPoint[] = [];
    $: pointsOfWhichParticles = points.filter(p => p.isParticle);
    $: x2 = points.length - 1;
</script>

<div class="chart" style="{title ? "" : "padding-top: 1em;"}">
    <Pancake.Chart {x1} {x2} {y1} {y2}>
        <!-- Title -->
        {#if title}
            <Pancake.Point x={x1} y={y2}>
                <h3 class="title">{title}</h3>
            </Pancake.Point>
        {/if}

        <!-- Kana -->
        <Pancake.Grid vertical count={x2} let:value>
            <span class:particle={points[value].isParticle} class="kana">{points[value].mora}</span>
        </Pancake.Grid>

		<Pancake.Svg>
            <!-- Line -->
            <Pancake.SvgLine data={points} let:d>
                <path class="trend" {d}/>
            </Pancake.SvgLine>
            
            <!-- Morae -->
			<Pancake.SvgScatterplot data={points} let:d>
				<path class="joint outer" {d}/>
			</Pancake.SvgScatterplot>
            
            <!-- Particles -->
			<Pancake.SvgScatterplot data={pointsOfWhichParticles} let:d>
				<path class="joint inner" {d}/>
			</Pancake.SvgScatterplot>
		</Pancake.Svg>
    </Pancake.Chart>
</div>

<style>
    .chart {
        --chart-top-padding: calc(var(--gutter-size) + var(--title-size) + (var(--joint-outer-width) / 2));
        --chart-bottom-padding: calc(var(--gutter-size) + var(--kana-size) + (var(--joint-outer-width) / 2));
        --chart-left-padding: calc(var(--gutter-size) + (var(--joint-outer-width) / 2));
        --chart-right-padding: var(--chart-left-padding);
        height: 100%;
        /* top | right | bottom | left */
        padding: var(--chart-top-padding) var(--chart-right-padding) var(--chart-bottom-padding) var(--chart-left-padding);
        box-sizing: border-box;
    }
    :global(.chart > div) {
        text-align: left;
    }
    .title {
        color: var(--title-color);
        position: absolute;
        white-space: pre;
        top: calc(var(--chart-top-padding) * -1);
        left: calc(0em - var(--joint-outer-width) / 2);
    }
    .kana {
        position: absolute;
        width: 2em;
        left: -1em;
        bottom: calc(var(--chart-bottom-padding) * -1.11);
        font-family: sans-serif;
        text-align: center;
        font-size: var(--kana-size);
        color: var(--kana-color);
    }
    .kana.particle {
        color: var(--particle-color);
    }
	path.joint {
		opacity: 1;
		stroke-linejoin: round;
		stroke-linecap: round;
		fill: none;
	}
    path.joint.outer {
		stroke-width: var(--joint-outer-width);
        stroke: var(--joint-outer-color);
    }
	path.joint.inner {
		stroke-width: var(--joint-inner-width);
        stroke: var(--joint-inner-color);
	}
	path.trend {
		stroke: var(--stroke-color);
		stroke-linejoin: round;
		stroke-linecap: round;
		stroke-width: var(--stroke-width);
		fill: none;
	}
</style>