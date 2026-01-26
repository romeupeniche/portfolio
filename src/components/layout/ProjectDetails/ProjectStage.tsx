import { useCallback, useEffect, useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { techData } from "../../../data/techData";
import { createPortal } from "react-dom";
import type { IProject } from "../../../data/projectsData";
import { useSettingsStore } from "../../../store/useSettingsStore";
import TypewriterP from "./TypewriterP";
interface Props {
  open: boolean;
  setOpen: (value: boolean) => void;
  children?: ReactNode;
  project: IProject;
  period: string;
  nextImage: () => void;
  prevImage: () => void;
}
const Icons = {
  Tool: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="m16 6 4 14M12 6v14M8 8v12M4 4v16" />
    </svg>
  ),
  External: () => (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
      <polyline points="15 3 21 3 21 9"></polyline>
      <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
  ),
  Github: () => (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
  ),
  Terminal: () => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="4 17 10 11 4 5"></polyline>
      <line x1="12" y1="19" x2="20" y2="19"></line>
    </svg>
  ),
};

const ProjectStage = ({
  project,
  period,
  open,
  setOpen,
  children,
  nextImage,
  prevImage,
}: Props) => {
  const { t, lang } = useSettingsStore();
  const [isExpanded, setIsExpanded] = useState(false);
  const Icon = project.icon;

  const closeModal = useCallback(() => {
    setOpen(false);
    document.documentElement.style.overflow = "";
    setIsExpanded(false);
  }, [setOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    if (open) {
      window.addEventListener("keydown", handleEsc);
      document.documentElement.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [open, setOpen, closeModal]);

  if (typeof document === "undefined") return null;
  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 md:p-10"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            className="w-full h-full grid grid-cols-1 lg:grid-cols-12 gap-1"
          >
            <aside className="lg:col-span-4 bg-[#0d0d0d] border border-white/10 rounded-t-3xl lg:rounded-tr-none lg:rounded-l-3xl p-8 flex flex-col h-full overflow-hidden">
              <section className="flex-1 overflow-y-auto custom-scrollbar space-y-8">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-light-blue animate-pulse" />
                      <span className="text-[10px] font-mono text-light-blue uppercase tracking-[0.2em]">
                        {t("projects.projectDetails")}
                      </span>
                    </div>

                    <span
                      className="text-red-500 p-2 lg:hidden flex cursor-pointer"
                      onClick={closeModal}
                    >
                      <svg width="15" height="15" viewBox="0 0 10 10">
                        <path
                          d="M1 1l8 8m0-8L1 9"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>

                    <div className="items-center gap-3 opacity-40 hover:opacity-100 lg:flex hidden transition-opacity">
                      <div
                        className="flex items-center gap-1.5 cursor-pointer"
                        onClick={closeModal}
                      >
                        <span className="text-[10px] font-mono bg-white/10 px-1.5 py-0.5 rounded border border-white/10 text-white/50">
                          ESC
                        </span>
                      </div>
                      <div className="w-px h-3 bg-white/10" />
                      <div className="flex items-center gap-1.5">
                        <div className="flex gap-1">
                          <span
                            onClick={prevImage}
                            className="text-[10px] cursor-pointer font-mono bg-white/10 px-1.5 py-0.5 rounded border border-white/10 text-white/50"
                          >
                            ←
                          </span>
                          <span
                            onClick={nextImage}
                            className="text-[10px] font-mono cursor-pointer bg-white/10 px-1.5 py-0.5 rounded border border-white/10 text-white/50"
                          >
                            →
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <header className="flex justify-between items-center">
                    <h2 className="text-4xl font-bold text-white tracking-tight">
                      {project.title}
                    </h2>
                    <Icon className="w-10 h-10" />
                  </header>
                  <div className="flex flex-col gap-2">
                    <TypewriterP
                      isExpanded={isExpanded}
                      speed={2}
                      className="text-gray-400 text-sm leading-relaxed"
                    >
                      {project.description[lang]}
                    </TypewriterP>

                    <button
                      onClick={() => setIsExpanded(!isExpanded)}
                      className="text-[10px] font-mono text-light-blue hover:text-white transition-colors w-fit tracking-tighter cursor-pointer"
                    >
                      {isExpanded ? "[ ↑ ]" : "[ ... ]"}
                    </button>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-white/30">
                    <Icons.Terminal />
                    <span className="text-xs font-mono uppercase">
                      {t("projects.coreStack")}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.mainTechUsed.map((techId, idx) => {
                      const tech = techData
                        .flatMap((category) => category.items)
                        .find((item) => item.id === techId);

                      if (!tech) return null;
                      const { title: techTitle } = tech;

                      return (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -30 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="group"
                        >
                          <span
                            key={techTitle}
                            className="px-3 py-1 bg-white/3 border border-white/10 rounded text-xs text-gray-300 font-mono"
                          >
                            {techTitle}
                          </span>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-white/30">
                    <Icons.Tool />
                    <span className="text-xs font-mono uppercase">
                      {t("projects.librariesTools")}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.extraTechUsed.map((techTitle, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="group"
                      >
                        <span
                          key={techTitle}
                          className="px-3 py-1 bg-white/3 border border-white/10 rounded text-xs text-gray-300 font-mono"
                        >
                          {techTitle}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>

              <div className="flex lg:flex-col gap-3 pt-2 lg:pt-6 border-t border-white/5">
                <a
                  href={project.link ?? undefined}
                  aria-disabled={project.deploy === "development"}
                  target="_blank"
                  rel="noreferrer"
                  className={`${
                    project.deploy === "development"
                      ? "bg-white/30 cursor-not-allowed"
                      : "bg-white cursor-pointer hover:bg-light-blue transition-all active:scale-[0.98]"
                  } flex items-center justify-center gap-3 w-full py-2 lg:py-4 uppercase text-black text-sm font-bold rounded-xl `}
                >
                  <Icons.External /> {t("projects.livePreview")}
                </a>
                <a
                  href={project.githubURL}
                  target="_blank"
                  className=" cursor-pointer uppercase flex items-center justify-center gap-3 py-2 lg:py-4 w-full bg-white/5 border border-white/10 text-white text-sm font-bold rounded-xl hover:bg-white/10 transition-all active:scale-[0.98]"
                >
                  <Icons.Github /> {t("projects.sourceCode")}
                </a>
              </div>
            </aside>

            <main className="lg:col-span-8 bg-[#141414] border-t lg:border-l border border-white/10 rounded-b-3xl lg:rounded-bl-none lg:rounded-r-3xl overflow-hidden flex flex-col">
              <header className="group/header h-10 bg-black/40 border-b border-white/5 flex items-center justify-between px-6">
                <div className="hidden lg:flex gap-2 group/dots items-center">
                  <div
                    onClick={closeModal}
                    className="w-4 h-4 rounded-full bg-white/10 border-white/10 group-hover/header:bg-[#ff5f57] border group-hover/header:border-[#e0443e] shadow-sm flex items-center justify-center transition-all opacity-70 hover:opacity-100 cursor-pointer text-black/60"
                  >
                    <svg
                      className="opacity-0 group-hover/dots:opacity-100 transition-opacity"
                      width="7"
                      height="7"
                      viewBox="0 0 10 10"
                    >
                      <path
                        d="M1 1l8 8m0-8L1 9"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>

                  <div
                    onClick={closeModal}
                    className="w-4 h-4 rounded-full bg-white/10 border-white/10 group-hover/header:bg-[#febc2e] border group-hover/header:border-[#d8a124] shadow-sm flex items-center justify-center transition-all opacity-70 hover:opacity-100 cursor-pointer text-black/60"
                  >
                    <svg
                      className="opacity-0 group-hover/dots:opacity-100 transition-opacity"
                      width="7"
                      height="7"
                      viewBox="0 0 10 2"
                    >
                      <path
                        d="M0 1h10"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>

                  <div className="w-4 h-4 rounded-full bg-white/10 border-white/10 group-hover/header:bg-[#28c840] border group-hover/header:border-[#1aab29] shadow-sm flex items-center justify-center transition-all opacity-70 hover:opacity-100 cursor-pointer text-black/60">
                    <svg
                      className="opacity-0 group-hover/dots:opacity-100 transition-opacity"
                      width="7"
                      height="7"
                      viewBox="0 0 10 10"
                    >
                      <path
                        d="M7 1h2v2M3 9H1V7M9 1L6 4M1 9l3-3"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <span className="lg:text-center">
                  <p className="text-xs text-white/20 font-mono">
                    {project.type[lang]}
                  </p>
                  <p className="text-xs text-white/20 font-mono">{period}</p>
                </span>
                <div className="text-[11px] font-mono text-white/20">
                  {project.platform === "web"
                    ? "browser_preview.exe"
                    : "mobile_emulator.iso"}
                </div>
              </header>

              <div className="flex-1 overflow-y-auto custom-scrollbar bg-[#0a0a0a]">
                {children}
              </div>
            </main>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
};

export default ProjectStage;
