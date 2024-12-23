import DeviceTable from "./device-table";
import DeviceTypeSelect from "./type-select";

export default function PanelContent() {
  return (
    <section className="flex h-full flex-col gap-4 p-4">
      <DeviceTypeSelect />
      <DeviceTable />
    </section>
  );
}
