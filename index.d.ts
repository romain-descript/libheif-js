export interface HeifImage {
    get_width(): number;
    get_height(): number;
    is_primary(): boolean;
    free(): void;
    display<T extends { data: Uint8ClampedArray }>(
        options: T,
        callback: (displayData: T | null) => void,
    ): void;
}

export class HeifDecoder {
    decode(buffer: ArrayBuffer): HeifImage[];
}

export const fourcc: (code: string) => number;

export const heif_error_code: number;
export const heif_suberror_code: number;
export const heif_compression_format: number;
export const heif_chroma: number;
export const heif_colorspace: number;
export const heif_channel: number;
