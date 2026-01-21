// src/store/tabStore.ts
import { create } from "zustand";

type TabKey =
  | "home"
  | "LUGONG"

interface TabStore {
  activeTab: TabKey;
  setActiveTab: (tab: TabKey) => void;
}

export const useTabStore = create<TabStore>((set) => ({
  activeTab: "home",
  setActiveTab: (tab) => set({ activeTab: tab }),
}));
