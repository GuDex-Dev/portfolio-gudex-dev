import { createContext, useState, useEffect, useContext } from "react";
import { AppContextType, Lang, LANGS } from "../types";

const AppContext = createContext({} as AppContextType);

export const useAppContext = () => {
  return useContext(AppContext);
};

interface Props {
  children: JSX.Element | JSX.Element[];
}

export function AppContextProvider({ children }: Props) {
  const [lang, setLang] = useState<Lang>(localStorage.getItem("lang") as Lang);

  const setSpanish = () => {
    localStorage.setItem("lang", LANGS.es);
    setLang(LANGS.es);
  };

  const setEnglish = () => {
    localStorage.setItem("lang", LANGS.en);
    setLang(LANGS.en);
  };

  useEffect(() => {
    switch (lang) {
      case LANGS.es:
        setSpanish();
        break;
      case LANGS.en:
        setEnglish();
        break;
    }
  }, [lang]);

  useEffect(() => {
    const l = localStorage.getItem("lang") as Lang;
    if (l) setLang(l);
  }, []);

  return (
    <AppContext.Provider value={{ setEnglish, setSpanish, lang }}>
      {children}
    </AppContext.Provider>
  );
}
