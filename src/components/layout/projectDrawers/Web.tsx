import { useState } from "react";
import PreviewIcon from "../../../assets/icons/PreviewIcon";
import type { IProject } from "../../../data/projectsData";
import { techData } from "../../../data/techData";
import ChevronIcon from "../../icons/ChevronIcon";
import GithubLogo from "../../icons/GithubIcon";
import { useSettingsStore } from "../../../store/useSettingsStore";

const Web: React.FC<{ project: IProject }> = ({ project }) => {
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
  let previewIconClasses = "w-12 h-12";
  let previewOnClick: () => void;
  if (deploy === "netlify") {
    previewIconClasses +=
      " text-main-blue cursor-pointer hover:text-white transition";
    previewOnClick = () => {
      window.open(link!, "_blank");
    };
  } else if (deploy === "development") {
    previewIconClasses += " text-[rgba(255,255,255,0.3)] cursor-not-allowed";
    previewOnClick = () => {};
  }
  return (
    <div className="mx-auto max-w-5xl space-y-4 text-neutral-400">
      <header className="flex items-center justify-between">
        <h2 className="text-8xl font-bold text-neutral-200">{title}</h2>
        <Icon className="text-white h-25 w-25" />
      </header>
      <nav className="flex justify-between items-center">
        <PreviewIcon className={previewIconClasses} onClick={previewOnClick!} />
        <div>
          {type[lang]} | {period[lang]}
        </div>
        <GithubLogo
          className="w-12 h-12 text-main-blue cursor-pointer hover:text-white transition"
          onClick={() => window.open(githubURL, "_blank")}
        />
      </nav>

      <p>{description[lang]}</p>
      <div className="border-[rgba(255,255,255,0.3)] border rounded-2xl flex p-4">
        <nav className="flex px-2 items-center">
          <ChevronIcon
            className="rotate-180"
            onClick={() =>
              setCurrentImageIndex((prev) => (prev - 1 >= 0 ? (prev -= 1) : 0))
            }
          />
        </nav>
        <nav className="flex-1 flex flex-col justify-center items-center">
          <div className="relative flex justify-center items-center w-full">
            <header className="flex flex-col justify-center items-center">
              <h1 className="text-xl font-bold">
                {images[currentImageIndex].title[lang]}
              </h1>
              <span className="text-sm opacity-70">
                ({currentImageIndex + 1}/{images.length})
              </span>
            </header>
          </div>
          <div className="w-full h-70 overflow-y-scroll scroll-hidden-with-cursor px-4 mb-4">
            <img
              src={images[currentImageIndex].img}
              className="w-full h-auto rounded-xl"
            />
          </div>
          <p className="mb-4 text-center">
            {images[currentImageIndex].description[lang].title}
          </p>
          {images[currentImageIndex].description[lang].bullets.map(
            ({ body, title }) => (
              <section>
                <h1 className="font-bold">{title}</h1>
                <p className="ml-4">{body}</p>
              </section>
            )
          )}
        </nav>
        <nav className="flex px-2 justify-center flex-col">
          <ChevronIcon
            className="self-center"
            onClick={() =>
              setCurrentImageIndex((prev) =>
                prev + 1 <= images.length - 1 ? (prev += 1) : 0
              )
            }
          />
        </nav>
      </div>
      <h2 className="text-3xl font-medium text-center">
        {t("projects.coreStack")}
      </h2>
      <section className="flex gap-4 justify-evenly items-center my-4">
        {mainTechUsed.map((techId) => {
          const tech = techData
            .flatMap((category) => category.items)
            .find((item) => item.id === techId);

          if (!tech) return null;
          const { icon: Icon, title } = tech;

          return (
            <div className="flex-col flex items-center justify-center">
              <Icon className="w-20 h-20 text-main-blue" />
              <span className="text-xl">{title}</span>
            </div>
          );
        })}
      </section>
      <h2 className="text-3xl font-medium text-center">
        {t("projects.librariesTools")}
      </h2>
      <p className="text-center text-lg">
        {extraTechUsed.map((title, idx) => `${idx == 0 ? "" : ", "}${title}`)}
      </p>
    </div>
  );
};

export default Web;
