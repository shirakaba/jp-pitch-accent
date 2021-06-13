<script lang="ts">
    import type { PitchPoint, BinaryPoint } from "./PitchPoint";

    export let title: string = "";
    export let points: PitchPoint[] = [];
    let binary: BinaryPoint[] = [];
    $: {
        let nextBinary: BinaryPoint[] = [];
        for(let i = 0; i < points.length; i++){
            const { y, mora, isParticle } = points[i];
            
            nextBinary.push({
                high: y === 1,
                low: y === 0,
                mora,
                isParticle,
            });

            if(i === 0){
                continue;
            }

            const { y: prevY } = points[i - 1];
            if(y === 1 && prevY === 0){
                nextBinary[i - 1].upstep = true;
                continue;
            }
            if(y === 0 && prevY === 1){
                nextBinary[i - 1].downstep = true;
                continue;
            }
        }
        binary = nextBinary;
    }
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
        padding-right: 1px;
        border-right: 1px dotted var(--pitch-line-color);
    }
    .upstep + .high {
        border-left: 1px dotted var(--pitch-line-color);
        padding-left: 1px;
    }
    .downstep {
        padding-right: 1px;
        border-right: 1px dotted var(--pitch-line-color);
    }
    .downstep + .low {
        border-left: 1px dotted var(--pitch-line-color);
        padding-left: 1px;
    }
    .particle {
        color: var(--particle-color);
    }
</style>