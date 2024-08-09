import Spain from "./assets/skills/Spain";
import UnitedStates from "./assets/skills/UnitedStates";
import DarkMode from "./DarkMode";
import styles from "./Header.module.css";
import { useAppContext } from "../context/AppContext";
import { content } from "../data";

function Header() {
  const { lang, setSpanish, setEnglish } = useAppContext();

  const navItems = [
    {
      title: content.header.about,
      href: "#about",
      label: "about",
    },
    {
      title: content.header.projects,
      href: "#projects",
      label: "projects",
    },
    {
      title: content.header.skills,
      href: "#skills",
      label: "skills",
    },
    {
      title: content.header.contact,
      href: "#contact",
      label: "contact",
    },
  ];

  return (
    <nav className={styles.navMenu}>
      {navItems.map((item) => (
        <a className={styles.navItem} href={item.href} key={item.label}>
          {item.title[lang]}
        </a>
      ))}
      <DarkMode style={styles.darkMode} />
      <span className={styles.langContainer}>
        <Spain size="2rem" onClick={setSpanish} />
        <UnitedStates size="2rem" onClick={setEnglish} />
      </span>
    </nav>
  );
}

export default Header;
