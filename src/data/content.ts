import {
  PortafolioWeb,
  TasksApp,
  TicketManagementGechisa,
} from "../components/assets/projects";
import { Content } from "../types";

export const content: Content = {
  header: {
    about: {
      es: "Sobre mí",
      en: "About Me",
    },
    projects: {
      es: "Proyectos",
      en: "Projects",
    },
    skills: {
      es: "Habilidades",
      en: "Skills",
    },
    contact: {
      es: "Contacto",
      en: "Contact",
    },
  },
  about: {
    name: {
      es: "Gabriel Huertas",
      en: "Gabriel Huertas",
    },
    position: {
      es: "Desarrollador Web",
      en: "Web Developer",
    },
    text: {
      es: [
        "Soy un desarrollador web proactivo, resiliente, disciplinado y autodidacta, actualmente cursando el 6to ciclo de Ingeniería de Sistemas",
        "Mi objetivo es adquirir experiencia en desarrollo web para fortalecer mi carrera, ampliar mis conocimientos y aportar valor a una empresa destacada.",
        "He desarrollado proyectos de manera independiente, complementando mis estudios universitarios, y estoy comprometido a aportar lo mejor de mí en cualquier oportunidad que se presente.",
      ],
      en: [
        "I am a proactive, resilient, disciplined, and self-taught web developer, currently in the 6th semester of Systems Engineering.",
        "My goal is to gain experience in web development to strengthen my career, expand my knowledge, and add value to a prominent company.",
        "I have developed projects independently, complementing my university studies, and I am committed to giving my best in any opportunity that arises.",
      ],
    },
  },
  projects: [
    {
      title: {
        es: "Ticket Management Gechisa",
        en: "Ticket Management Gechisa",
      },
      description: {
        es: "Sistema de gestión y venta de boletos para una empresa de transporte. Con autenticación de usuarios y roles. UI con shadcn.",
        en: "A ticket management and sales system for a transportation company. Includes user authentication and roles. UI with shadcn.",
      },
      github: "https://github.com/GuDex-Dev/ticket-management-gechisa",
      techs: ["Next.js", "React", "TailwindCSS", "SQL"],
      image: TicketManagementGechisa,
    },
    {
      title: {
        es: "Mi portafolio",
        en: "My Portfolio",
      },
      description: {
        es: "Mi primer portafolio web, donde pude poner mis habilidades y conocimientos a prueba al hacerlo desde 0.",
        en: "My first web portfolio, where I was able to test my skills and knowledge by building it from scratch.",
      },
      url: "https://gudex-dev.github.io/portfolio-gudex-dev/",
      techs: ["React", "TS", "CSS"],
      github: "https://github.com/GuDex-Dev/portfolio-gudex-dev",
      image: PortafolioWeb,
    },
    {
      title: {
        es: "Tasks App",
        en: "Tasks App",
      },
      description: {
        es: "Aplicación de lista de tareas que permite crear, editar y eliminar tareas, con una interfaz intuitiva y atractiva, antes de un cambio de tema. UI con shadcn.",
        en: "A task list application that allows you to create, edit, and delete tasks, with an intuitive and attractive interface before a theme change. UI with shadcn.",
      },
      url: "https://gudex-dev.github.io/local-tasks-react-app/",
      github: "https://github.com/GuDex-Dev/local-tasks-react-app",
      techs: ["React", "TailwindCSS"],
      image: TasksApp,
    },
  ],
};
