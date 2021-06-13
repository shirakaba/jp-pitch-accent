<script lang="ts">
	import Pitch from "./Pitch.svelte";
	import InlinePitch from "./InlinePitch.svelte";
    import { convertStringToPitchPoints } from "./convertStringToPitchPoints";

    export let mode: "inline"|"chart"|"chart-compact" = "chart-compact";
    $: chartHeight = mode === "chart-compact" ? "7em" : "150px";
    $: jointOuterWidth = mode === "chart-compact" ? "13px" : "20px";
    $: jointInnerWidth = mode === "chart-compact" ? "7px" : "14px";
    $: chartStrokeWidth = mode === "chart-compact" ? "3px" : "4px";
    $: widthPerMora = mode === "chart-compact" ? 1.75 : 4;

    export let title: string;
    export let word: string;
    $: morae = word.replace(/\^|!|\|/g, "").length;
    $: width = widthPerMora * morae;

    $: points = convertStringToPitchPoints(word);

    const myRed = "#AD2A20";
    const myBlack = "#252525";
    const myBlue = "#202AAD";
    const myGrey = "rgba(20, 20, 20, 0.60)";
</script>

{#if mode === "chart" || mode === "chart-compact"}
    <div class="pitchChartContainer" style="width: {width}em; height: {chartHeight};">
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
            {title}
            {points}
        />
    </div>
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
    .pitchChartContainer {
        position: relative;
    }
</style>