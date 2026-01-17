import { useSettingsStore } from "../../store/useSettingsStore";

const LanguageSwitch = () => {
  // const [isBR, setIsBR] = useState(false);
  const { lang, setLang } = useSettingsStore();

  const colors = {
    br: "#009B3A",
    en: "#3C3B6E",
    inactive: "#9CA3AF",
  };

  const currentColor = lang === "br" ? colors.br : colors.en;

  return (
    <div className="flex items-center">
      <div
        className="relative flex items-center p-1 border rounded-xl w-40 h-9 shadow-inner transition-colors duration-300"
        style={{ borderColor: currentColor }}
      >
        <div
          className="pl-2 pr-1 mr-1 border-r border-gray-200 transition-colors duration-300"
          style={{ color: currentColor }}
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
            />
          </svg>
        </div>

        <div className="relative flex flex-1 h-full items-center">
          <div
            className={`absolute h-7 w-[44%] border border-white/10 backdrop-blur-[6px] will-change-transform rounded-lg shadow-sm transition-all duration-300 ease-in-out
            ${lang === "br" ? "translate-x-[120%]" : "translate-x-1"}`}
          />

          <button
            onClick={() => setLang("en")}
            className="relative z-10 flex-1 text-[11px] font-bold transition-colors duration-300"
            style={{
              color: lang === "en" ? colors.en : colors.inactive,
              cursor: lang === "en" ? "default" : "pointer",
            }}
          >
            EN
          </button>

          <button
            onClick={() => setLang("br")}
            className="relative z-10 flex-1 text-[11px] font-bold transition-colors duration-300"
            style={{
              color: lang === "br" ? colors.br : colors.inactive,
              cursor: lang === "br" ? "default" : "pointer",
            }}
          >
            BR
          </button>
        </div>
      </div>
    </div>
  );
};

export default LanguageSwitch;
