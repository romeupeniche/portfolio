import { useEffect } from "react";
import type { IProject } from "../../../data/projectsData";
import ChevronIcon from "../../icons/ChevronIcon";
import { useSettingsStore } from "../../../store/useSettingsStore";
import { motion, AnimatePresence } from "framer-motion";
import TypewriterP from "../ProjectDetails/TypewriterP";

const Mobile: React.FC<{
  project: IProject;
  nextImage: () => void;
  prevImage: () => void;
  currentImageIndex: number;
  setCurrentImageIndex: (idx: number) => void;
}> = ({
  project,
  currentImageIndex,
  nextImage,
  prevImage,
  setCurrentImageIndex,
}) => {
  const { lang, t } = useSettingsStore();

  useEffect(() => {
    const handleArrow = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        nextImage();
      } else if (e.key === "ArrowLeft") {
        prevImage();
      }
    };
    window.addEventListener("keydown", handleArrow);

    return () => {
      window.removeEventListener("keydown", handleArrow);
    };
  });

  return (
    <div className="flex bg-black flex-col lg:flex-row lg:h-full gap-8 p-4 lg:p-10 text-neutral-300 ">
      <section className="flex-1 flex flex-col items-center justify-center space-y-6">
        <div className="relative group h-full">
          <div className="relative z-10 rounded-[3rem] overflow-hidden h-full">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImageIndex}
                src={project.images[currentImageIndex].img}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="h-[400px] lg:h-full select-none"
                draggable={false}
              />
            </AnimatePresence>
          </div>

          <div className="absolute inset-y-0 -left-12 -right-12 flex items-center justify-between pointer-events-none group-hover:opacity-100 opacity-40 transition-opacity">
            <button
              className="group/wrapper w-12 h-12 cursor-pointer flex items-center justify-center rounded-full bg-white/5 border border-white/10 pointer-events-auto hover:bg-white/10 transition-colors"
              onClick={prevImage}
            >
              <ChevronIcon className="rotate-180 w-6 h-6 text-white relative -left-0.5 group-hover/wrapper:text-light-blue transition-colors" />
            </button>
            <button
              className="group/wrapper w-12 h-12 cursor-pointer flex items-center justify-center rounded-full bg-white/5 border border-white/10 pointer-events-auto hover:bg-white/10 transition-colors"
              onClick={nextImage}
            >
              <ChevronIcon className="w-6 h-6 text-white relative -right-0.5 group-hover/wrapper:text-light-blue transition-colors" />
            </button>
          </div>
        </div>
        <div className="flex justify-center gap-2">
          {project.images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentImageIndex(idx)}
              className={`h-1.5 rounded-full transition-all ${
                idx === currentImageIndex
                  ? "w-8 bg-light-blue"
                  : "w-2 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </section>

      <section className="flex-1 space-y-8 overflow-y-auto pr-4 custom-scrollbar">
        <div className="relative overflow-hidden bg-linear-to-br from-white/3 to-transparent lg:border border-white/10 rounded-3xl lg:p-8">
          <header className="relative z-10 flex justify-between items-center gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="h-px w-4 bg-light-blue/50" />
                <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-light-blue">
                  Screen Overview
                </p>
              </div>
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="group"
              >
                <h3 className="text-4xl font-black text-white tracking-tight leading-none italic">
                  {project.images[currentImageIndex].title[lang]}
                </h3>
              </motion.div>
            </div>

            <div className="flex flex-col items-center font-mono">
              <span className="text-3xl font-bold text-white/10 leading-none">
                0{currentImageIndex + 1}
              </span>
              <span className="text-sm text-white/5 tracking-tighter uppercase">
                Phase
              </span>
            </div>
          </header>

          <div className="relative z-10 mt-6 pt-6 border-t border-white/5">
            <div className="flex items-start gap-3">
              <span className="text-light-blue/40 text-2xl font-serif leading-none opacity-50">
                “
              </span>
              <TypewriterP
                speed={4}
                className="text-gray-400 font-medium italic text-sm leading-relaxed"
              >
                {project.images[currentImageIndex].description[lang].title}
              </TypewriterP>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-xs font-mono text-light-blue uppercase tracking-[0.2em]">
            {t("projects.featureBreakdown")}
          </h4>
          <div className="space-y-4">
            {project.images[currentImageIndex].description[lang].bullets.map(
              ({ body, title }, idx) => (
                <motion.div
                  key={idx + title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="group"
                >
                  <div
                    key={idx}
                    className="group border-l-2 border-white/5 hover:border-light-blue/50 pl-4 transition-colors"
                  >
                    <h5 className="text-white text-sm font-bold mb-1 transition-colors group-hover:text-light-blue">
                      {title}
                    </h5>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      {body}
                    </p>
                  </div>
                </motion.div>
              ),
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mobile;
