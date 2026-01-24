import React from "react";
import GlassDiv from "../ui/GlassDiv";
import GithubLogo from "../icons/GithubIcon";
import LinkedInLogo from "../icons/LinkedInIcon";
import AtIcon from "../icons/AtIcon";
import scrollToSection from "../../utils/scrollToSection";
import LanguageSwitch from "../ui/LanguageSwitch";
import PerformanceToggle from "../ui/PerformanceToggle";
import { useSettingsStore } from "../../store/useSettingsStore";
import PersonIcon from "../icons/Header/PersonIcon";
import TechIcon from "../icons/Header/TechIcon";
import FolderIcon from "../icons/Header/FolderIcon";
import AwardsIcon from "../icons/Header/AwardsIcon";
import ContactIcon from "../icons/Header/ContactIcon";

const Header: React.FC = () => {
  const { t } = useSettingsStore();

  return (
    <header className="absolute w-full z-30">
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
              Icon: PersonIcon,
            },
            {
              text: t("header.tech_stack"),
              onClick: () => scrollToSection("tech-stack"),
              Icon: TechIcon,
            },
            {
              text: t("header.projects"),
              onClick: () => scrollToSection("projects"),
              Icon: FolderIcon,
            },
            {
              text: t("header.awards"),
              onClick: () => scrollToSection("awards"),
              Icon: AwardsIcon,
            },
            {
              text: t("header.contact"),
              onClick: () => scrollToSection("contact"),
              Icon: ContactIcon,
            },
          ]}
        />
        <GlassDiv title="↓" onClick={() => scrollToSection("footer")} />
      </nav>
      <div className="hidden md:flex p-6 w-full justify-between flex-row">
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
        <nav className="md:flex hidden gap-4">
          <PerformanceToggle />
          <LanguageSwitch />
        </nav>
      </div>
    </header>
  );
};

export default Header;
