import scrollToSection from "../../utils/scrollToSection";
import MessageIcon from "../icons/MessageIcon";
import { useSettingsStore } from "../../store/useSettingsStore";

const AnimatedMessageButton = () => {
  const { isLowPerf } = useSettingsStore();

  return (
    <button
      onClick={() => scrollToSection("contact")}
      className={`group flex items-center justify-between cursor-pointer border relative h-16 w-64 overflow-hidden rounded-lg p-3 text-left text-gray-50 text-base font-bold underline underline-offset-2 duration-500 origin-left 
      hover:text-light-blue hover:underline-offset-4 hover:decoration-2 hover:border-light-blue/40
      
      ${
        isLowPerf
          ? "border-white/20 shadow-none"
          : "border-white/10 backdrop-blur-[6px] will-change-transform shadow-md hover:shadow-xl"
      }

      ${
        !isLowPerf &&
        `
        before:absolute before:z-2 before:w-12 before:h-12 before:right-1 before:top-1 before:bg-main-blue before:rounded-full before:blur-lg before:duration-500 before:content-[''] 
        hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:before:[box-shadow:20px_20px_20px_30px_#345C6B]
        
        after:absolute after:z-2 after:w-20 after:h-20 after:right-8 after:top-3 after:bg-light-blue after:rounded-full after:blur-lg after:duration-500 after:content-[''] 
        hover:after:-right-8
      `
      }
      `}
    >
      <span className="flex-1 relative z-2">Message Me</span>

      <span
        className={`z-2 flex-1 flex items-center justify-center transition-colors duration-500 
        ${
          isLowPerf
            ? "text-white group-hover:text-main-blue"
            : "text-black group-hover:text-white"
        }`}
      >
        <MessageIcon
          className={`ml-4 w-9 h-9 text-inherit transition-all duration-500 
          ${
            !isLowPerf &&
            "group-hover:scale-110 group-hover:-rotate-12 group-hover:translate-x-1"
          }`}
        />
      </span>
    </button>
  );
};

export default AnimatedMessageButton;
