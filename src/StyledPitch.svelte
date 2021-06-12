<script lang="ts">
	import Pitch from "./Pitch.svelte";

    export let title: string;
    export let word: string;
</script>

<Pitch
    --stroke-color="black"
    --stroke-width="4px"
    --joint-outer-width="20px"
    --joint-inner-width="14px"
    --joint-outer-color="black"
    --joint-inner-color="white"
    --title-size="2em"
    --kana-size="1em"
    --gutter-size="1em"
    {title}
    {word}
/>
