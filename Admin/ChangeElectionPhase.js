import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import LICETLogo from "./licet-logo.png";
import "./ChangeElectionPhase.css";

const ChangeElectionPhase = () => {
  const [electionPhase, setElectionPhase] = useState("voting");
  const [electionStatus, setElectionStatus] = useState({
    president: false,
    vicePresident: false,
    secretary: false,
    treasurer: false,
    executives: false,
  });
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/admin-login");
  };

  const handleLogoClick = () => {
    navigate("/admin");
  };

  const handlePhaseChange = (event, election) => {
    const newPhase = event.target.value;
    setElectionStatus((prevStatus) => ({
      ...prevStatus,
      [election]: newPhase,
    }));
  };

  return (
    <div className="admin-container">
      <div className="vote-container">
        <header className="header">
          <div className="header-left">
            <Link to="/admin">
              <img src={LICETLogo} alt="LICET Logo" className="logo" />
            </Link>
          </div>
          <div className="header-center">
            <h1 className="election-title">LICET ALUMNI COUNCIL ELECTION</h1>
          </div>
          <div className="header-right">
            <nav className="nav-menu">
              <ul>
                <Link to="/admin/candidate-upload" className="menu-link">
                  Candidates&nbsp;&nbsp;&nbsp;
                </Link>

                <Link to="/admin/change-election-phase" className="menu-link">
                  Elections&nbsp;&nbsp;&nbsp;
                </Link>

                <Link to="/admin/results" className="menu-link">
                  Results&nbsp;&nbsp;&nbsp;
                </Link>
              </ul>
            </nav>
            <button className="logout-button" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </header>

        <div className="election-status-container">
          <div className="election-status-card">
            <h2>President</h2>
            <select
              value={electionStatus.president}
              onChange={(event) => handlePhaseChange(event, "president")}
            >
              <option value="voting">Voting</option>
              <option value="results">Results</option>
              <option value="inactive">Inactive</option>
            </select>
            <br />
          </div>
          <div className="election-status-card">
            <h2>Vice President</h2>
            <select
              value={electionStatus.vicePresident}
              onChange={(event) => handlePhaseChange(event, "vicePresident")}
            >
              <option value="voting">Voting</option>
              <option value="results">Results</option>
              <option value="inactive">Inactive</option>
            </select>
            <br />
          </div>
          <div className="election-status-card">
            <h2>Secretary</h2>
            <select
              value={electionStatus.secretary}
              onChange={(event) => handlePhaseChange(event, "secretary")}
            >
              <option value="voting">Voting</option>
              <option value="results">Results</option>
              <option value="inactive">Inactive</option>
            </select>
            <br />
          </div>
          <div className="election-status-card">
            <h2>Treasurer</h2>
            <select
              value={electionStatus.treasurer}
              onChange={(event) => handlePhaseChange(event, "treasurer")}
            >
              <option value="voting">Voting</option>
              <option value="results">Results</option>
              <option value="inactive">Inactive</option>
            </select>
            <br />
          </div>
          <div className="election-status-card">
            <h2>Executives</h2>
            <select
              value={electionStatus.executives}
              onChange={(event) => handlePhaseChange(event, "executives")}
            >
              <option value="voting">Voting</option>
              <option value="results">Results</option>
              <option value="inactive">Inactive</option>
            </select>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangeElectionPhase;
