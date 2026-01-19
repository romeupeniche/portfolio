import React, { useEffect, useMemo, useRef, useState } from "react";
import TextScrambleLoop from "../ui/TextScramble";
import profile from "../../assets/photos/profile.png";
import AnimatedMessageButton from "../ui/AnimatedMessageButton";
import { useSettingsStore } from "../../store/useSettingsStore";
import type { TranslationKeys } from "../../types/i18n";

const fetchPhrases = (
  t: (key: TranslationKeys) => string,
  _: string,
  prefix: string,
  count: number,
) => {
  return Array.from({ length: count }, (_, i) =>
    t(`hero.${prefix}_${i}` as TranslationKeys),
  );
};
const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isHoveringPhoto, setIsHoveringPhoto] = useState(false);
  const { isLowPerf, t, lang } = useSettingsStore();

  const titlePhrases = useMemo(
    () => fetchPhrases(t, lang, "title", 4),
    [t, lang],
  );
  const subtitlePhrases = useMemo(
    () => fetchPhrases(t, lang, "subtitle", 3),
    [t, lang],
  );

  useEffect(() => {
    if (isLowPerf) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    const lines: {
      x: number;
      y: number;
      length: number;
      speed: number;
      opacity: number;
    }[] = [];
    const maxLines = 50;

    for (let i = 0; i < maxLines; i++) {
      lines.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        length: Math.random() * 100 + 50,
        speed: Math.random() * 0.5 + 0.1,
        opacity: Math.random() * 0.3 + 0.1,
      });
    }

    const drawBackground = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      lines.forEach((line) => {
        ctx.beginPath();
        ctx.moveTo(line.x, line.y);
        ctx.lineTo(line.x + line.length, line.y + line.length);
        ctx.strokeStyle = `rgba(59, 130, 246, ${line.opacity})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();

        line.y += line.speed;
        line.x += line.speed * 0.2;

        if (
          line.y > canvas.height + line.length ||
          line.x > canvas.width + line.length
        ) {
          line.y = -line.length;
          line.x = Math.random() * canvas.width;
          line.opacity = Math.random() * 0.3 + 0.1;
        }
      });
      animationFrameId = requestAnimationFrame(drawBackground);
    };

    drawBackground();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [isLowPerf]);

  return (
    <section
      id="hero"
      className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden text-white"
    >
      {!isLowPerf && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 z-0 pointer-events-none opacity-90"
        />
      )}

      <div className="relative z-1 flex flex-col items-center justify-center text-center mx-auto px-4">
        <div
          className={`relative w-48 h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden mb-8 border border-white/10
          will-change-transform 
          ${isLowPerf ? "shadow-none" : "bg-black/20 shadow-2xl hover:border-blue-400/30"}
          group transition-all duration-500 transform hover:scale-105`}
          onMouseEnter={() => setIsHoveringPhoto(true)}
          onMouseLeave={() => setIsHoveringPhoto(false)}
        >
          <img
            src={profile}
            alt="Profile"
            className={`w-full h-full object-cover transition-all duration-700 
              ${
                isHoveringPhoto
                  ? "grayscale-0 scale-110"
                  : "grayscale scale-100"
              }
              filter ${isHoveringPhoto ? "brightness-110" : "brightness-75"}
            `}
          />

          {!isLowPerf && (
            <>
              <div className="absolute inset-0 rounded-full ring-2 ring-light-blue/20 animate-pulse-slow"></div>
              <div
                className={`absolute inset-0 bg-linear-to-br transition-all duration-700 ${
                  isHoveringPhoto ? "opacity-30" : "opacity-0"
                } from-light-blue/20 via-transparent to-cyan-500/20`}
              ></div>
            </>
          )}
        </div>

        {isLowPerf ? (
          <>
            <h1 className="font-black italic tracking-tight text-5xl lg:text-[5.5rem] w-full mb-4 leading-tight text-white drop-shadow-md">
              {titlePhrases[0]}
            </h1>
            <h2 className="font-light text-xl lg:text-2xl text-white/80 max-w-2xl mb-8 drop-shadow-sm">
              {subtitlePhrases[0]}
            </h2>
          </>
        ) : (
          <>
            <TextScrambleLoop
              phrases={titlePhrases}
              className="font-black italic tracking-tight text-5xl lg:text-[5.5rem] w-full mb-4 leading-tight text-white drop-shadow-md"
            />

            <TextScrambleLoop
              phrases={subtitlePhrases}
              className="font-light text-xl lg:text-2xl text-white/80 max-w-2xl mb-8 drop-shadow-sm"
            />
          </>
        )}

        <AnimatedMessageButton />
      </div>

      {!isLowPerf && (
        <>
          <div
            className="absolute top-0 left-0 w-full h-px z-20"
            style={{
              background: `radial-gradient(circle at center, rgba(30, 45, 50, 1) 0%, rgba(14, 25, 29, 0.4) 60%, transparent 100%)`,
              opacity: 0.8,
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-full h-px z-20"
            style={{
              background: `radial-gradient(circle at center, rgba(30, 45, 50, 1) 0%, rgba(14, 25, 29, 0.4) 60%, transparent 100%)`,
              opacity: 0.8,
            }}
          />
        </>
      )}
    </section>
  );
};

export default Hero;
