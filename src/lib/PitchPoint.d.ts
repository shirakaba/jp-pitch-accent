export interface PancakePoint {
    x: number;
    y: number;    
}

export interface NumericPoint extends PancakePoint {
    isParticle: boolean;
}

export interface NumericPointWithMora extends NumericPoint {
    mora: string;
}

export interface BinaryPoint {
    upstep?: true;
    downstep?: true;
    low: boolean;
    high: boolean;
    isParticle: boolean;
}
