import React from "react";
import child from "../../assets/photos/child.png";
import soccer from "../../assets/photos/soccer.jpeg";
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
      className="h-lvh min-h-[800px] gap-4 bg-linear-to-b from-transparent to-black-blue p-12 flex flex-col justify-center"
      id="about"
    >
      <h1 className="font-black italic tracking-tighter text-6xl md:text-8xl text-center">
        {t("about_me.title")}
      </h1>
      <main className="flex flex-col sm:flex-row items-center sm:text-left text-center justify-between gap-4 sm:gap-14">
        <img
          src={child}
          className="w-30 h-30 md:w-80 md:h-80 rounded-full object-cover mx-auto"
          alt="Child Romeu looking to a table with robots"
        />
        <p className="md:text-2xl text-xs font-medium tracking-tighter">
          {formatText(t("about_me.paragraph1"))}
        </p>
      </main>
      <main className="flex flex-col-reverse sm:flex-row items-center justify-between sm:text-left text-center gap-4 sm:gap-14 pt-4 sm:pt-0 border-t sm:border-0 border-t-light-blue/10">
        <p className="md:text-2xl text-xs font-medium tracking-tighter">
          {formatText(t("about_me.paragraph2"))}
        </p>
        <img
          src={soccer}
          className="w-30 h-30 md:w-80 md:h-80 object-cover rounded-full mx-auto"
          alt="Child Romeu in his hometown team's stadium for a game"
        />
      </main>
    </section>
  );
};

export default About;
