"use client";

import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable";
import ExpandPanelButton from "@/features/panels/right-panel-expand-buttons";
import { usePanelState } from "@/lib/store/panel-state";
import { useEffect, useRef } from "react";

export default function Page() {
  const rightPanelRef = useRef<React.ElementRef<typeof ResizablePanel>>(null);
  const { setCollapsed, isCollapsed } = usePanelState();

  useEffect(() => {
    if (!isCollapsed.right && rightPanelRef.current) {
      rightPanelRef.current.expand();
      console.log("attempting to expand");
    }
  }, [isCollapsed.right]);

  return (
    <div className="h-screen">
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel minSize={35}></ResizablePanel>
        <ResizableHandle
          withHandle
          style={{
            display: isCollapsed.right ? "none" : "",
          }}
        />
        <ResizablePanel
          ref={rightPanelRef}
          minSize={30}
          collapsible
          onCollapse={() => {
            setCollapsed({
              ...isCollapsed,
              right: true,
            });
          }}
        ></ResizablePanel>
      </ResizablePanelGroup>
      {isCollapsed.right && <ExpandPanelButton />}
    </div>
  );
}
