import { Toggle } from "@/components/ui/toggle";
import { getAndroidDevices } from "@/lib/server/get-devices";
import { useDeviceStore } from "@/lib/store/device-type";
import { useQuery } from "@tanstack/react-query";

export default function AndroidDevices() {
  const deviceStore = useDeviceStore();
  const androidDevices = useQuery({
    queryKey: ["android-devices"],
    queryFn: async () => {
      const androidDevices = await getAndroidDevices();
      return androidDevices;
    },
  });

  return androidDevices?.data?.map((device) => (
    <Toggle
      pressed={deviceStore.device.model === device.model}
      onPressedChange={(e) => {
        if (!e) return;
        deviceStore.setDevice({
          model: device.model,
          height: device.physicalHeight.toString(),
          width: device.physicalWidth.toString(),
        });
      }}
      key={device.model}
      className="flex min-h-8 w-full items-center *:flex-1 *:text-left"
    >
      <p>{device.model}</p>
      <p>
        {device.physicalWidth} x {device.physicalWidth}
      </p>
    </Toggle>
  ));
}
