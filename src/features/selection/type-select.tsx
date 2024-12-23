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
        variant="secondary"
      >
        iPhone
      </Button>
      <Button
        onClick={() => {
          console.log(type);
          setType("android");
        }}
        variant="secondary"
      >
        Android
      </Button>
      <Button variant="secondary">Custom</Button>
    </div>
  );
}
