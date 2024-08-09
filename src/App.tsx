import { About, Header, Projects, Skills, Contact } from "./components";
import styles from "./App.module.css";

function App() {
  // TODO: Add responsive design

  return (
    <>
      <Header />
      <main>
        <section id="about" className="section">
          <About />
        </section>
        <section id="projects" className="section">
          <Projects />
        </section>
        <section id="skills" className="section">
          <Skills />
        </section>
        <section id="contact" className="section">
          <Contact />
        </section>
        <footer>
          <span className={styles.footer}>© 2024 GuDex-Dev.</span>
        </footer>
      </main>
    </>
  );
}

export default App;
