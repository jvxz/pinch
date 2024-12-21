"use client";

import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable";
import LeftPanel from "@/features/panels/left-panel";
import RightPanel from "@/features/panels/right-panel";
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
    <main className="h-screen">
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel minSize={35}>
          <LeftPanel />
        </ResizablePanel>
        <ResizableHandle
          onDoubleClick={() => {
            rightPanelRef.current?.resize(35);
          }}
          withHandle
          style={{
            display: isCollapsed.right ? "none" : "",
          }}
        />
        <ResizablePanel
          ref={rightPanelRef}
          minSize={30}
          defaultSize={35}
          collapsible
          onCollapse={() => {
            setCollapsed({
              ...isCollapsed,
              right: true,
            });
          }}
        >
          <RightPanel />
        </ResizablePanel>
      </ResizablePanelGroup>
      {isCollapsed.right && <ExpandPanelButton />}
    </main>
  );
}
