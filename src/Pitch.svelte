<script lang="ts">
    import * as Pancake from "@sveltejs/pancake";
    import type { PitchPoint } from "./PitchPoint";

    let x1 = 0;
    let x2 = 0;
    let y1 = 0;
    let y2 = 1;
    export let points: PitchPoint[] = [];
    $: pointsOfWhichParticles = points.filter(p => p.isParticle);
    $: x2 = points.length - 1;
</script>

<div class="chart">
    <Pancake.Chart {x1} {x2} {y1} {y2}>
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
        height: 100%;
        box-sizing: border-box;
        padding: calc(var(--joint-outer-width) / 2);
    }
    :global(.chart > div) {
        text-align: left;
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