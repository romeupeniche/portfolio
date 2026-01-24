import React from "react";
import { PROJECTS_DATA } from "../../data/projectsData";
import type { ITechData } from "../../data/techData";
import { useSettingsStore } from "../../store/useSettingsStore";

const TechStackCard: React.FC<{ techObj: ITechData; id?: string }> = ({
  techObj,
  id = "core",
}) => {
  const { t, isLowPerf } = useSettingsStore();
  const { key, items } = techObj;
  const flex1 = key == "ongoing" ? "flex-3" : "flex-1";
  const additionalTitleMd =
    key == "additional" && t(`tech_stack.additional`).split(" ")[0];
  return (
    <div
      key={id}
      className={`
    ${flex1} m-4 p-4
    rounded-2xl

    ${!isLowPerf && "backdrop-blur-[6px] "}
      border border-white/10
      
      will-change-transform
  `}
    >
      <h2
        className={`${key == "additional" ? "md:block hidden" : ""} text-lg md:text-2xl font-bold text-center mb-2 text-main-blue`}
      >
        {t(`tech_stack.${key}`)}
      </h2>

      <h2 className="md:hidden block text-lg md:text-2xl font-bold text-center mb-2 text-main-blue">
        {additionalTitleMd}
      </h2>
      <ul className="flex flex-row justify-evenly">
        {items.map(({ title, icon: SvgIcon, id }, idx) => {
          const filteredProjects = PROJECTS_DATA.filter(({ mainTechUsed }) =>
            mainTechUsed.includes(id),
          );

          return (
            <li key={idx} className="flex flex-col items-center md:gap-2">
              <SvgIcon className="w-10 h-10 md:h-25 md:w-25 select-none text-main-blue" />
              <span className="font-medium text-[0.6rem] md:text-2xl text-dark-blue">
                {title}
              </span>
              <span className="h-7 flex items-center justify-center">
                {filteredProjects.map(({ icon: Icon, id }) => (
                  <Icon
                    key={id}
                    className={`w-3 h-4 md:h-7 md:w-7 ${
                      id == "portfolio" && "text-light-blue"
                    }`}
                  />
                ))}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TechStackCard;
