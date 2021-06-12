<script lang="ts">
	import Pitch from "./Pitch.svelte";

    let widthPerMora = 60;

    export let title: string;
    export let word: string;
    $: morae = word.replace(/\^|!|\|/g, "").length;
    $: width = widthPerMora * morae;
</script>

<div class="container" style="width: {width}px;">
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

<style>
    .container {
        position: relative;
        height: 150px;
    }
</style>