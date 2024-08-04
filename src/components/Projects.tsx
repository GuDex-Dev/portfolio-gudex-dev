import Code from "./assets/Code";
import styles from "./Projects.module.css";

import GitHub from "./assets/GitHub";
import Link from "./assets/Link";
import { TECHS, PROJECTS } from "../data";

function Projects() {
  return (
    <>
      <h2 className="subtitle">
        <Code />
        Proyectos
      </h2>

      {PROJECTS.map((project) => (
        <article className={styles.projectArticle} key={project.title}>
          <div className={styles.projectInfo}>
            <div>
              <div className={styles.projectHeader}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <div className={styles.projectLinks}>
                  {project.url && (
                    <a
                      className={styles.projectLink}
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Link />
                    </a>
                  )}
                  {project.github && (
                    <a
                      className={styles.projectLink}
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <GitHub />
                    </a>
                  )}
                </div>
              </div>
              <p>{project.description}</p>
            </div>

            <div>
              <div className={styles.projectTechs}>
                {project.techs.map((tech) => {
                  const techComplete = TECHS.find((t) => t.name === tech) ?? {
                    icon: Code,
                  };

                  return (
                    <span
                      style={{
                        backgroundColor: TECHS.find((t) => t.name === tech)
                          ?.color,
                      }}
                      className={styles.projectTech}
                      key={tech}
                    >
                      <techComplete.icon />
                      {tech}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>

          <img
            className={styles.projectImage}
            src={project.image}
            alt={project.title}
          />
        </article>
      ))}
    </>
  );
}

export default Projects;
