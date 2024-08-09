import styles from "./About.module.css";
import Photo from "./assets/gabriel.jpg";
import GitHub from "./assets/GitHub";
import Download from "./assets/Download";
import LinkedIn from "./assets/LinkedIn";
import { useAppContext } from "../context/AppContext";
import { content } from "../data";

function About() {
  const { lang } = useAppContext();

  return (
    <div className={styles.container}>
      <article className={styles.leftArticle}>
        <div className={styles.divPhoto}>
          <img className={styles.imgPhoto} src={Photo} alt="Gabriel Huertas" />
        </div>
        <div className={styles.aboutContact}>
          <a
            style={{
              backgroundColor: "#7468f8",
            }}
            className={styles.contactItem}
            href="https://github.com/GuDex-Dev"
            target="_blank"
            rel="noreferrer"
          >
            <GitHub />
          </a>
          <a
            style={{
              backgroundColor: "#149eca",
            }}
            className={styles.contactItem}
            href="https://drive.google.com/drive/folders/1wW48SotxSTC1u_8Q3JmA2F2rCWRrL07W?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <Download /> CV
          </a>
          <a
            style={{
              backgroundColor: "#0a66c2",
            }}
            className={styles.contactItem}
            href="https://www.linkedin.com/in/gabriel-huertas-fiestas-544325274/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedIn />
          </a>
        </div>
      </article>
      <article className={styles.rightArticle}>
        <h1 className={styles.aboutName}>{content.about.name[lang]}</h1>
        <h2 className={styles.aboutPosition}>{content.about.position[lang]}</h2>
        {content.about.text[lang].map((item) => (
          <p>{item}</p>
        ))}
      </article>
    </div>
  );
}

export default About;
