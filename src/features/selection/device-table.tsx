"use client";
import DeviceTableSearch from "./device-search";
import AndroidDevices from "./android-devices";
import AppleDevices from "./apple-devices";
import { useDeviceStore } from "@/lib/store/device-type";
import CustomDevices from "./custom-devices";

export default function DeviceTable() {
  const { type, device } = useDeviceStore();

  return (
    <section className="flex h-full max-h-full flex-col gap-2">
      {device && (
        <p className="motion-preset-slide-down motion-duration-300">
          Selected: <span className="font-bold">{device.model} </span>
          <span className="text-sm text-muted-foreground">
            [{device.width} x {device.height}]
          </span>
        </p>
      )}
      {type === "custom" ? (
        <CustomDevices />
      ) : (
        <>
          <DeviceTableSearch />
          <div className="flex h-10 items-center border-b border-border *:flex-1 *:pl-2">
            <p>Device</p>
            <p>Resolution</p>
          </div>
          <div className="flex h-[calc(100vh-16rem)] flex-col gap-1 overflow-y-scroll">
            {type === "apple" ? <AppleDevices /> : <AndroidDevices />}
          </div>
        </>
      )}
    </section>
  );
}
