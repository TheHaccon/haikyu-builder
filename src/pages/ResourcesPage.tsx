import { useState } from "react";
import "./ResourcesPage.css";
import BannerGrid from "../components/Resources/BannerGrid";

export default function ResourcesPage() {
  // --- STATE ---
  const [diamonds, setDiamonds] = useState<number>(0);
  const [tickets, setTickets] = useState<number>(0);
  const [currentPity, setCurrentPity] = useState<number>(0);

  // Options
  const [monthlyPass, setMonthlyPass] = useState(false);
  const [premiumPass, setPremiumPass] = useState(false);

  // --- CONSTANTS ---
  const COST_PER_PULL = 150;
  const PITY_CAP = 140;
  const BASE_F2P_DAILY = 406.67;

  // --- CALCULATIONS ---
  const pullsFromDiamonds = Math.floor(diamonds / COST_PER_PULL);
  const totalPulls = pullsFromDiamonds + tickets;

  // This is the key change: Your "Reach" is Pity + Stash
  const effectiveReach = currentPity + totalPulls;

  const pullsToPity = Math.max(0, PITY_CAP - currentPity);

  // Missing Resources for Current Pity (based on Reach)
  const missingPullsForPity = Math.max(0, PITY_CAP - effectiveReach);
  const missingGemsForPity = missingPullsForPity * COST_PER_PULL;
  const canHitPity = effectiveReach >= PITY_CAP;

  // Calculate Bar Percentage (Cap at 100%)
  const barPercentage = Math.min(100, (effectiveReach / PITY_CAP) * 100);

  // Daily Income
  const dailyIncome = BASE_F2P_DAILY + (monthlyPass ? 90 : 0) + (premiumPass ? 100 : 0);

  // Reset Handler
  const handleReset = () => {
    setDiamonds(0);
    setTickets(0);
    setCurrentPity(0);
    setMonthlyPass(false);
    setPremiumPass(false);
  };

  return (
    <div className="resources-page">
      <header className="res-header">
        <h1>Resource Calculator</h1>
      </header>
      <div className="res-grid">
        <section className="res-card input-section">
          <h2>Your Stash</h2>
          <div className="input-group">
            <label>
              <span className="label-text">Diamonds</span>
              <input
                type="number"
                min="0"
                value={diamonds || ""}
                onChange={(e) => setDiamonds(Number(e.target.value))}
                placeholder="0"
              />
            </label>
            <span className="sub-text">= {pullsFromDiamonds} Pulls</span>
          </div>
          <div className="input-group">
            <label>
              <span className="label-text">Recruit Tickets</span>
              <input
                type="number"
                min="0"
                value={tickets || ""}
                onChange={(e) => setTickets(Number(e.target.value))}
                placeholder="0"
              />
            </label>
            <span className="sub-text">= {tickets} Pulls</span>
          </div>
          <div className="input-group">
            <label>
              <span className="label-text">Current Pity Count</span>
              <input
                type="number"
                min="0"
                max={PITY_CAP}
                value={currentPity || ""}
                onChange={(e) => setCurrentPity(Number(e.target.value))}
                placeholder="0"
              />
            </label>
            <span className="sub-text">{missingPullsForPity} away from UR</span>
          </div>
        </section>
        <section className="res-card result-section">
          <h2>Current Pity</h2>
          <div className="big-stat">
            <span className="stat-label">Total Available Pulls</span>
            <span className="stat-value">{totalPulls}</span>
          </div>
          <div className="pity-status">
            <div className="pity-bar-bg">
              <div
                className={`pity-bar-fill ${canHitPity ? "safe-fill" : ""}`}
                style={{ width: `${barPercentage}%` }}
              ></div>
            </div>
            <div className="pity-text">
              <span>Reach: <strong>{effectiveReach}</strong></span>
              <span>Goal: {PITY_CAP}</span>
            </div>
            <div className={`pity-verdict ${canHitPity ? "safe" : "danger"}`}>
              {canHitPity ? (
                <span>You can guarantee the next UR!</span>
              ) : (
                <>
                  Missing <strong>{missingPullsForPity}</strong> pulls <br />
                  <span className="gem-cost">({missingGemsForPity.toLocaleString()} Gems)</span>
                </>
              )}
            </div>
          </div>
        </section>
      </div>
      <section className="banner-planning-section">
        <h2 style={{ marginBottom: '16px', color: 'white' }}>Banner Planning</h2>
        <BannerGrid />
      </section>
    </div>
  );
}