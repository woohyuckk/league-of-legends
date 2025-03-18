import { create } from "zustand";

export type ThemeState = {
  theme: string;
  toggleTheme: () => void;
};

const initialState = {
  theme: JSON.parse(localStorage.getItem("theme") || "light"),
};

export const useThemeStore = create<ThemeState>()((set) => ({
  ...initialState,
  toggleTheme: () =>
    set((state) => ({ theme: state.theme === "light" ? "dark" : "light" })),
}));
