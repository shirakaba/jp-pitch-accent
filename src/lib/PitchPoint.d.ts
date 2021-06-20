export interface PancakePoint {
    x: number;
    y: number;    
}

export interface PitchPoint extends PancakePoint {
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

export interface SawtoothPoint extends PancakePoint {
    
}