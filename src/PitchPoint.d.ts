export interface PitchPoint {
    x: number;
    y: number;
    mora: string;
    isParticle: boolean;
}

export interface BinaryPoint {
    upstep?: true;
    downstep?: true;
    low: boolean;
    high: boolean;
    mora: string;
    isParticle: boolean;
}
