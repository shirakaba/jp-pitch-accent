<script lang="ts">
    import { convertStringToBinaryPoints } from "./convertStringToPitchPoints";
    import type { PitchPoint, BinaryPoint } from "./PitchPoint";

    export let title: string = "";
    export let points: PitchPoint[] = [];
    $: binary = convertStringToBinaryPoints(points);
</script>

<tr class="container">
    {#if title}
        <td class="kanji" lang="ja">
            <span>{title}</span>
        </td>
    {/if}
    <td class="kana" lang="ja">
        {#each binary as { low, high, upstep, downstep, mora, isParticle }}
            <span
                class="mora"
                class:low={low}
                class:high={high}
                class:upstep={upstep}
                class:downstep={downstep}
                class:particle={isParticle}
            >
                {mora}
            </span>
        {/each}
    </td>
</tr>

<style>
    .container {
        font-family: sans-serif;
        font-size: var(--text-size);
    }
    .kanji {
        color: var(--kanji-color);
        padding-right: 1em;
        font-weight: 300;
    }
    .kana {
        color: var(--kana-color);
    }
    .mora {
        border: 2px dotted transparent;
    }
    .high {
        border-top: 2px dotted var(--pitch-line-color);
    }
    .low {
        border-bottom: 2px dotted var(--pitch-line-color);
    }
    .upstep {
        border-right: 2px dotted var(--pitch-line-color);
    }
    .downstep {
        border-right: 2px dotted var(--pitch-line-color);
    }
    .particle {
        color: var(--particle-color);
    }
</style>