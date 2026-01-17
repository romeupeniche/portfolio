import React from "react";
import dottedSendMessage from "../../assets/icons/dotted-send-message.png";
import AtIcon from "../icons/AtIcon";
import AnimatedContactButton from "../ui/AnimatedContactButton";
import LinkedInLogo from "../icons/LinkedInIcon";
import GithubLogo from "../icons/GithubIcon";
import LocationBadge from "../ui/LocationBadge";
import { useSettingsStore } from "../../store/useSettingsStore";

const Contact: React.FC = () => {
  const { t } = useSettingsStore();
  return (
    <section
      id="contact"
      className="h-lvh min-h-[800px] p-12 w-full flex flex-col justify-center gap-20 bg-linear-to-b from-black-blue to-black"
    >
      <header className="flex flex-row xl:justify-between items-center justify-end">
        <img src={dottedSendMessage} className="w-xl hidden xl:inline-block" />
        <h1 className="font-black lg:text-8xl text-5xl text-right text-nowrap">
          {t("contact.title")}
        </h1>
      </header>
      <nav className="flex flex-col justify-center gap-14 items-center">
        <LocationBadge />
        <div className="text-center">
          <p className="text-gray-500 font-mono text-sm mb-2">
            {t("contact.start")}
          </p>
          <h3 className="text-gray-300 text-xl font-light italic tracking-tighter">
            {t("contact.initial")}
            <span className="text-blue-400 tracking-normal">
              {t("contact.middle")}
            </span>
            {t("contact.end")}
          </h3>
        </div>
        <div className="flex flex-row gap-14 justify-center items-center">
          <AnimatedContactButton
            color="blue"
            icon={LinkedInLogo}
            href="https://linkedin.com/in/romeupeniche"
            label="linkedin.com/in/romeupeniche"
          />
          <AnimatedContactButton
            color="green"
            icon={AtIcon}
            href="mailto:romeupeniche12@hotmail.com"
            label="romeupeniche12@hotmail.com"
          />
          <AnimatedContactButton
            color="indigo"
            icon={GithubLogo}
            href="https://github.com/romeupeniche"
            label="github.com/romeupeniche"
          />
        </div>
        <div className="flex items-center gap-2 mb-8 justify-center lg:justify-start">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <span className="text-sm font-medium text-green-500 uppercase tracking-widest">
            {t("contact.availableForWork")}
          </span>
        </div>
      </nav>
    </section>
  );
};

export default Contact;
