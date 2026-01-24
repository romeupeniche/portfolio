import { create } from "zustand";
import { persist } from "zustand/middleware";
import { translate } from "../i18n";
import type { Language, TranslationKeys } from "../types/i18n";

interface SettingsState {
  lang: Language;
  isLowPerf: boolean;
  toggleLang: () => void;
  toggleLowPerf: () => void;
  t: (key: TranslationKeys, vars?: Record<string, string>) => string;
}

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set, get) => ({
      lang: "en",
      isLowPerf: false,

      toggleLang: () =>
        set((state) => ({
          lang: state.lang === "en" ? "br" : "en",
        })),

      toggleLowPerf: () => set((state) => ({ isLowPerf: !state.isLowPerf })),

      t: (key, vars = {}) => {
        const { lang } = get();
        return translate(lang, key, vars);
      },
    }),
    {
      name: "user-settings",
    },
  ),
);
