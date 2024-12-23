import { create } from "zustand";

type PanelState = {
  isCollapsed: {
    left: boolean;
    right: boolean;
  };
  setCollapsed: (isCollapsed: { left: boolean; right: boolean }) => void;
};

export const usePanelState = create<PanelState>((set) => ({
  isCollapsed: {
    left: false,
    right: false,
  },
  setCollapsed: (newPanelCollapsed) =>
    set({
      isCollapsed: {
        ...newPanelCollapsed,
      },
    }),
}));
