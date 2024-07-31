import * as techs from "../components/assets/techs";
import Spain from "../components/assets/Spain";
import UnitedStates from "../components/assets/UnitedStates";
import {
  PortafolioWeb,
  TasksApp,
  TicketManagementGechisa,
} from "../components/assets/projects";

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
    name: "C Sharp",
    color: "#68217a",
    icon: techs.CSharp,
  },
] as const;

export const EXTRASKILLS = [
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

type Project = {
  title: string;
  description: string;
  url?: string;
  github?: string;
  techs: (typeof TECHS)[number]["name"][];
  image: string;
};

export const PROJECTS: Project[] = [
  {
    title: "Ticket Management Gechisa",
    description:
      "Sistema de gestión y venta de boletos para una empresa de transporte. Con autenticación de usuarios y roles. UI con shadcn.",
    github: "https://github.com/GuDex-Dev/ticket-management-gechisa",
    techs: ["Next.js", "React", "TailwindCSS", "SQL"],
    image: TicketManagementGechisa,
  },
  {
    title: "Mi portafolio",
    description:
      "Mi primer portafolio web, donde pude poner mis habilidades y conocimientos a prueba al hacerlo desde 0.",
    url: "https://gudex-dev.github.io/portfolio-gudex-dev/",
    techs: ["React", "TS", "CSS"],
    github: "https://github.com/GuDex-Dev/portfolio-gudex-dev",
    image: PortafolioWeb,
  },
  {
    title: "Tasks App",
    description:
      "Aplicación de lista de tareas que permite crear, editar y eliminar tareas, con una interfaz intuitiva y atractiva, además de un cambio de tema. UI con shadcn.",
    url: "https://gudex-dev.github.io/local-tasks-react-app/",
    github: "https://github.com/GuDex-Dev/local-tasks-react-app",
    techs: ["React", "TailwindCSS"],
    image: TasksApp,
  },
];
