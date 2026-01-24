import { useEffect } from "react";
import type { IProject } from "../../../data/projectsData";
import ChevronIcon from "../../icons/ChevronIcon";
import { useSettingsStore } from "../../../store/useSettingsStore";
import { motion, AnimatePresence } from "framer-motion";

const Web: React.FC<{
  project: IProject;
  nextImage: () => void;
  prevImage: () => void;
  currentImageIndex: number;
  setCurrentImageIndex: (idx: number) => void;
}> = ({
  project,
  nextImage,
  prevImage,
  currentImageIndex,
  setCurrentImageIndex,
}) => {
  const { lang } = useSettingsStore();

  useEffect(() => {
    const handleArrow = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextImage();
      else if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", handleArrow);
    return () => window.removeEventListener("keydown", handleArrow);
  }, [nextImage, prevImage]);

  return (
    <div className="flex flex-col h-full bg-[#0a0a0a]">
      <section className="relative group shrink-0 bg-black border-b border-white/5">
        <div className="relative w-full h-[300px] md:h-[500px] bg-[#050505] overflow-hidden">
          <div
            className="w-full h-full overflow-y-auto overflow-x-hidden scroll-smooth custom-scrollbar"
            style={{ isolation: "isolate" }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <img
                  src={project.images[currentImageIndex].img}
                  alt="Project"
                  className="w-full h-auto select-none"
                  draggable={false}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="absolute inset-0 pointer-events-none flex items-center justify-between px-2 md:px-4">
            <button
              className="group/wrapper w-10 h-10 md:w-12 md:h-12 cursor-pointer flex items-center justify-center rounded-full bg-black/60 border border-white/10 pointer-events-auto hover:bg-black/80 transition-all 
              opacity-100 md:opacity-0 md:group-hover:opacity-100" // Sempre visível no mobile
              onClick={prevImage}
            >
              <ChevronIcon className="w-5 h-5 md:w-6 md:h-6 rotate-180 text-white group-hover/wrapper:text-light-blue relative -left-0.5 transition-colors" />
            </button>
            <button
              onClick={nextImage}
              className="group/wrapper w-10 h-10 md:w-12 md:h-12 cursor-pointer flex items-center justify-center rounded-full bg-black/60 border border-white/10 pointer-events-auto hover:bg-black/80 transition-all 
              opacity-100 md:opacity-0 md:group-hover:opacity-100" // Sempre visível no mobile
            >
              <ChevronIcon className="w-5 h-5 md:w-6 md:h-6 text-white relative group-hover/wrapper:text-light-blue -right-0.5 transition-colors" />
            </button>
          </div>
        </div>

        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5 md:gap-2">
          {project.images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentImageIndex(idx)}
              className={`h-1 md:h-1.5 rounded-full transition-all ${
                idx === currentImageIndex
                  ? "w-6 md:w-8 bg-light-blue"
                  : "w-1.5 md:w-2 bg-white/20"
              }`}
            />
          ))}
        </div>
      </section>

      <section className="p-5 md:p-8 space-y-6 md:space-y-8 max-w-5xl mx-auto w-full">
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/5 pb-6">
          <div className="space-y-1">
            <span className="text-light-blue font-mono text-[9px] md:text-[10px] tracking-[0.3em] uppercase">
              Page Overview
            </span>
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h3 className="text-2xl md:text-4xl font-black text-white tracking-tight leading-tight italic">
                {project.images[currentImageIndex].title[lang]}
              </h3>
            </motion.div>
          </div>
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <p className="text-gray-400 font-medium italic text-xs md:text-sm md:text-right max-w-md leading-relaxed">
              {project.images[currentImageIndex].description[lang].title}
            </p>
          </motion.div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 md:gap-y-8 pb-10">
          {project.images[currentImageIndex].description[lang].bullets.map(
            ({ title, body }, idx) => (
              <motion.div
                key={idx + title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group"
              >
                <div className="flex items-center gap-3 mb-1.5 md:mb-2">
                  <span className="shrink-0 w-4 md:w-6 h-px bg-light-blue/50 group-hover:w-8 md:group-hover:w-10 transition-all" />
                  <h4 className="text-white font-bold text-[11px] md:text-sm tracking-wide group-hover:text-light-blue transition-colors">
                    {title}
                  </h4>
                </div>
                <p className="text-gray-400 text-[12px] md:text-sm leading-relaxed pl-7 md:pl-9">
                  {body}
                </p>
              </motion.div>
            ),
          )}
        </div>
      </section>
    </div>
  );
};

export default Web;
