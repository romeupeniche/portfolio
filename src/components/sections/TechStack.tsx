import React from "react";
import TextScrambleLoop from "../ui/TextScramble";

import { techData } from "../../data/techData";
import TechStackCard from "../layout/TechStackCard";
import MatrixRain from "../ui/MatrixRain";
import { useSettingsStore } from "../../store/useSettingsStore";

const TechStack: React.FC = () => {
  const { t, isLowPerf } = useSettingsStore();
  return (
    <section
      id="tech-stack"
      className="h-lvh min-h-[800px] w-full flex flex-col p-10 bg-black-blue overflow-hidden relative"
    >
      {!isLowPerf && (
        <>
          <div
            className="absolute top-0 left-0 w-full h-px z-20"
            style={{
              background: `radial-gradient(
            circle at center, 
            rgba(30, 45, 50, 1) 0%,    
            rgba(14, 25, 29, 0.4) 60%,  
            transparent 100%
            )`,
              opacity: 0.8,
            }}
          />
          <div className="absolute inset-0 z-0 pointer-events-none">
            <MatrixRain />
          </div>
        </>
      )}
      <header className="z-1">
        {isLowPerf ? (
          <h1 className="font-black lg:text-8xl text-5xl italic tracking-tighter text-center text-white">
            {t("tech_stack.title1")}
          </h1>
        ) : (
          <TextScrambleLoop
            phrases={[t("tech_stack.title1"), t("tech_stack.title2")]}
            className="font-black italic tracking-tighter lg:text-8xl text-5xl text-center text-white"
          />
        )}
      </header>
      <div className="flex flex-col flex-2 mt-4 justify-center z-1">
        <div>
          {techData.slice(0, 1).map((tech) => (
            <TechStackCard key={tech.key} techObj={tech} />
          ))}
        </div>
        <div className="flex flex-row gap-4 w-full">
          {techData.slice(1).map((tech) => (
            <TechStackCard key={tech.key} techObj={tech} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
