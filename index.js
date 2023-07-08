import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminHome from "./adminHome";
import CandidateUpload from "./CandidateUpload";
import Vote from "./Vote";
import LoginPage from "./LoginPage";
import LoginPageAdmin from "./LoginPageAdmin";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/admin-login" element={<LoginPageAdmin />} />
      <Route path="/vote" element={<Vote />} />
      <Route path="/admin/*" element={<AdminHome />} />
      <Route path="/admin/candidate-upload" element={<CandidateUpload />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);
