<script lang="ts">
    import * as Pancake from "@sveltejs/pancake";

    let x1 = 0;
    let x2 = 0;
    let y1 = 0;
    let y2 = 1;
    export let title = "";

    export let word: string = "^ひ|がつ^よ|い";
    let points: { x: number, y: number, char: string }[] = [];
    $: {
        let buffer = "";
        let y: 0|1 = 0;
        const nextPoints: { x: number, y: number, char: string }[] = [];
        for(let i = 0; i < word.length; i++){
            const char = word[i];

            if(char === "^"){
                y = 1;
                continue;
            }

            if(char === "|"){
                y = 0;
                continue;
            }

            // TODO: throw error here if character is non-kana.

            buffer = `${buffer}${char}`;

            if(i === word.length - 1 && buffer.length === 1){
                /**
                 * 1-mora 頭高 words in isolation are relatively high in pitch.
                 * @see https://www.patreon.com/posts/japanese-episode-36438446 (Dogen episode 6.5)
                 */
                y = 1;
            }

            nextPoints.push({
                x: buffer.length - 1,
                y,
                char,
            });
        }
        points = nextPoints;
        console.log(`points:`, nextPoints);
        x2 = buffer.length - 1;
    }
</script>

<div class="chart">
    <!-- It's this Pancake.chart that needs text-align: center; to be reset to text-align: left; -->
    <Pancake.Chart {x1} {x2} {y1} {y2}>
        <!-- Chart title. See https://github.com/Rich-Harris/pancake/blob/master/site/examples/data/0/App.svelte -->
        {#if title}
            <Pancake.Point x={x1} y={y2}>
                <h3 class="title">{title}</h3>
            </Pancake.Point>
        {/if}

        <Pancake.Grid vertical count={x2 + 1} let:value>
            <span class="x label">{points[value].char}</span>
        </Pancake.Grid>

		<Pancake.Svg>
			<Pancake.SvgScatterplot data={points} let:d>
				<path class="avg" {d}/>
			</Pancake.SvgScatterplot>

			<Pancake.SvgLine data={points} let:d>
				<path class="trend" {d}/>
			</Pancake.SvgLine>
		</Pancake.Svg>
    </Pancake.Chart>
</div>

<style>
    .title {
        position: absolute;
        white-space: pre;
        top: -3em;
    }
    .chart {
        --chart-bottom-padding: calc(1em + var(--kana-size) + (var(--joint-width) / 2));
        height: 100%;
        /* top | right | bottom | left */
        padding: 3em 1em var(--chart-bottom-padding) 1em;
        box-sizing: border-box;
    }
    :global(.chart > div) {
        text-align: left;
    }
    .x.label {
        position: absolute;
        width: 2em;
        left: -1em;
        bottom: calc(var(--chart-bottom-padding) * -1);
        font-family: sans-serif;
        text-align: center;
        font-size: var(--kana-size);
    }

	path.avg {
		stroke: var(--stroke-color);
		opacity: 1;
		stroke-linejoin: round;
		stroke-linecap: round;
		stroke-width: var(--joint-width);
		fill: none;
	}
	path.trend {
		stroke: var(--stroke-color);
		stroke-linejoin: round;
		stroke-linecap: round;
		stroke-width: var(--stroke-width);
		fill: none;
	}
</style>