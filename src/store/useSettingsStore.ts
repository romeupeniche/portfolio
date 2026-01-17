import { create } from "zustand";
import { persist } from "zustand/middleware";
import { translate } from "../i18n";
import type { Language, TranslationKeys } from "../types/i18n";

interface SettingsState {
  lang: Language;
  isLowPerf: boolean;
  setLang: (lang: Language) => void;
  toggleLowPerf: () => void;
  // Função de tradução exposta pelo store
  t: (key: TranslationKeys, vars?: Record<string, string>) => string;
}

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set, get) => ({
      lang: "en",
      isLowPerf: false,

      setLang: (newLang) => set({ lang: newLang }),

      toggleLowPerf: () => set((state) => ({ isLowPerf: !state.isLowPerf })),

      t: (key, vars = {}) => {
        const { lang } = get(); // Pega o idioma atual do store
        return translate(lang, key, vars);
      },
    }),
    {
      name: "user-settings", // Nome da chave no localStorage
    }
  )
);
