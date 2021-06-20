<script lang="ts">
	import Pitch from "./Pitch.svelte";
	import InlinePitch from "./InlinePitch.svelte";
	import InlinePitchPancake from "./InlinePitchPancake.svelte";
    import { convertBinaryPointsToSawtoothPlot, convertStringToBinaryPoints, convertStringToPitchPoints } from "./convertStringToPitchPoints";

    export let mode: "inline"|"chart"|"chart-compact" = "inline";
    $: jointOuterWidth = mode === "chart-compact" ? "13px" : "20px";
    $: jointInnerWidth = mode === "chart-compact" ? "7px" : "14px";
    $: chartStrokeWidth = mode === "chart-compact" ? "3px" : "4px";
    $: widthPerMora = mode === "chart-compact" ? 2 : 6;
    
    export let title: string;
    $: chartHeight = mode === "chart-compact" ? "3em" : "75px";
    export let word: string;
    // TODO: accept extra prop: "extraMorae" or something, that follows the same pitch points yet with different morae.

    $: points = convertStringToPitchPoints(word);
    $: sawtoothPoints = mode !== "inline" ? 
        [] : 
        convertBinaryPointsToSawtoothPlot(convertStringToBinaryPoints(points));

    const myRed = "#AD2A20";
    const myBlack = "#252525";
    const myBlue = "#202AAD";
</script>

{#if mode === "chart" || mode === "chart-compact"}
    <tr>
        <td></td>
        <td>
            <div class="pitchChartContainer" style="height: {chartHeight};">
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
    <tr>
        <td style="color: {myRed};">
            {title}
        </td>
        <td class="moraContainer">
            {#each points as { mora, isParticle }}
                <span
                    class="mora"
                    class:compact={mode === "chart-compact"}
                    class:big={mode === "chart"}
                    class:particle={isParticle}
                >{mora}</span>
            {/each}
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
            --stroke-width={chartStrokeWidth}
            --stroke-color={myBlack}
            points={sawtoothPoints}
        />
    </div>
{/if}

<style>
    .moraContainer {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;
    }
    .mora {
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
        padding-left: 0.5em;
        padding-right: 0.5em;
    }
</style>