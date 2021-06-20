<script lang="ts">
	import Pitch from "./Pitch.svelte";
	import InlinePitch from "./InlinePitch.svelte";
	import InlinePitchPancake from "./InlinePitchPancake.svelte";
    import { convertBinaryPointsToSawtoothPlot, convertStringToBinaryPoints, convertStringToPitchPoints } from "./convertStringToPitchPoints";

    export let mode: "inline"|"chart"|"chart-compact" = "chart-compact";
    $: jointOuterWidth = mode === "chart-compact" ? "13px" : "20px";
    $: jointInnerWidth = mode === "chart-compact" ? "7px" : "14px";
    $: chartStrokeWidth = mode === "chart-compact" ? "3px" : "4px";
    const sawtoothStrokeWidth = "1px";
    $: widthPerMora = mode === "chart-compact" ? 2 : 6;
    
    export let title: string;
    $: chartHeight = mode === "chart-compact" ? "3em" : "75px";
    export let word: string;
    // TODO: accept extra prop: "extraMorae" or something, that follows the same pitch points yet with different morae.

    $: points = convertStringToPitchPoints(word);
    $: sawtoothPoints = convertBinaryPointsToSawtoothPlot(convertStringToBinaryPoints(points));
    $: sawtoothWidth = `${widthPerMora * points.length}`;
    $: chartWidth = `calc(${widthPerMora * points.length}em)`;

    const myRed = "#AD2A20";
    const myBlack = "#252525";
    const myBlue = "#202AAD";
</script>

{#if mode === "chart" || mode === "chart-compact"}
    <tr class="chartRow">
        <td></td>
        <td>
            <div
                class="pitchChartContainer"
                style="height: {chartHeight}; width: {chartWidth}; padding-left: calc(1em - {jointOuterWidth} / 2); padding-right: calc(1em - {jointOuterWidth} / 2)"
            >
                <Pitch
                    --stroke-color={myBlack}
                    --stroke-width={chartStrokeWidth}
                    --joint-outer-width={jointOuterWidth}
                    --joint-inner-width={jointInnerWidth}
                    --joint-outer-color="#252525"
                    --joint-inner-color="#FEFEF2"
                    {points}
                />
            </div>
        </td>
    </tr>
    <tr class="textRow">
        <td style="color: {myRed};">
            {title}
        </td>
        <td class="moraCell">
            <div class="moraContainer" style="width: {sawtoothWidth}em;">
                {#each points as { mora, isParticle }}
                    <span
                        class="mora"
                        class:compact={mode === "chart-compact"}
                        class:big={mode === "chart"}
                        class:particle={isParticle}
                    >{mora}</span>
                {/each}
            </div>
            <div class="sawtoothContainer" style="width: {sawtoothWidth}em;">
                <InlinePitchPancake
                    --stroke-width={sawtoothStrokeWidth}
                    --stroke-color={myBlack}
                    points={sawtoothPoints}
                />
            </div>
        </td>
    </tr>
{:else}
    <InlinePitch
        --text-color={myBlack}
        --pitch-line-color={myBlack}
        --particle-color={myRed}
        --text-size="1em"
        --kanji-color={myBlue}
        --kana-color={myBlack}
        {title}
        {points}
    />
    <div class="pitchChartContainer" style="height: {chartHeight};">
        <InlinePitchPancake
            --stroke-width={sawtoothStrokeWidth}
            --stroke-color={myBlack}
            points={sawtoothPoints}
        />
    </div>
{/if}

<style>
    .chartRow {
        --row-margin: 0.5em;
    }
    .chartRow > td {
        padding-top: calc(var(--row-margin) * 4);
    }
    .textRow {
        --row-margin: 0.5em;
    }
    .textRow > td {
        padding-top: var(--row-margin);
    }
    .sawtoothContainer {
        top: var(--row-margin);
        position: absolute;
        height: 1.5em;
    }
    .moraCell {
        position: relative;
    }
    .moraContainer {
        /* display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between; */
    }
    .mora {
        display: inline-block;
        text-align: center;
    }
    .mora.compact {
        width: 2em;
    }
    .mora.big {
        width: 4em;
    }
    .mora.particle {
        color: rgba(20, 20, 20, 0.60);
    }
    .pitchChartContainer {
        position: relative;
        box-sizing: border-box;
    }
</style>