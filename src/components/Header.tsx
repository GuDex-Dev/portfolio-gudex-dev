import DarkMode from "./DarkMode";
import styles from "./Header.module.css";

const navItems = [
  {
    title: "Sobre mí",
    href: "#sobre-mi",
    label: "sobre-mi",
  },
  {
    title: "Proyectos",
    href: "#proyectos",
    label: "proyectos",
  },
  {
    title: "Habilidades",
    href: "#habilidades",
    label: "habilidades",
  },
  {
    title: "Contacto",
    href: "#contacto",
    label: "contacto",
  },
];

function Header() {
  return (
    <nav className={styles.navMenu}>
      {navItems.map((item) => (
        <a className={styles.navItem} href={item.href} key={item.label}>
          {item.title}
        </a>
      ))}
      <DarkMode style={styles.darkMode} />
    </nav>
  );
}

export default Header;
