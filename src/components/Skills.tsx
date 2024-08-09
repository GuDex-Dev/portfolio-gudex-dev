import styles from "./Skills.module.css";
import { TECHS } from "../data";
import { LANGUAGES } from "../data";
import { content } from "../data";
import { useAppContext } from "../context/AppContext";

function Skills() {
  const { lang } = useAppContext();
  return (
    <>
      <h2 className="subtitle">{content.header.skills[lang]}</h2>

      <div className={styles.container}>
        <article className={styles.cardSkill}>
          {TECHS.map((tech) => (
            <span
              style={{
                backgroundColor: tech.color,
              }}
              className={styles.skill}
              key={tech.name}
            >
              <tech.icon size="3rem" />
              {tech.name}
            </span>
          ))}
        </article>
        <hr />
        <article className={styles.cardSkill}>
          {LANGUAGES.map((skill) => (
            <span
              style={{
                backgroundColor: skill.color,
              }}
              className={styles.skill}
              key={skill.name}
            >
              <skill.icon size="3rem" />
              {skill.name}
            </span>
          ))}
        </article>
      </div>
    </>
  );
}

export default Skills;
