import type { NumericPointWithMora, BinaryPoint, PancakePoint, NumericPoint } from "./PitchPoint";

export function convertStringToPitchPoints(word: string): NumericPointWithMora[] {
    let morae = "";
    let mora = "";
    let y: 0|1 = 0;
    let isParticle: boolean = false;
    const nextPoints: NumericPointWithMora[] = [];
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

        if(i < word.length - 1){
            const nextChar = word[i + 1];
            if(/ゃ|ゅ|ょ|ャ|ュ|ョ/.test(nextChar)){
                // Mora consists of another morpheme, so agglutinate that too.

                // TODO: support small adjoining katakana like ェ for ジェイミー.
                // Note: We don't presently support more than two small adjoining katakana,
                // e.g. ジェィミー. I'm not sure whether it's valid or not.
                continue;
            }
        }

        if(/ゃ|ゅ|ょ/.test(char)){
            if(!/き|ぎ|し|じ|ち|に|ひ|び|ぴ|み|り/.test(mora[0])){
                throw new Error(`Expected mora ending with /ゃ|ゅ|ょ/ to be preceded by /き|ぎ|し|じ|ち|に|ひ|び|ぴ|み|り/, but got: ${mora}`);
            }
        }

        if(/ャ|ュ|ョ/.test(char)){
            if(!/キ|ギ|シ|ジ|チ|ニ|ヒ|ビ|ピ|ミ|リ/.test(mora[0])){
                throw new Error(`Expected mora ending with /ャ|ュ|ョ/ to be preceded by /キ|ギ|シ|ジ|チ|ニ|ヒ|ビ|ピ|ミ|リ/, but got: ${mora}`);
            }
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
            x: nextPoints.length,
            y,
            mora,
            isParticle,
        });

        isParticle = false;
        mora = "";
    }
    return nextPoints;
}

export function convertNumericPatternToNumericPoints(morae: string): NumericPoint[] {
    return morae.split("").map((mora, i) => {
        return {
            x: i,
            y: (mora === "0" || mora === "-") ? 0 : 1,
            isParticle: mora === "-" || mora === "+",
        };
    })
}

export function convertPitchPointsToBinaryPoints(points: NumericPoint[]): BinaryPoint[] {
    const binary: BinaryPoint[] = [];
    for(let i = 0; i < points.length; i++){
        const { y, isParticle } = points[i];
        
        binary.push({
            high: y === 1,
            low: y === 0,
            isParticle,
        });

        if(i === 0){
            continue;
        }

        const { y: prevY } = points[i - 1];
        if(y === 1 && prevY === 0){
            binary[i - 1].upstep = true;
            continue;
        }
        if(y === 0 && prevY === 1){
            binary[i - 1].downstep = true;
            continue;
        }
    }
    return binary;
}

export function convertBinaryPointsToSawtoothPlot(points: BinaryPoint[]): PancakePoint[] {
    const plot: PancakePoint[] = [];
    for(let i = 0; i < points.length; i++){
        const { low, high, upstep, downstep } = points[i];
        const x = i;

        if(i === 0){
            plot.push({
                x,
                y: high ? 1 : 0,
            });
        }

        if(downstep){
            plot.push({
                x: x + 1,
                y: 1,
            });
            plot.push({
                x: x + 1,
                y: 0,
            });
        } else if(upstep){
            plot.push({
                x: x + 1,
                y: 0,
            });
            plot.push({
                x: x + 1,
                y: 1,
            });
        } else {
            plot.push({
                x: x + 1,
                y: high ? 1 : 0,
            });
        }
    }
    return plot;
}