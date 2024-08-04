import { About, Header, Projects, Skills, Contact } from "./components";
import styles from "./App.module.css";

function App() {
  // TODO: Add responsive design
  return (
    <>
      <Header />
      <main>
        <section id="sobre-mi" className="section">
          <About />
        </section>
        <section id="proyectos" className="section">
          <Projects />
        </section>
        <section id="habilidades" className="section">
          <Skills />
        </section>
        <section id="contacto" className="section">
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
