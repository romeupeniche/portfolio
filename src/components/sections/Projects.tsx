import React from "react";
import rocket from "../../assets/icons/rocket.png";
import GlassDiv from "../ui/GlassDiv";
import { PROJECTS_DATA } from "../../data/projectsData";

import { techData } from "../../data/techData";
import { ExplorerIconWithDrawer } from "../layout/ExplorerIconWithDrawer";
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
        <h1 className="font-black lg:text-8xl text-5xl">
          {t("projects.title")}
        </h1>
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
                <header className="flex items-center justify-between mb-4">
                  <h1 className="text-4xl font-bold">{title}</h1>
                  <Icon />
                </header>
                <div className="w-full h-[50vh] overflow-hidden">
                  <img
                    src={heroImage}
                    onClick={() => setIsDrawerOpen(true)}
                    className="w-full rounded-xl transition-all cursor-pointer duration-300 hover:shadow-white hover:scale-102 hover:transform hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]"
                  />
                </div>
                <section className="flex gap-4 justify-evenly items-center mt-4">
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
                </section>
                <nav className="mt-auto flex justify-between items-center">
                  <span className="font-medium text-xl">{period[lang]}</span>
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
                </nav>
              </GlassDiv>
            </nav>
          );
        })}
      </nav>
    </section>
  );
};

export default Projects;
