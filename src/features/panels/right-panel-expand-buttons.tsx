"use client";
import { Button } from "@/components/ui/button";
import { ChevronsLeft } from "lucide-react";
import { usePanelState } from "@/lib/store/panel-state";

export default function ExpandPanelButton() {
  const { setCollapsed, isCollapsed } = usePanelState();

  return (
    isCollapsed.right && (
      <div className="absolute inset-0 right-0 top-[50vh] flex h-fit w-full flex-row-reverse">
        <Button
          onClick={() => {
            setCollapsed({
              ...isCollapsed,
              right: false,
            });
          }}
          variant="ghost"
          className="h-fit w-fit text-accent-foreground hover:bg-transparent hover:text-foreground"
        >
          <ChevronsLeft className="scale-150" />
        </Button>
      </div>
    )
  );
}
