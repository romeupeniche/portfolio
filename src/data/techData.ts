import react from "../assets/tech-stack/ReactIcon.tsx";
import reactnative from "../assets/tech-stack/ReactNativeIcon.tsx";
import typescript from "../assets/tech-stack/TypescriptIcon.tsx";
import redux from "../assets/tech-stack/ReduxIcon.tsx";
import reactrouter from "../assets/tech-stack/ReactRouterIcon.tsx";
import materialui from "../assets/tech-stack/MaterialUiIcon.tsx";
import nestjs from "../assets/tech-stack/NestJsIcon.tsx";
import tailwind from "../assets/tech-stack/TailwindIcon.tsx";
import next from "../assets/tech-stack/NextIcon.tsx";
import nodejs from "../assets/tech-stack/NodeJsIcon.tsx";
import python from "../assets/tech-stack/PythonIcon.tsx";
import git from "../assets/tech-stack/GitIcon.tsx";
import type { FC, SVGProps } from "react";
import HTMLIcon from "../assets/tech-stack/HTMLIcon.tsx";
import CSSIcon from "../assets/tech-stack/CSSIcon.tsx";
import JavaScriptIcon from "../assets/tech-stack/JavaScriptIcon.tsx";

export interface ITechData {
  col: number;
  items: {
    title: string;
    icon: FC<SVGProps<SVGSVGElement>>;
    id: string;
  }[];
  key: "core" | "ongoing" | "additional";
  rowEnd3: boolean;
}

export const techData: ITechData[] = [
  {
    key: "core",
    col: 4,
    rowEnd3: false,
    items: [
      {
        title: "React",
        id: "react",
        icon: react,
      },
      {
        title: "JavaScript",
        id: "javascript",
        icon: JavaScriptIcon,
      },
      {
        title: "HTML5",
        id: "html",
        icon: HTMLIcon,
      },
      {
        title: "CSS3",
        id: "css",
        icon: CSSIcon,
      },
      {
        title: "TypeScript",
        id: "typescript",
        icon: typescript,
      },
      {
        title: "Redux",
        id: "redux",
        icon: redux,
      },
      {
        title: "Material UI",
        id: "materialui",
        icon: materialui,
      },
      {
        title: "React Router",
        id: "reactrouter",
        icon: reactrouter,
      },
    ],
  },
  {
    key: "ongoing",
    col: 3,
    rowEnd3: true,
    items: [
      {
        title: "React Native",
        id: "reactnative",
        icon: reactnative,
      },
      {
        title: "Nest JS",
        id: "nestjs",
        icon: nestjs,
      },
      {
        title: "Tailwind",
        id: "tailwind",
        icon: tailwind,
      },
      {
        title: "Next JS",
        id: "nextjs",
        icon: next,
      },
      {
        title: "Node JS",
        id: "nodejs",
        icon: nodejs,
      },
    ],
  },
  {
    key: "additional",
    col: 1,
    rowEnd3: true,
    items: [
      {
        title: "Python",
        id: "python",
        icon: python,
      },
      {
        title: "Git",
        id: "git",
        icon: git,
      },
    ],
  },
];
