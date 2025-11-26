import Navbar from "./components/Navbar";
import Board from "./components/Board/Board";
import SchoolSynergyPanel from "./components/Board/SchoolSynergyPanel";

export default function App() {
  return (
    <div className="app-root">
      <Navbar />

      <header className="app-header">
        <h1>Haikyu Fly High Team Builder</h1>
        <p id="hint">Welcome to the optimized team builder, currently working on adding JP char and all the other stuff that was there in the old version.</p>
        <p>Mobile adaptation will come in the future week</p>
      </header>

      <main id="layout">
        <section id="main">
          <Board />
        </section>

        <aside id="school-panel" aria-label="School synergies">
          <h2>School Synergies</h2>
          <SchoolSynergyPanel />
        </aside>

      </main>
    </div>
  );
}
