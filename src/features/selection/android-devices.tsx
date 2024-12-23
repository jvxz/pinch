import { Toggle } from "@/components/ui/toggle";
import { getAndroidDevices } from "@/lib/server/get-devices";
import { useDeviceStore } from "@/lib/store/device-type";
import { useSearchStore } from "@/lib/store/search-term";
import { useQuery } from "@tanstack/react-query";

export default function AndroidDevices() {
  const deviceStore = useDeviceStore();
  const { searchTerm } = useSearchStore();
  const { data } = useQuery({
    queryKey: ["android-devices"],
    queryFn: async () => {
      const androidDevices = await getAndroidDevices();
      return androidDevices;
    },
  });

  return data?.map((device) => {
    return device.model.toLowerCase().includes(searchTerm.toLowerCase()) ? (
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
          {device.physicalWidth} x {device.physicalHeight}
        </p>
      </Toggle>
    ) : null;
  });
}
