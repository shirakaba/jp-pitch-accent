<script lang="ts">
	import Pitch from "./Pitch.svelte";

    let widthPerMora = 60;
    let height = 150;

    export let title: string;
    export let word: string;
    $: morae = word.replace(/\^|!|\|/g, "").length;
    $: width = widthPerMora * morae;
</script>

<div style="position: relative; width: {width}px; height: {height}px; margin-top: 8px;">
    <Pitch
        --stroke-color="#252525"
        --stroke-width="4px"
        --joint-outer-width="20px"
        --joint-inner-width="14px"
        --joint-outer-color="#252525"
        --joint-inner-color="#FEFEF2"
        --title-size="2em"
        --kana-size="1em"
        --gutter-size="1em"
        {title}
        {word}
    />
</div>
