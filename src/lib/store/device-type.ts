import { create } from "zustand"

type Device = {
    model: string | null
    width: string | null
    height: string | null
}

interface DeviceType {
    type: "apple" | "android" | "custom"
    setType: (val: "apple" | "android" | "custom") => void;
    device: Device
    setDevice: (val: Device) => void;
}
export const useDeviceStore = create<DeviceType>((set) => ({
    type: "apple",
    setType: (val) => set(() => ({ type: val })),
    device: {
        model: "iPhone 16 Pro Max",
        width: "1320",
        height: "2868"
    },
    setDevice: (val) => set(() => ({
        device: {
            model: val.model,
            height: val.height,
            width: val.width
        }
    })),

}))
