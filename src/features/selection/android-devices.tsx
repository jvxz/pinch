import { Toggle } from "@/components/ui/toggle";
import { getAndroidDevices } from "@/lib/server/get-devices";
import { useQuery } from "@tanstack/react-query";

export default function AndroidDevices() {
  const androidDevices = useQuery({
    queryKey: ["android-devices"],
    queryFn: async () => {
      const androidDevices = await getAndroidDevices();
      return androidDevices;
    },
  });
  return androidDevices?.data?.map((device) => (
    <Toggle
      key={device.model}
      className="flex min-h-8 w-full items-center *:flex-1 *:text-left"
    >
      <p>{device.model}</p>
      <p>
        {device.physicalWidth} x {device.physicalHeight}
      </p>
    </Toggle>
  ));
}
