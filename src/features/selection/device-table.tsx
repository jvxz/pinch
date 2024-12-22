import { ScrollArea } from "@/components/ui/scroll-area";
import { Toggle } from "@/components/ui/toggle";
import DeviceTableSearch from "./device-search";
import { getDevices } from "@/lib/server/get-devices";

export default async function DeviceTable() {
  const devices = await getDevices("apple");

  return (
    <section className="flex h-full max-h-full flex-col gap-2">
      <DeviceTableSearch />
      <div className="flex h-10 items-center border-b border-border *:flex-1 *:pl-2">
        <p>Device</p>
        <p>Resolution</p>
      </div>
      <ScrollArea className="flex h-[calc(100vh-16rem)] flex-col gap-2 rounded-md">
        {/* <Toggle className="flex h-10 w-full items-center *:flex-1 *:p-2 *:text-left">
          <p>iPhone 15 Pro</p>
          <p>1520 x 750</p>
        </Toggle> */}
        {devices.map((device) => (
          <Toggle
            key={device.model}
            className="flex h-10 w-full items-center *:flex-1 *:p-2 *:text-left"
          >
            <p>{device.model}</p>
            <p>
              {device.physicalWidth} x {device.physicalHeight}
            </p>
          </Toggle>
        ))}
      </ScrollArea>
    </section>
  );
}
