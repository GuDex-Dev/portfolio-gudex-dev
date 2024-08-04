import Phone from "./assets/Phone";
import Mail from "./assets/Mail";
import GitHub from "./assets/GitHub";
import styles from "./Contact.module.css";
import Logo from "./assets/Logo_GD_Canva.png";

function Contact() {
  return (
    <>
      <h2 className="subtitle">Contacto</h2>
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
        </ul>
        <div className={styles.logoContainer}>
          <img className={styles.logo} src={Logo} alt="Logo GuDex-Dev" />
        </div>
      </div>
    </>
  );
}

export default Contact;
