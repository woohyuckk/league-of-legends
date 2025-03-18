"use client";

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type ThemeState = {
  theme: string;
  toggleTheme: () => void;
  isHydrated: boolean;
};

const initialState = {
  theme: "light",
};

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      ...initialState,
      isHydrated: false,
      toggleTheme: () =>
        set((state) => ({ theme: state.theme === "light" ? "dark" : "light" })),
    }),
    {
      name: "theme",
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage:  (state) => {
        if (state) state.isHydrated= true ;
      },
    },
  ),
);
