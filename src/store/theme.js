import { create } from "zustand";
import { persist } from "zustand/middleware";

const useThemeStore = create(
    persist(
        (set, get) => ({
            isDark: true,
            toggleTheme: () => set({ isDark: !get().isDark }),
        }),
        {
            name: "theme-store",
            partialize: (state) => ({ isDark: state.isDark }),
        }
    )
);

export default useThemeStore;
