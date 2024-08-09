import Phone from "./assets/Phone";
import Mail from "./assets/Mail";
import GitHub from "./assets/GitHub";
import styles from "./Contact.module.css";
import Logo from "./assets/Logo_GD.png";
import LinkedIn from "./assets/LinkedIn";
import { useAppContext } from "../context/AppContext";
import { content } from "../data";

function Contact() {
  const { lang } = useAppContext();
  return (
    <>
      <h2 className="subtitle">{content.header.contact[lang]}</h2>
      <div className={styles.container}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Phone /> +51 960 309 188
          </li>
          <li className={styles.item}>
            <Mail /> gabriel.huertas.3012@gmail.com
          </li>
          <li className={styles.item}>
            <GitHub />
            <a
              className={styles.link}
              href="https://github.com/GuDex-Dev"
              target="_blank"
              rel="noreferrer"
            >
              GuDex-Dev
            </a>
          </li>
          <li className={styles.item}>
            <LinkedIn />
            <a
              className={styles.link}
              href="https://www.linkedin.com/in/gabriel-huertas-fiestas-544325274/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </li>
        </ul>
        <div className={styles.logoContainer}>
          <img className={styles.logo} src={Logo} alt="Logo GuDex-Dev" />
        </div>
      </div>
    </>
  );
}

export default Contact;
