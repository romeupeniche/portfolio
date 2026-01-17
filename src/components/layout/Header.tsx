import React from "react";
import GlassDiv from "../ui/GlassDiv";
import GithubLogo from "../icons/GithubIcon";
import LinkedInLogo from "../icons/LinkedInIcon";
import AtIcon from "../icons/AtIcon";
import scrollToSection from "../../utils/scrollToSection";
import LanguageSwitch from "../ui/LanguageSwitch";
import PerformanceToggle from "../ui/PerformanceToggle";
import { useSettingsStore } from "../../store/useSettingsStore";

const Header: React.FC = () => {
  const { t } = useSettingsStore();

  return (
    <header className="absolute w-full z-10">
      <nav
        style={{
          position: "fixed",
          left: "50%",
          transform: "translateX(-50%)",
          marginTop: 12,
          display: "flex",
        }}
      >
        <GlassDiv title="↑" onClick={() => scrollToSection("hero")} />
        <GlassDiv
          options={[
            {
              text: t("header.about"),
              onClick: () => scrollToSection("about"),
            },
            {
              text: t("header.tech_stack"),
              onClick: () => scrollToSection("tech-stack"),
            },
            {
              text: t("header.projects"),
              onClick: () => scrollToSection("projects"),
            },
            {
              text: t("header.contact"),
              onClick: () => scrollToSection("contact"),
            },
          ]}
        />
        <GlassDiv title="↓" onClick={() => scrollToSection("footer")} />
      </nav>
      <div className="flex p-6 w-full justify-between flex-row">
        <nav className="flex items-center gap-4">
          <AtIcon
            className="text-util-grey hover:text-main-blue transition cursor-pointer"
            onClick={() =>
              window.open("mailto:romeupeniche12@hotmail.com", "_blank")
            }
          />
          <LinkedInLogo
            className="text-util-grey hover:text-main-blue transition cursor-pointer"
            onClick={() =>
              window.open("https://linkedin.com/in/romeupeniche", "_blank")
            }
          />
          <GithubLogo
            className="text-util-grey hover:text-main-blue transition cursor-pointer"
            onClick={() =>
              window.open("https://github.com/romeupeniche", "_blank")
            }
          />
        </nav>
        <nav className="flex gap-4">
          <PerformanceToggle />
          <LanguageSwitch />
        </nav>
        {/* <nav
          aria-label="Change Language"
          className="flex flex-col w-1/16 h-8 overflow-hidden group rounded-xl"
        >
          <ul>
            <li onClick={() => setLang("br")} className="select-none">
              <img
                src={brazil}
                draggable={false}
                className={`w-full object-cover transition-all cursor-pointer ${
                  lang === "br"
                    ? "h-6 group-hover:h-2 hover:h-6"
                    : "h-2 group-hover:h-2 hover:h-6"
                }`}
              />
            </li>
            <li onClick={() => setLang("en")} className="select-none">
              <img
                src={english}
                draggable={false}
                className={`w-full object-cover transition-all cursor-pointer ${
                  lang === "en"
                    ? "h-6 group-hover:h-2 hover:h-6"
                    : "h-2 group-hover:h-2 hover:h-6"
                }`}
              />
            </li>
          </ul>
        </nav> */}
      </div>
    </header>
  );
};

export default Header;
