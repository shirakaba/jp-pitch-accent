<script lang="ts">
	import Pitch from "./Pitch.svelte";
	import InlinePitch from "./InlinePitch.svelte";
    import { convertStringToPitchPoints } from "./convertStringToPitchPoints";

    export let mode: "inline"|"chart"|"chart-compact" = "chart-compact";
    $: jointOuterWidth = mode === "chart-compact" ? "13px" : "20px";
    $: jointInnerWidth = mode === "chart-compact" ? "7px" : "14px";
    $: chartStrokeWidth = mode === "chart-compact" ? "3px" : "4px";
    $: widthPerMora = mode === "chart-compact" ? 1.75 : 4;
    
    const titleIsDelegatedToSvg: boolean = false;
    export let title: string;
    $: chartHeight = mode === "chart-compact" ? (titleIsDelegatedToSvg ? "7em" : "4.5em") : (titleIsDelegatedToSvg ? "150px" : "75px");
    export let word: string;
    $: morae = word.replace(/\^|!|\|/g, "").length;
    $: width = widthPerMora * morae;

    $: points = convertStringToPitchPoints(word);

    const myRed = "#AD2A20";
    const myBlack = "#252525";
    const myBlue = "#202AAD";
    const myGrey = "rgba(20, 20, 20, 0.60)";

    export let paddingTop = "8px";
</script>

{#if mode === "chart" || mode === "chart-compact"}
    <tr class="pitchChartRow">
        <td style="color: {myRed};">
            {title}
        </td>
        <td>
            <div class="pitchChartContainer" style="width: {width}em; height: {chartHeight}; padding-top: {paddingTop};">
                <Pitch
                    --stroke-color={myBlack}
                    --stroke-width={chartStrokeWidth}
                    --joint-outer-width={jointOuterWidth}
                    --joint-inner-width={jointInnerWidth}
                    --joint-outer-color="#252525"
                    --joint-inner-color="#FEFEF2"
                    --title-color={myRed}
                    --particle-color={myGrey}
                    --kana-color={myBlack}
                    --title-size="2em"
                    --kana-size="1em"
                    --gutter-size="1em"
                    {points}
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
{/if}

<style>
    .pitchChartRow {
        vertical-align: bottom;
    }
    .pitchChartContainer {
        position: relative;
    }
</style>