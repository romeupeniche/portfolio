import React from "react";
import rocket from "../../assets/icons/rocket.png";
import GlassDiv from "../ui/GlassDiv";
import { PROJECTS_DATA } from "../../data/projectsData";

import { techData } from "../../data/techData";
import { ExplorerIconWithDrawer } from "../layout/ProjectDetails/ExplorerIconTrigger";
import LaptopPreviewButton from "../ui/LaptopPreviewButton";
import scrollToSection from "../../utils/scrollToSection";
import { useSettingsStore } from "../../store/useSettingsStore";

const Projects: React.FC = () => {
  const { lang, t } = useSettingsStore();
  const [openProjectId, setOpenProjectId] = React.useState<string | null>(null);

  return (
    <section
      id="projects"
      className="bg-black-blue h-lvh min-h-[800px] p-12 flex flex-col gap-4"
    >
      <header className="flex flex-row items-center justify-between">
        <h2 className="lg:text-8xl text-5xl font-black text-white italic uppercase tracking-tighter">
          {t("projects.title").split(" ")[0]}
          <span className="text-light-blue">
            {t("projects.title").split(" ")[1]}
          </span>
        </h2>
        <img src={rocket} className="w-50 hidden xl:inline-block" />
      </header>
      <nav className="flex h-full items-stretch gap-4">
        {/* da pra adicionar um justify-center quando adicionar mais um projeto */}
        {PROJECTS_DATA.map((project) => {
          const {
            id,
            title,
            icon: Icon,
            period,
            mainTechUsed,
            deploy,
            link,
            heroImage,
            images,
          } = project;
          let previewOnClick: () => void;
          if (deploy === "netlify") {
            previewOnClick = () => {
              window.open(link!, "_blank");
            };
          } else if (deploy === "development") {
            previewOnClick = () => {};
          }
          const isDrawerOpen = openProjectId === id;
          const setIsDrawerOpen = (open: boolean) =>
            setOpenProjectId(open ? id : null);
          return (
            <nav key={id}>
              <GlassDiv>
                <header className="flex items-center justify-between">
                  <span className="group">
                    <h1 className="text-5xl italic font-black tracking-tight leading-none">
                      {title}
                    </h1>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="shrink-0 w-6 h-px bg-light-blue/50 group-hover:w-10 transition-all" />
                      <h4 className="text-white/20 font-bold text-sm tracking-wide group-hover:text-light-blue transition-colors">
                        {period[lang]}
                      </h4>
                    </div>
                  </span>
                  <Icon className="h-full w-auto p-2" />
                </header>
                <div className="w-full h-[50vh] overflow-hidden">
                  <img
                    src={heroImage}
                    onClick={() => setIsDrawerOpen(true)}
                    draggable={false}
                    className="select-none w-full rounded-xl transition-all cursor-pointer duration-300 hover:shadow-white hover:scale-102 hover:transform hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]"
                  />
                </div>
                {/* <section className="flex gap-4 justify-evenly items-center mt-4">
                  {mainTechUsed.map((techId) => {
                    const tech = techData
                      .flatMap((category) => category.items)
                      .find((item) => item.id === techId);

                    if (!tech) return null;
                    const { icon: Icon } = tech;

                    return (
                      <Icon
                        key={techId}
                        className="w-10 h-10 text-dark-blue hover:text-white transition cursor-pointer"
                        onClick={() => scrollToSection("tech-stack")}
                      />
                    );
                  })}
                </section> */}
                <footer className="mt-auto flex justify-between items-center">
                  <div className="flex gap-4 items-center">
                    {mainTechUsed.map((techId) => {
                      const tech = techData
                        .flatMap((category) => category.items)
                        .find((item) => item.id === techId);

                      if (!tech) return null;
                      const { icon: TechIcon } = tech;

                      return (
                        <div
                          key={techId}
                          className="relative flex items-center justify-center"
                        >
                          <TechIcon
                            className="rounded peer w-10 h-10 text-white/20 hover:text-light-blue transition-colors cursor-pointer"
                            onClick={(e) => {
                              e.stopPropagation();
                              scrollToSection("tech-stack");
                            }}
                          />
                          <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-light-blue text-[8px] text-white rounded opacity-0 peer-hover:opacity-100 peer-hover:-translate-y-1 transition-all duration-200 pointer-events-none whitespace-nowrap shadow-lg">
                            {tech.title}
                            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-light-blue rotate-45" />
                          </span>
                        </div>
                      );
                    })}
                  </div>
                  <nav className="flex gap-8 items-center">
                    <LaptopPreviewButton
                      onClick={previewOnClick!}
                      screenImage={images[0].img}
                      disabled={deploy == "development"}
                    />
                    <ExplorerIconWithDrawer
                      project={project}
                      open={isDrawerOpen}
                      setOpen={setIsDrawerOpen}
                    />
                  </nav>
                </footer>
              </GlassDiv>
            </nav>
          );
        })}
      </nav>
    </section>
  );
};

export default Projects;
