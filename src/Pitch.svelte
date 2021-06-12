<script lang="ts">
    import * as Pancake from "@sveltejs/pancake";

    let x1 = 0;
    let x2 = 0;
    let y1 = 0;
    let y2 = 1;
    export let title = "";

    interface PitchPoint {
        x: number;
        y: number;
        mora: string;
        isParticle: boolean;
    }

    export let word: string = "^ひ|!がつ^よ|い";
    let points: PitchPoint[] = [];
    let pointsOfWhichParticles: PitchPoint[] = [];
    $: {
        let morae = "";
        let mora = "";
        let y: 0|1 = 0;
        let isParticle: boolean = false;
        const nextPoints: PitchPoint[] = [];
        for(let i = 0; i < word.length; i++){
            const char = word[i];

            if(char === "^"){
                y = 1;
                continue;
            }

            if(char === "|"){
                y = 0;
                continue;
            }

            if(char === "!"){
                isParticle = true;
                continue;
            }

            // if(!/[\p{Script_Extensions=Hiragana}\p{Script_Extensions=Katakana}]/.test(char)){
            if(!/[\u3040-\u3096\u30A0-\u30FF]/.test(char)){
                throw new Error(`Expected character in full-width hiragana or katakana range, but got: ${char}`);
            }

            mora = `${mora}${char}`;

            if(/ゃ|ゅ|ょ/.test(char)){
                if(!/き|ぎ|し|じ|ち|に|ひ|び|ぴ|み|り/.test(mora[0])){
                    throw new Error(`Expected mora ending with /ゃ|ゅ|ょ/ to be preceded by /き|ぎ|し|じ|ち|に|ひ|び|ぴ|み|り/, but got: ${mora}`);
                }
                continue;
            }

            if(/ャ|ュ|ョ/.test(char)){
                if(!/キ|ギ|シ|ジ|チ|ニ|ヒ|ビ|ピ|ミ|リ/.test(mora[0])){
                    throw new Error(`Expected mora ending with /ャ|ュ|ョ/ to be preceded by /キ|ギ|シ|ジ|チ|ニ|ヒ|ビ|ピ|ミ|リ/, but got: ${mora}`);
                }
                continue;
            }

            morae = `${morae}${mora}`;

            if(i === word.length - 1 && morae.length === 1){
                /**
                 * 1-mora 頭高 words in isolation are relatively high in pitch.
                 * @see https://www.patreon.com/posts/japanese-episode-36438446 (Dogen episode 6.5)
                 */
                y = 1;
            }

            nextPoints.push({
                x: morae.length - 1,
                y,
                mora: char,
                isParticle,
            });

            isParticle = false;
            mora = "";
        }
        points = nextPoints;
        // console.log(`points:`, nextPoints);
        x2 = morae.length - 1;
        pointsOfWhichParticles = points.filter(p => p.isParticle);
    }
</script>

<div class="chart">
    <Pancake.Chart {x1} {x2} {y1} {y2}>
        <!-- Title -->
        {#if title}
            <Pancake.Point x={x1} y={y2}>
                <h3 class="title">{title}</h3>
            </Pancake.Point>
        {/if}

        <!-- Kana -->
        <Pancake.Grid vertical count={x2} let:value>
            <span class="x label">{points[value].mora}</span>
        </Pancake.Grid>

		<Pancake.Svg>
            <!-- Line -->
            <Pancake.SvgLine data={points} let:d>
                <path class="trend" {d}/>
            </Pancake.SvgLine>
            
            <!-- Morae -->
			<Pancake.SvgScatterplot data={points} let:d>
				<path class="joint outer" {d}/>
			</Pancake.SvgScatterplot>
            
            <!-- Particles -->
			<Pancake.SvgScatterplot data={pointsOfWhichParticles} let:d>
				<path class="joint inner" {d}/>
			</Pancake.SvgScatterplot>
            
            <!-- Title -->
            <Pancake.Point x={x1} y={y2}>
                <h3 class="title">{title}</h3>
            </Pancake.Point>
		</Pancake.Svg>
    </Pancake.Chart>
</div>

<style>
    .chart {
        --chart-top-padding: calc(var(--gutter-size) + var(--title-size) + (var(--joint-outer-width) / 2));
        --chart-bottom-padding: calc(var(--gutter-size) + var(--kana-size) + (var(--joint-outer-width) / 2));
        --chart-left-padding: calc(var(--gutter-size) + (var(--joint-outer-width) / 2));
        --chart-right-padding: var(--chart-left-padding);
        height: 100%;
        /* top | right | bottom | left */
        padding: var(--chart-top-padding) var(--chart-right-padding) var(--chart-bottom-padding) var(--chart-left-padding);
        box-sizing: border-box;
    }
    :global(.chart > div) {
        text-align: left;
    }
    .title {
        color: #AD2A20;
        position: absolute;
        white-space: pre;
        top: calc(var(--chart-top-padding) * -1);
        left: calc(0em - var(--joint-outer-width) / 2);
    }
    .x.label {
        position: absolute;
        width: 2em;
        left: -1em;
        bottom: calc(var(--chart-bottom-padding) * -1);
        font-family: sans-serif;
        text-align: center;
        font-size: var(--kana-size);
    }

	path.joint {
		opacity: 1;
		stroke-linejoin: round;
		stroke-linecap: round;
		fill: none;
	}
    path.joint.outer {
		stroke-width: var(--joint-outer-width);
        stroke: var(--joint-outer-color);
    }
	path.joint.inner {
		stroke-width: var(--joint-inner-width);
        stroke: var(--joint-inner-color);
	}
	path.trend {
		stroke: var(--stroke-color);
		stroke-linejoin: round;
		stroke-linecap: round;
		stroke-width: var(--stroke-width);
		fill: none;
	}
</style>