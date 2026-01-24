import { useSettingsStore } from "../../store/useSettingsStore";

const PerformanceToggle = () => {
  const { t, isLowPerf, toggleLowPerf } = useSettingsStore();

  const colors = {
    active: "#F59E0B",
    inactive: "#4ade80",
    textInactive: "#9CA3AF",
  };

  return (
    <div className="flex items-center">
      <div
        className="relative flex items-center p-1 border rounded-xl w-40 h-9 shadow-inner transition-colors duration-300"
        style={{ borderColor: isLowPerf ? colors.active : colors.inactive }}
      >
        <div
          className="pl-2 pr-1 mr-1 border-r border-gray-200 transition-colors duration-300"
          style={{ color: isLowPerf ? colors.active : colors.inactive }}
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
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        </div>

        <div className="relative flex flex-1 h-full items-center">
          <div
            className={`absolute h-7 w-[44%] border border-white/10 backdrop-blur-[6px] will-change-transform rounded-lg shadow-sm transition-all duration-300 ease-in-out
            ${isLowPerf ? "translate-x-[120%]" : "translate-x-1"}`}
          />

          <button
            onClick={toggleLowPerf}
            className="relative z-10 flex-1 text-[11px] font-bold transition-colors duration-300"
            style={{
              color: !isLowPerf ? colors.inactive : colors.textInactive,
              cursor: !isLowPerf ? "default" : "pointer",
            }}
            disabled={!isLowPerf}
          >
            {t("header.high")}
          </button>

          <button
            onClick={toggleLowPerf}
            className="relative z-10 flex-1 text-[11px] font-bold transition-colors duration-300"
            style={{
              color: !isLowPerf ? colors.textInactive : colors.active,
              cursor: isLowPerf ? "default" : "pointer",
            }}
            disabled={isLowPerf}
          >
            ECO
          </button>
        </div>
      </div>
    </div>
  );
};

export default PerformanceToggle;
