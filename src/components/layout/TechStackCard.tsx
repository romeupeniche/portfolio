import React from "react";
import { PROJECTS_DATA } from "../../data/projectsData";
import type { ITechData } from "../../data/techData";
import PersonIcon from "../icons/PersonIcon";
import { useSettingsStore } from "../../store/useSettingsStore";

const TechStackCard: React.FC<{ techObj: ITechData; id?: string }> = ({
  techObj,
  id = "core",
}) => {
  const { t, isLowPerf } = useSettingsStore();
  const { key, items } = techObj;
  const flex1 = key == "ongoing" ? "flex-3" : "flex-1";
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
      <h2 className="text-2xl font-bold text-center mb-2 text-main-blue">
        {t(`tech_stack.${key}`)}
      </h2>
      <ul className="flex flex-row justify-evenly">
        {items.map(({ title, icon: SvgIcon, id }, idx) => {
          const filteredProjects = [
            ...PROJECTS_DATA,
            {
              mainTechUsed: ["react", "typescript", "tailwind"],
              id: "portfolio",
              icon: PersonIcon,
            },
          ].filter(({ mainTechUsed }) => mainTechUsed.includes(id));

          return (
            <li key={idx} className="flex flex-col items-center gap-2">
              <SvgIcon className="h-25 w-25 select-none text-main-blue" />
              <span className="font-medium text-2xl text-dark-blue">
                {title}
              </span>
              <span className="h-7 flex items-center justify-center">
                {filteredProjects.map(({ icon: Icon, id }) => (
                  <Icon
                    key={id}
                    className={`h-7 w-7 ${
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
