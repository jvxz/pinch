import { create } from "zustand"

interface DeviceType {
    type: "apple" | "android";
    setType: (val: "apple" | "android") => void;
}
export const useDeviceType = create<DeviceType>((set) => ({
    type: "apple",
    setType: (val) => set((state) => ({ type: val }))
}))
