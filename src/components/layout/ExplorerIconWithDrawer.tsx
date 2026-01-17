import { useEffect, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import type { IProject } from "../../data/projectsData";
import Web from "./projectDrawers/Web";
import Mobile from "./projectDrawers/Mobile";
import FileExplorerAnimatedIcon from "../ui/FileExplorerAnimatedIcon";
import { techData } from "../../data/techData";

export const ExplorerIconWithDrawer = ({
  project,
  open,
  setOpen,
}: {
  project: IProject;
  open: boolean;
  setOpen: (value: boolean) => void;
}) => {
  const { platform } = project;
  return (
    <div className="grid place-content-center">
      <FileExplorerAnimatedIcon onClick={() => setOpen(true)} />
      <ProjectStage open={open} setOpen={setOpen} project={project}>
        {platform === "web" ? (
          <Web project={project} />
        ) : (
          <Mobile project={project} />
        )}
      </ProjectStage>
    </div>
  );
};

interface Props {
  open: boolean;
  setOpen: (value: boolean) => void;
  children?: ReactNode;
  project: IProject;
}

const ProjectStage = ({ project, open, setOpen, children }: Props) => {
  if (typeof document === "undefined") return null;

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    if (open) {
      window.addEventListener("keydown", handleEsc);
    }

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [open, setOpen]);

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
            className="w-full h-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-1"
          >
            <aside className="lg:col-span-4 bg-[#0d0d0d] border border-white/10 rounded-t-3xl lg:rounded-tr-none lg:rounded-l-3xl p-8 flex flex-col gap-8 overflow-y-auto">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                  <span className="text-[10px] font-mono text-blue-500 uppercase tracking-[0.2em]">
                    Project details
                  </span>
                </div>
                <h2 className="text-4xl font-bold text-white tracking-tight">
                  {project.title}
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description.br}
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2 text-white/30">
                  <Icons.Terminal />
                  <span className="text-xs font-mono uppercase">
                    Tech Stack
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.mainTechUsed.map((techId) => {
                    const tech = techData
                      .flatMap((category) => category.items)
                      .find((item) => item.id === techId);

                    if (!tech) return null;
                    const { title: techTitle } = tech;

                    return (
                      <span
                        key={techTitle}
                        className="px-3 py-1 bg-white/3 border border-white/10 rounded text-xs text-gray-300 font-mono"
                      >
                        {techTitle}
                      </span>
                    );
                  })}
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-white/30">
                  <Icons.Tool />
                  <span className="text-xs font-mono uppercase">
                    Libraries & Tools
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.extraTechUsed.map((techTitle) => (
                    <span
                      key={techTitle}
                      className="px-3 py-1 bg-white/3 border border-white/10 rounded text-xs text-gray-300 font-mono"
                    >
                      {techTitle}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-auto flex flex-col gap-3">
                <a
                  href={project.link!}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-3 w-full py-4 bg-white text-black text-sm font-bold rounded-xl hover:bg-blue-400 transition-all active:scale-[0.98]"
                >
                  <Icons.External /> LIVE PREVIEW
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center gap-3 w-full py-4 bg-white/5 border border-white/10 text-white text-sm font-bold rounded-xl hover:bg-white/10 transition-all active:scale-[0.98]"
                >
                  <Icons.Github /> SOURCE CODE
                </a>
              </div>
            </aside>

            <main className="lg:col-span-8 bg-[#141414] border-t lg:border-t-0 lg:border-l border border-white/10 rounded-b-3xl lg:rounded-bl-none lg:rounded-r-3xl overflow-hidden flex flex-col">
              <div className="h-10 bg-black/40 border-b border-white/5 flex items-center justify-between px-6">
                <div className="flex gap-2 group/dots items-center">
                  <div
                    onClick={() => setOpen(false)}
                    className="w-4 h-4 rounded-full bg-[#ff5f57] border border-[#e0443e] shadow-sm flex items-center justify-center transition-all opacity-70 hover:opacity-100 cursor-pointer text-black/60"
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
                    onClick={() => setOpen(false)}
                    className="w-4 h-4 rounded-full bg-[#febc2e] border border-[#d8a124] shadow-sm flex items-center justify-center transition-all opacity-70 hover:opacity-100 cursor-pointer text-black/60"
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

                  <div className="w-4 h-4 rounded-full bg-[#28c840] border border-[#1aab29] shadow-sm flex items-center justify-center transition-all opacity-70 hover:opacity-100 cursor-pointer text-black/60">
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
                <span className="text-center">
                  <p className="text-xs text-white/20 font-mono">
                    {project.type.br}
                  </p>
                  <p className="text-xs text-white/20 font-mono">
                    {project.period.br}
                  </p>
                </span>
                <div className="text-[11px] font-mono text-white/20">
                  {project.platform === "web"
                    ? "browser_preview.exe"
                    : "mobile_emulator.iso"}
                </div>
              </div>

              <div className="flex-1 overflow-y-auto custom-scrollbar bg-[#0a0a0a]">
                {children}
              </div>
            </main>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};
