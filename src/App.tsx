import Navbar from "./components/Navbar";
import Board from "./components/Board/Board";
import SchoolSynergyPanel from "./components/Board/SchoolSynergyPanel";
import PowerSynergyPanel from "./components/Board/PowerSynergyPanel";
import RoleSynergyPanel from "./components/Board/RoleSynergyPanel.tsx";
import SynergyPanel from "./components/Board/SynergyPanel";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div id="layout">
        {/* --- LEFT COLUMN (New Role Panel) --- */}
        <aside id="left-sidebar" className="sidebar">
          <RoleSynergyPanel />
          <div>
            <h2>Note</h2>
            <p>Welcome to the optimized team builder, currently working on adding JP char and all the other stuff that was there in the old version.</p>
            <p>Mobile adaptation will come in the future week</p>
          </div>
        </aside>
        {/* --- CENTER COLUMN (Board & Bonds) --- */}
        <main id="center-column">
          <Board />
          <SynergyPanel />
        </main>
        {/* --- RIGHT COLUMN (School & Power) --- */}
        <aside id="right-sidebar" className="sidebar">
          <SchoolSynergyPanel />
          <PowerSynergyPanel />
        </aside>
      </div>
    </div>
  );
}

export default App;