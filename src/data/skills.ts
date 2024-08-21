import * as techs from "../components/assets/skills/techs";
import Spain from "../components/assets/skills/Spain";
import UnitedStates from "../components/assets/skills/UnitedStates";

export const TECHS = [
  {
    name: "Next.js",
    color: "#000000",
    icon: techs.NextJS,
  },
  {
    name: "React",
    color: "#149eca",
    icon: techs.ReactJS,
  },
  {
    name: "TS",
    color: "#2d79c7",
    icon: techs.TypeScript,
  },
  {
    name: "TailwindCSS",
    color: "#38bdf8",
    icon: techs.TailwindCSS,
  },
  {
    name: "CSS",
    color: "#214ce5",
    icon: techs.CSS3,
  },
  {
    name: "Git",
    color: "#f05032",
    icon: techs.Git,
  },
  {
    name: "SQL",
    color: "#db7533",
    icon: techs.SQL,
  },
  {
    name: "Java",
    color: "#f89820",
    icon: techs.Java,
  },
  {
    name: "Spring",
    color: "#6db33f",
    icon: techs.SpringFramework,
  },
  {
    name: "C Sharp",
    color: "#68217a",
    icon: techs.CSharp,
  },
] as const;

export const LANGUAGES = [
  {
    name: "Spanish",
    color: "#000",
    icon: Spain,
  },
  {
    name: "English - Intermediate",
    color: "#000",
    icon: UnitedStates,
  },
];
