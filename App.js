import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./LoginPage";
import LoginPageAdmin from "./LoginPageAdmin";
import Vote from "./Vote";
import AdminHome from "./adminHome";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/admin-login" element={<LoginPageAdmin />} />
        <Route path="/vote" element={<Vote />} />
        <Route path="/admin" element={<AdminHome />} />
      </Routes>
    </Router>
  );
};

export default App;
