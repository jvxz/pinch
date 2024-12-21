"use client";
import { ResizableHandle } from "@/components/ui/resizable";
import { usePanelState } from "@/lib/store/panel-state";

export default function PanelHandle() {
  const { isCollapsed } = usePanelState();

  return (
    <ResizableHandle
      withHandle
      style={{
        display: isCollapsed.right ? "none" : "",
      }}
    />
  );
}
