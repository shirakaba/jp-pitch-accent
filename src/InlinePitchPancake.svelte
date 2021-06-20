<script lang="ts">
    import * as Pancake from "@sveltejs/pancake";
    import type { PitchPoint, SawtoothPoint } from "./PitchPoint";

    let x1 = 0;
    let x2 = 0;
    let y1 = 0;
    let y2 = 1;
    export let points: SawtoothPoint[] = [];
    $: x2 = points.length - 1;
</script>

<div class="chart">
    <Pancake.Chart {x1} {x2} {y1} {y2}>
		<Pancake.Svg>
            <!-- Line -->
            <Pancake.SvgLine data={points} let:d>
                <path class="trend" {d}/>
            </Pancake.SvgLine>
		</Pancake.Svg>
    </Pancake.Chart>
</div>

<style>
    .chart {
        height: 100%;
        box-sizing: border-box;
        /* padding: calc(var(--joint-outer-width) / 2); */
    }
    :global(.chart > div) {
        text-align: left;
    }
	path.trend {
        /* stroke-dasharray: 10; */
		stroke: var(--stroke-color);
		stroke-linejoin: round;
		stroke-linecap: round;
		stroke-width: var(--stroke-width);
		fill: none;
	}
</style>