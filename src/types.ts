import { TECHS } from "./data";

export type Lang = "es" | "en";

export const LANGS = {
  es: "es",
  en: "en",
} as const;

export type MultiLang = Record<Lang, string>;

export type MultiLangArray = Record<Lang, string[]>;

export type Project = {
  title: MultiLang;
  description: MultiLang;
  url?: string;
  github?: string;
  techs: (typeof TECHS)[number]["name"][];
  image: string;
};

export type Content = {
  header: {
    about: MultiLang;
    projects: MultiLang;
    skills: MultiLang;
    contact: MultiLang;
  };
  about: {
    name: MultiLang;
    position: MultiLang;
    text: MultiLangArray;
  };
  projects: Project[];
};

export type AppContextType = {
  lang: Lang;
  setEnglish: () => void;
  setSpanish: () => void;
};
