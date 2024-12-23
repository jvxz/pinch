"use client";
import { Button } from "@/components/ui/button";
import { useDeviceStore } from "@/lib/store/device-type";

export default function DeviceTypeSelect() {
  const { setType, type } = useDeviceStore();

  return (
    <div className="flex items-center gap-2 *:flex-1">
      <Button
        onClick={() => {
          console.log(type);
          setType("apple");
        }}
        variant={type === "apple" ? "default" : "secondary"}
      >
        iPhone
      </Button>
      <Button
        onClick={() => {
          console.log(type);
          setType("android");
        }}
        variant={type === "android" ? "default" : "secondary"}
      >
        Android
      </Button>
      <Button
        onClick={() => {
          console.log(type);
          setType("custom");
        }}
        variant={type === "custom" ? "default" : "secondary"}
      >
        Custom
      </Button>
    </div>
  );
}
