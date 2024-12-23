import { Toggle } from "@/components/ui/toggle";
import { getAndroidDevices } from "@/lib/server/get-devices";
import { useDeviceStore } from "@/lib/store/device-type";
import { useSearchStore } from "@/lib/store/search-term";
import { useQuery } from "@tanstack/react-query";
import { Loader2Icon } from "lucide-react";

export default function AndroidDevices() {
  const deviceStore = useDeviceStore();
  const { searchTerm } = useSearchStore();
  const { data, isLoading } = useQuery({
    queryKey: ["android-devices"],
    queryFn: async () => {
      const androidDevices = await getAndroidDevices();
      return androidDevices;
    },
  });

  return isLoading ? (
    <div className="grid h-full place-items-center">
      <Loader2Icon className="animate-spin" />
    </div>
  ) : (
    data?.map((device) => {
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
          className="motion-preset-fade flex min-h-8 w-full items-center *:flex-1 *:text-left"
        >
          <p>{device.model}</p>
          <p>
            {device.physicalWidth} x {device.physicalHeight}
          </p>
        </Toggle>
      ) : null;
    })
  );
}
