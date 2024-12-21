import { ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import LeftPanelContent from "./left-panel-content";
import RightPanel from "./right-panel";
import RightPanelContent from "./right-panel-content";
import PanelHandle from "./handle";
export default function MainPanels() {
  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel defaultSize={65} minSize={35}>
        <LeftPanelContent />
      </ResizablePanel>
      <PanelHandle />
      <RightPanel>
        <RightPanelContent />
      </RightPanel>
    </ResizablePanelGroup>
  );
}
