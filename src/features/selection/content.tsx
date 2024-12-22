import { Button } from "@/components/ui/button";
import DeviceTable from "./device-table";

export default function PanelContent() {
  return (
    <section className="flex h-full flex-col gap-4 p-4">
      <div className="flex items-center gap-2 *:flex-1">
        <Button variant="secondary">iPhone</Button>
        <Button variant="secondary">Android</Button>
        <Button variant="secondary">Custom</Button>
      </div>
      <DeviceTable />
    </section>
  );
}
