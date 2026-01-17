import React from "react";
import profile from "../../assets/photos/profile.png";
import arrow from "../../assets/icons/arrow.png";
import memoji from "../../assets/icons/memoji.png";
import { useSettingsStore } from "../../store/useSettingsStore";

const Hero: React.FC = () => {
  const { t } = useSettingsStore();

  const slides = [
    [
      <div>
        <h1>{t("hero.1")}</h1>
        <h2 className="text-2xl font-medium">{t("hero.scroll")}</h2>
      </div>,
    ],
    [
      <h1>{t("hero.2")}</h1>,
      <img
        src={arrow}
        className="
                      absolute 
                      top-[20lvh] 
                      left-[116lvw] 
                      -rotate-13 
                      w-[50lvw]
                      select-none
                    "
      />,
    ],
    [
      <h1>{t("hero.3")}</h1>,
      <img
        src={memoji}
        className="
                      absolute 
                      top-[20lvh] 
                      left-[263lvw] 
                      w-[10lvw] 
                      -z-10
                      select-none
                    "
      />,
    ],
    [<h1>{t("hero.4")}</h1>],
  ];

  return (
    <section
      id="hero"
      className="h-lvh min-h-[800px] flex flex-col justify-center"
    >
      <section className="p-8 flex flex-row items-center gap-12 justify-between w-full h-lvh min-h-[800px]">
        <img
          src={profile}
          draggable={false}
          className="w-40 md:w-60 lg:w-xs xl:w-sm rounded-full border-main-blue border-2 select-none z-10"
        />
        <div
          className="absolute top-0 left-0 origin-top-left overflow-y-scroll overflow-x-hidden h-lvw w-lvw -rotate-90"
          style={{
            transform: "translateX(-100vh)",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <div
            className="flex flex-row w-[400vw] rotate-90 origin-top-left"
            style={{
              transform: "translateY(-100vh)",
            }}
          >
            {slides.map((arr, i) => (
              <div
                key={i}
                className="text-main-blue font-bold text-6xl xl:text-7xl 2xl:text-8xl h-lvh w-lvw flex p-16 justify-end items-center text-center"
              >
                {arr.map((el, idx) => (
                  <div key={idx}>{el}</div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Hero;
