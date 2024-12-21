import ThemeToggle from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { CircleHelp } from "lucide-react";

export default function PanelHeader() {
  return (
    <header className="flex items-center justify-between gap-2 border-b border-border p-4">
      <div className="flex h-fit items-end gap-2">
        <h2 className="text-2xl font-semibold">pinch</h2>
        <p className="-translate-y-[3px] text-sm text-muted-foreground">
          v0.0.1
        </p>
      </div>
      <div className="flex items-center gap-2">
        <Button size="icon">
          <CircleHelp />
        </Button>
        <ThemeToggle />
      </div>
    </header>
  );
}
