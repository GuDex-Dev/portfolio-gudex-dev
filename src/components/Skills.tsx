import styles from "./Skills.module.css";
import { TECHS } from "../data";
import { EXTRASKILLS } from "../data";

function Skills() {
  return (
    <>
      <h2 className="subtitle">Habilidades</h2>

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
              <tech.icon size={45} />
              {tech.name}
            </span>
          ))}
        </article>
        <hr />
        <article className={styles.cardSkill}>
          {EXTRASKILLS.map((skill) => (
            <span
              style={{
                backgroundColor: skill.color,
              }}
              className={styles.skill}
              key={skill.name}
            >
              <skill.icon size={45} />
              {skill.name}
            </span>
          ))}
        </article>
      </div>
    </>
  );
}

export default Skills;
