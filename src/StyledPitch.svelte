<script lang="ts">
	import Pitch from "./Pitch.svelte";
	import InlinePitch from "./InlinePitch.svelte";
    import { convertStringToPitchPoints } from "./convertStringToPitchPoints";

    let widthPerMora = 60;

    export let title: string;
    export let word: string;
    $: morae = word.replace(/\^|!|\|/g, "").length;
    $: width = widthPerMora * morae;

    $: points = convertStringToPitchPoints(word);

    export let mode: "inline"|"chart" = "inline";

    const myRed = "#AD2A20";
    const myBlack = "#252525";
    const myBlue = "#222F75";
</script>

{#if mode === "chart"}
    <div class="pitchChartContainer" style="width: {width}px;">
        <Pitch
            --stroke-color={myBlack}
            --stroke-width="4px"
            --joint-outer-width="20px"
            --joint-inner-width="14px"
            --joint-outer-color="#252525"
            --joint-inner-color="#FEFEF2"
            --title-color={myRed}
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
        height: 150px;
    }
</style>