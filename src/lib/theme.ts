import { ref, watchEffect } from "vue";

export type Theme = "light" | "dark" | "system";

const THEME_KEY = "app-theme";

const theme = ref<Theme>(
  (localStorage.getItem(THEME_KEY) as Theme) || "system",
);

export function useTheme() {
  const setTheme = (newTheme: Theme) => {
    theme.value = newTheme;
    localStorage.setItem(THEME_KEY, newTheme);
  };

  watchEffect(() => {
    const root = window.document.documentElement;
    const isDark =
      theme.value === "dark" ||
      (theme.value === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  });

  // Listen for system theme changes
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", () => {
      if (theme.value === "system") {
        const root = window.document.documentElement;
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
          root.classList.add("dark");
        } else {
          root.classList.remove("dark");
        }
      }
    });

  return {
    theme,
    setTheme,
  };
}
