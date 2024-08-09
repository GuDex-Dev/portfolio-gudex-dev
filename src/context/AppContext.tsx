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
  const [lang, setLang] = useState<Lang>(() => {
    const storedLang = localStorage.getItem("lang");
    return storedLang ? (storedLang as Lang) : LANGS.en;
  });

  const setSpanish = () => {
    localStorage.setItem("lang", LANGS.es);
    setLang(LANGS.es);
  };

  const setEnglish = () => {
    localStorage.setItem("lang", LANGS.en);
    setLang(LANGS.en);
  };

  useEffect(() => {
    // Update the language in localStorage whenever lang changes
    if (lang === LANGS.es) {
      setSpanish();
    } else if (lang === LANGS.en) {
      setEnglish();
    }
  }, [lang]);

  return (
    <AppContext.Provider value={{ setEnglish, setSpanish, lang }}>
      {children}
    </AppContext.Provider>
  );
}
