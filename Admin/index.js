import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminHome from "./adminHome";
import CandidateUpload from "./CandidateUpload";
import Vote from "./Vote";
import LoginPage from "./LoginPage";
import LoginPageAdmin from "./LoginPageAdmin";
import ChangeElectionPhase from "./ChangeElectionPhase";
import Results from "./Results";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/admin-login" element={<LoginPageAdmin />} />
      <Route path="/vote" element={<Vote />} />
      <Route path="/admin/*" element={<AdminHome />} />
      <Route path="/admin/candidate-upload" element={<CandidateUpload />} />
      <Route
        path="/admin/change-election-phase"
        element={<ChangeElectionPhase />}
      />
      <Route path="/admin/results" element={<Results />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);
