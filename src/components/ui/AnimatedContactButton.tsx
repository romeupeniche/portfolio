import type { ElementType } from "react";

const colorVariants: Record<string, string> = {
  blue: "border-blue-500/30 hover:shadow-blue-500/20 hover:border-blue-500/60 hover:from-blue-500/10 via-blue-400/10 text-blue-500 group-hover:text-blue-400",
  green:
    "border-green-500/30 hover:shadow-green-500/20 hover:border-green-500/60 hover:from-green-500/10 via-green-400/10 text-green-500 group-hover:text-green-400",
  indigo:
    "border-indigo-500/30 hover:shadow-indigo-500/20 hover:border-indigo-500/60 hover:from-indigo-500/10 via-indigo-400/10 text-indigo-500 group-hover:text-indigo-400",
};

const AnimatedContactButton: React.FC<{
  color: "blue" | "green" | "indigo";
  href: string;
  label: string;
  icon: ElementType;
}> = ({ color, href, label, icon: Icon }) => {
  const theme = colorVariants[color];

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex group items-center gap-4 px-8 py-4 rounded-full backdrop-blur-lg border bg-linear-to-tr from-black/60 to-black/40 shadow-lg hover:scale-105 hover:-translate-y-1 active:scale-95 transition-all duration-300 ease-out cursor-pointer group relative overflow-hidden ${theme}`}
    >
      <div
        className={`absolute inset-0 bg-linear-to-r from-transparent to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out ${theme
          .split(" ")
          .find((c) => c.startsWith("via-"))}`}
      ></div>

      <div className="relative z-10 transition-transform duration-500 group-hover:rotate-360">
        <Icon
          className={`w-8 h-8 fill-current transition-all duration-300 ${theme
            .split(" ")
            .find((c) => c.startsWith("text-"))} ${theme
            .split(" ")
            .find((c) => c.startsWith("group-hover:text-"))}`}
        />
      </div>

      <span className="relative z-10 text-xl font-medium text-gray-200 group-hover:text-white transition-colors duration-300">
        {label}
      </span>
    </a>
  );
};

export default AnimatedContactButton;
