import styles from "./About.module.css";
import Photo from "./assets/gabriel.jpg";
import GitHub from "./assets/GitHub";
import Download from "./assets/Download";

function About() {
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
            href="https://drive.google.com/file/d/15I03xzJ-XUYF6gNiKRN9fg_5D_ysq4Cc/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <Download /> CV
          </a>
        </div>
        {/* <div className={styles.aboutContact}>
        <a
          href="https://www.linkedin.com/in/gabriel-huertas-4b5b8b1b1/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/gabriel-huertas"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </div>
      <div className={styles.aboutCV}>
        <a
          href="https://drive.google.com/file/d/1P8i0tP0q4QdCwDnB5XQp7z9Vbqj7vUwK/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          Curriculum Vitae
        </a>
      </div> */}
      </article>
      <article className={styles.rightArticle}>
        <h1 className={styles.aboutName}>Gabriel Huertas</h1>
        <h2 className={styles.aboutPosition}>Est. Ingeniería de Sistemas</h2>
        <p>
          Soy un desarrollador web proactivo, resiliente, disciplinado y
          autodidacta. Estoy en el 6to ciclo de Ingeniería de Sistemas en la
          Universidad César Vallejo.
        </p>
        <p>
          Mi objetivo es adquirir experiencia en desarrollo frontend para
          decidir si especializarme en backend, frontend o fullstack.
        </p>
        <p>
          He aprendido y desarrollado proyectos por mi cuenta, complementando
          mis estudios universitarios. Soy una promesa junior, dispuesto a dar
          lo mejor de mí en cualquier situación.
        </p>
      </article>
    </div>
  );
}

export default About;
