import { create } from 'zustand'

interface ImageData {
    image: string;
    setImage: (val: string) => void;

    cropDimensions: {
        x: number;
        y: number;
    };
    setCropDimensions: (val: { x: number; y: number; }) => void;
    croppedImage: string | null;
    setCroppedImage: (val: string | null) => void;
    zoom: number;
    setZoom: (val: number) => void;
}
export const useImageData = create<ImageData>((set) => ({
    image: "",
    setImage: (val) => set(() => ({ image: val })),
    cropDimensions: {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
    },
    setCropDimensions: (val) => set(() => ({ cropDimensions: val })),
    croppedImage: null,
    setCroppedImage: (val) => set(() => ({ croppedImage: val })),
    zoom: 1,
    setZoom: (val) => set(() => ({ zoom: val })),
}));
