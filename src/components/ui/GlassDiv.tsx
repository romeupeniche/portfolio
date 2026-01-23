import { useEffect, useRef, type ReactNode } from "react";
import { useSettingsStore } from "../../store/useSettingsStore";

const GlassDiv = ({
  options,
  title,
  onClick,
  children,
}: {
  options?: { text: string; onClick: () => void }[];
  title?: string;
  onClick?: () => void;
  children?: ReactNode;
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const { isLowPerf } = useSettingsStore();

  useEffect(() => {
    const btn = divRef.current;
    if (!btn || isLowPerf) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();

      const isInside =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;

      if (!isInside) return;
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      btn.style.setProperty("--x", x + "px");
      btn.style.setProperty("--y", y + "px");
    };

    btn.addEventListener("mousemove", handleMouseMove);
    return () => {
      btn.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isLowPerf]);

  return (
    <div
      className={`
                relative py-4 text-base transition duration-500 overflow-hidden 
                ${
                  !isLowPerf &&
                  `
                  before:content-[''] before:absolute before:pointer-events-none 
                  before:w-[200px] before:h-[150px] before:opacity-0
                  before:left-(--x)
                  before:top-(--y)
                  before:[background:radial-gradient(#65bbf0,transparent,transparent)]
                  before:[transition:0.5s,top_0s,left_0s] 
                  before:transform-[translate(-50%,-50%)]
                 ${children ? "before:blur-2xl" : "after:backdrop-blur-md"}
                  hover:before:opacity-100
                  `
                }
                after:content-[''] after:absolute after:inset-1 
                after:border after:border-solid after:pointer-events-none
                after:border-[rgba(255,255,255,0.3)]
                
                ${title ? "cursor-pointer hover:text-light-blue px-4" : "px-8"}
                ${
                  children
                    ? "after:rounded-[20px] rounded-3xl before:rounded-[20px] h-full w-[70vh]"
                    : `rounded-lg after:rounded ${
                        isLowPerf
                          ? "after:[background:#2d2d2dee]"
                          : "after:[background:#2d2d2d8e]"
                      }`
                }
            `}
      ref={divRef}
      onClick={onClick}
    >
      <span className="flex gap-3 h-full">
        {options ? (
          options.map(({ text, onClick }, index) => (
            <span
              key={index}
              onClick={onClick}
              className={`
                            relative z-10 cursor-pointer transition 
                            hover:text-light-blue
                            text-white
                            pr-3 
                            border-r border-solid border-white/30 
                            last:border-r-0 last:pr-0
                            select-none
                        `}
            >
              {text}
            </span>
          ))
        ) : children ? (
          <span
            className={`
              z-5 select-none flex flex-col h-full
                            `}
          >
            {children}
          </span>
        ) : (
          <>
            <span
              onClick={onClick}
              className={`
              z-10 select-none
                            `}
            >
              {title}
            </span>
          </>
        )}
      </span>
    </div>
  );
};

export default GlassDiv;
