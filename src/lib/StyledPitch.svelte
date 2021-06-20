<script lang="ts">
	import Pitch from "./Pitch.svelte";
	import InlinePitchPancake from "./InlinePitchPancake.svelte";
    import { convertBinaryPointsToSawtoothPlot, convertNumericPatternToNumericPoints, convertPitchPointsToBinaryPoints, convertStringToPitchPoints } from "./convertStringToPitchPoints";

    $: jointOuterWidth = "13px";
    $: jointInnerWidth = "7px";
    $: chartStrokeWidth = "3px";
    const sawtoothStrokeWidth = "1px";
    const widthPerMora = 2;
    
    $: chartHeight = "3em";
    export let pattern: string;
    export let texts: string[] = [];
    $: textsParsed = texts.map(text => {
        const [kanji, kana] = text.split("：");
        return { kanji, kana };
    });
    $: morae = textsParsed.map(text => convertStringToPitchPoints(text.kana).map(p => p.mora));

    $: points = convertNumericPatternToNumericPoints(pattern);
    $: sawtoothPoints = convertBinaryPointsToSawtoothPlot(convertPitchPointsToBinaryPoints(points));
    $: sawtoothWidth = `${widthPerMora * points.length}`;
    $: chartWidth = `calc(${widthPerMora * points.length}em)`;

    const myRed = "#AD2A20";
    const myBlack = "#252525";
    const myBlue = "#202AAD";

    export let showChart = true;
</script>

{#if showChart}
    <tr class="chartRow">
        <td aria-hidden="true"></td>
        <td aria-hidden="true" class="spacerCell"></td>
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
    <tr aria-hidden="true" class="spacerRow">
        <td colspan="3"></td>
    </tr>
{/if}
{#each textsParsed as { kanji }, i}
    <tr class="textRow">
        <td style="color: {myRed};">
            {kanji}
        </td>
        <td class="spacerCell"></td>
        <td class="moraCell">
            <div class="moraContainer" style="width: {sawtoothWidth}em;">
                {#each points as { isParticle }, j }
                    <span
                        class="mora compact"
                        class:particle={isParticle}
                    >{morae[i][j]}</span>
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
    <tr aria-hidden="true" class="spacerRow">
        <td colspan="3"></td>
    </tr>
{/each}

<style>
    .spacerRow {
        height: 1em;
    }
    .spacerCell {
        width: 1em;
    }
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