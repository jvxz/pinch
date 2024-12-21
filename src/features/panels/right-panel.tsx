import PanelContent from "../selection/content";
import PanelHeader from "../selection/header";

export default function RightPanel() {
  return (
    <article className="flex h-full flex-col">
      <PanelHeader />
      <PanelContent />
    </article>
  );
}
