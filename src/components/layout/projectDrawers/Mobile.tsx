import { useState } from "react";
import type { IProject } from "../../../data/projectsData";
import PreviewIcon from "../../../assets/icons/PreviewIcon";
import GithubLogo from "../../icons/GithubIcon";
import { techData } from "../../../data/techData";
import ChevronIcon from "../../icons/ChevronIcon";
import { useSettingsStore } from "../../../store/useSettingsStore";

const Mobile: React.FC<{ project: IProject }> = ({ project }) => {
  const {
    title,
    images,
    icon: Icon,
    period,
    mainTechUsed,
    description,
    extraTechUsed,
    type,
    deploy,
    link,
    githubURL,
  } = project;

  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const { lang, t } = useSettingsStore();

  return (
    <div className="flex flex-col lg:flex-row h-full gap-8 p-4 lg:p-10 text-neutral-300 ">
      <section className="flex-1 flex flex-col items-center justify-center space-y-6">
        <div className="relative group h-full">
          <div className="relative z-10 rounded-[3rem] overflow-hidden h-full">
            <img
              src={images[currentImageIndex].img}
              className="w-full h-full object-cover transition-opacity duration-500"
              alt={title}
            />
          </div>

          <div className="absolute inset-y-0 -left-12 -right-12 flex items-center justify-between pointer-events-none group-hover:opacity-100 opacity-40 transition-opacity">
            <button
              className="w-12 h-12 cursor-pointer flex items-center justify-center rounded-full bg-white/5 border border-white/10 pointer-events-auto hover:bg-white/10"
              onClick={() =>
                setCurrentImageIndex((prev) =>
                  prev === 0 ? images.length - 1 : prev - 1
                )
              }
            >
              <ChevronIcon className="rotate-180 w-6 h-6 text-white relative -left-0.5" />
            </button>
            <button
              className="w-12 h-12 cursor-pointer flex items-center justify-center rounded-full bg-white/5 border border-white/10 pointer-events-auto hover:bg-white/10"
              onClick={() =>
                setCurrentImageIndex((prev) => (prev + 1) % images.length)
              }
            >
              <ChevronIcon className="w-6 h-6 text-white relative -right-0.5" />
            </button>
          </div>
        </div>

        {/* <div className="text-center space-y-1">
          <p className="text-white font-medium">
            {images[currentImageIndex].title[lang]}
          </p>
          <p className="text-xs text-neutral-500 uppercase tracking-widest">
            Slide {currentImageIndex + 1} / {images.length}
          </p>
        </div> */}
      </section>

      <section className="flex-1 space-y-8 overflow-y-auto pr-4 custom-scrollbar">
        <div className="bg-white/2 border border-white/5 rounded-3xl p-6">
          <div className="flex justify-between items-center">
            <h3 className="text-3xl font-bold text-white">
              {images[currentImageIndex].title[lang]}
            </h3>
            {/* <Icon className="w-12 h-12 text-white/20" /> */}
          </div>
          {/* <span className="text-center">
            <p className="text-sm text-blue-400 font-mono">{type[lang]}</p>
            <p className="text-sm text-blue-400 font-mono">{period[lang]}</p>
          </span> */}

          <div className="flex gap-4 mt-2 pt-2 border-t border-white/5">
            <p className="text-xs font-mono text-white/30 uppercase tracking-[0.2em] text-center">
              Slide {currentImageIndex + 1} / {images.length}
            </p>
            {/* <button
              disabled={isDev}
              onClick={() => !isDev && window.open(link!, "_blank")}
              className={`flex items-center gap-2 text-xs font-bold uppercase tracking-wider ${
                isDev
                  ? "text-white/20"
                  : "text-blue-400 hover:text-white transition"
              }`}
            >
              <PreviewIcon className="w-5 h-5" /> Preview {isDev && "(Dev)"}
            </button>
            <button
              onClick={() => window.open(githubURL, "_blank")}
              className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-400 hover:text-white transition"
            >
              <GithubLogo className="w-5 h-5" /> Repository
            </button> */}
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-xs font-mono text-white/30 uppercase tracking-[0.2em]">
            {t("projects.featureBreakdown")}
          </h4>
          <div className="space-y-4">
            {images[currentImageIndex].description[lang].bullets.map(
              ({ body, title }, i) => (
                <div
                  key={i}
                  className="group border-l-2 border-white/5 hover:border-blue-500/50 pl-4 transition-colors"
                >
                  <h5 className="text-white text-sm font-bold mb-1">{title}</h5>
                  <p className="text-xs text-neutral-500 leading-relaxed">
                    {body}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mobile;
