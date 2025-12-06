import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Board from "./components/Board/Board";
import SchoolSynergyPanel from "./components/Board/SchoolSynergyPanel";
import SpecialtyPanel from "./components/Board/SpecialtyPanel";
import RoleSynergyPanel from "./components/Board/RoleSynergyPanel";
import SynergyPanel from "./components/Board/SynergyPanel";
import MemoryPage from "./pages/MemoryPage";
import ResourcesPage from "./pages/ResourcesPage";
import AdminPage from "./pages/AdminPage";
import PlayersPage from "./pages/PlayersPage";
import BondsPage from "./pages/BondsPage";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <div id="layout">
            <aside id="left-sidebar" className="sidebar">
              <RoleSynergyPanel />
              <div>
                <h2>Note</h2>
                <p>Welcome to the optimized team builder, currently working on adding JP char and all the other stuff that was there in the old version.</p>
                <p>Mobile adaptation will come in the future week</p>
              </div>
            </aside>
            <main id="center-column">
              <Board />
              <SynergyPanel />
            </main>
            <aside id="right-sidebar" className="sidebar">
              <SchoolSynergyPanel />
              <SpecialtyPanel />
            </aside>
          </div>
        } />
        <Route path="/memory" element={<MemoryPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/players" element={<PlayersPage />} />
        <Route path="/bonds" element={<BondsPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
      <Footer />
    </div>

  );
}

export default App;

