import Navbar from "./components/Navbar";
import Board from "./components/Board/Board";

export default function App() {
  return (
    <div className="app-root">
      <Navbar />

      <header className="app-header">
        <h1>Haikyu Fly High Team Builder</h1>
        <p id="hint">Tip: click a role to open the gallery.</p>
      </header>

      <main id="layout">
        <section id="main">
          <Board />
        </section>

        <aside id="school-panel" aria-label="School synergies">
          <h2>School Synergies</h2>
          <ul>
            <li>(no active school)</li>
          </ul>
        </aside>
      </main>
    </div>
  );
}
