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
                nextBinary[i].followsUpstep = true;
                continue;
            }
            if(y === 0 && prevY === 1){
                nextBinary[i - 1].downstep = true;
                nextBinary[i].followsDownstep = true;
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
        {#each binary as { low, high, upstep, downstep, followsUpstep, followsDownstep, mora, isParticle }}
            <span
                class="mora"
                class:low={low}
                class:high={high}
                class:upstep={upstep}
                class:followsUpstep={followsUpstep}
                class:downstep={downstep}
                class:followsDownstep={followsDownstep}
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
        border: 1px dotted transparent;
    }
    .high {
        border-top: 1px dotted var(--pitch-line-color);
    }
    .low {
        border-bottom: 1px dotted var(--pitch-line-color);
    }
    .upstep {
        border-right: 1px dotted var(--pitch-line-color);
    }
    .followsUpstep {
        border-left: 1px dotted var(--pitch-line-color);
    }
    .downstep {
        border-right: 1px dotted var(--pitch-line-color);
    }
    .followsDownstep {
        border-left: 1px dotted var(--pitch-line-color);
    }
    .particle {
        color: var(--particle-color);
    }
</style>