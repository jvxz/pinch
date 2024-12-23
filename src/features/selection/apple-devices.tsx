import { Toggle } from "@/components/ui/toggle";
import { getAppleDevices } from "@/lib/server/get-devices";
import { useQuery } from "@tanstack/react-query";

export default function AppleDevices() {
  const appleDevices = useQuery({
    queryKey: ["apple-devices"],
    queryFn: async () => {
      const appleDevices = await getAppleDevices();
      return appleDevices;
    },
  });
  return appleDevices?.data?.map((device) => (
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
