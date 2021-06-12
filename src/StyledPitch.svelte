<script lang="ts">
	import Pitch from "./Pitch.svelte";

    export let title: string;

    export let word: string;
</script>

<Pitch --stroke-color="black" --stroke-width="4px" --joint-width="20px" {title} {word}/>
