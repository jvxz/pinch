import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function PanelContent() {
  return (
    <section className="flex flex-col gap-4 p-4">
      <div className="flex items-center gap-2 *:flex-1">
        <Button variant="secondary">iPhone</Button>
        <Button variant="secondary">Android</Button>
        <Button variant="secondary">Custom</Button>
      </div>
      <Input placeholder="Search" />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Device</TableHead>
            <TableHead>Resolution</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="cursor-pointer font-medium">
              iPhone 15 Pro
            </TableCell>
            <TableCell>1520 x 750</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </section>
  );
}
