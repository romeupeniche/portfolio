import React from "react";
import child from "../../assets/photos/child.png";
import { useSettingsStore } from "../../store/useSettingsStore";

const formatText = (text: string) => {
  const parts = text.split(/(\[\[.*?\]\]|%%.*?%%)/g);

  return parts.map((part, index) => {
    if (part.startsWith("[[") && part.endsWith("]]")) {
      const word = part.slice(2, -2);
      return (
        <span
          key={index}
          className="text-light-blue font-bold drop-shadow-[0_0_8px_rgba(72,129,150,0.8)]"
        >
          {word}
        </span>
      );
    }

    if (part.startsWith("%%") && part.endsWith("%%")) {
      const word = part.slice(2, -2);
      return (
        <span
          key={index}
          className="underline decoration-main-blue/60 decoration-2 underline-offset-4 text-gray-100"
        >
          {word}
        </span>
      );
    }

    return part;
  });
};
const About: React.FC = () => {
  const { t } = useSettingsStore();
  return (
    <section
      className="h-lvh min-h-[800px] bg-linear-to-b from-transparent to-black-blue p-12 flex flex-col justify-center"
      id="about"
    >
      <h1 className="font-black text-8xl text-center">{t("about_me.title")}</h1>
      <main className="flex items-center justify-between gap-14">
        <img src={child} className="w-xs rounded-full" />
        <p className="text-2xl font-medium tracking-tighter">
          {formatText(t("about_me.paragraph"))}
        </p>
      </main>
    </section>
  );
};

export default About;
