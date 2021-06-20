<script lang="ts">
	import Pitch from "./Pitch.svelte";
	import InlinePitchPancake from "./InlinePitchPancake.svelte";
    import { convertBinaryPointsToSawtoothPlot, convertStringToBinaryPoints, convertStringToPitchPoints } from "./convertStringToPitchPoints";

    $: jointOuterWidth = "13px";
    $: jointInnerWidth = "7px";
    $: chartStrokeWidth = "3px";
    const sawtoothStrokeWidth = "1px";
    const widthPerMora = 2;
    
    export let title: string;
    $: chartHeight = "3em";
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
                    class="mora compact"
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

<style>
    .sawtoothContainer {
        top: 0;
        position: absolute;
        height: 1.5em;
    }
    .moraCell {
        position: relative;
    }
    .mora {
        display: inline-block;
        text-align: center;
    }
    .mora.compact {
        width: 2em;
    }
    .mora.particle {
        color: rgba(20, 20, 20, 0.60);
    }
    .pitchChartContainer {
        position: relative;
        box-sizing: border-box;
    }
</style>