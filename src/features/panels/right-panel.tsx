"use client";
import { ResizablePanel } from "@/components/ui/resizable";
import { usePanelState } from "@/lib/store/panel-state";
import { useRef, useEffect } from "react";

export default function RightPanel({
  children,
}: {
  children: React.ReactNode;
}) {
  const rightPanelRef = useRef<React.ElementRef<typeof ResizablePanel>>(null);
  const { setCollapsed, isCollapsed } = usePanelState();

  useEffect(() => {
    if (!isCollapsed.right && rightPanelRef.current) {
      rightPanelRef.current.expand();
    }
  }, [isCollapsed.right]);

  return (
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
      {children}
    </ResizablePanel>
  );
}
