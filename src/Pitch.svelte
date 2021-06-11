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
            <Pancake.Point x={x1} y={2 * y2}>
                <div class="text">
                    <h3 class="title">{title}</h3>
                </div>
            </Pancake.Point>
        {/if}

        <!-- <Pancake.Box {x2} {y2}>
            <div class="axes"></div>
        </Pancake.Box> -->

        <Pancake.Grid vertical count={x2 + 1} let:value>
            <!-- <span class="x label">{value}</span> -->
            <span class="x label">{points[value].char}</span>
        </Pancake.Grid>

        <Pancake.Grid horizontal count={2} let:value let:last>
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