import React, { useState } from "react";
import LICETLogo from "./licet-logo.png";
import "./LoginPage.css";

const LoginPage = () => {
  const [regno, setRegno] = useState("");
  const [dob, setDob] = useState("");
  const [regnoError, setRegnoError] = useState("");
  const [dobError, setDobError] = useState("");

  const handleRegnoChange = (event) => {
    const { value } = event.target;
    const numericValue = value.replace(/\D/g, "").slice(0, 12); // Filter out non-numeric characters and truncate to 12 characters

    setRegno(numericValue);
  };

  const handleDobChange = (event) => {
    const { value } = event.target;
    let formattedDob = value;

    if (value.length === 2 || value.length === 5) {
      formattedDob += "-";
    }

    setDob(formattedDob);
  };

  const validateForm = (event) => {
    event.preventDefault();

    const regnoRegex = /^[a-zA-Z0-9]+$/;
    const dobRegex = /^\d{2}-\d{2}-\d{4}$/;

    if (!regnoRegex.test(regno)) {
      setRegnoError(
        "Registration number should contain only letters and numbers."
      );
      return;
    } else {
      setRegnoError("");
    }

    if (!dobRegex.test(dob)) {
      setDobError("Invalid date of birth format. Please use DD-MM-YYYY.");
      return;
    } else {
      setDobError("");
    }

    // Send login request to the server
    fetch("http://localhost:5000/login", {
      // Update the URL to match your server's URL
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ regno, dob }),
    })
      .then((response) => {
        if (response.ok) {
          // Login successful
          alert("Login successful"); // Display popup message
          window.location.href = "vote.html"; // Redirect to the vote page
        } else if (response.status === 401) {
          // Invalid credentials
          setRegnoError("Invalid credentials");
          setDobError("Invalid credentials");
        } else {
          // Error occurred
          throw new Error("Error occurred");
        }
      })
      .catch((error) => {
        console.error(error);
        // Handle error
        // Display an error message or perform any necessary actions
      });
  };

  return (
    <div className="container">
      <img src={LICETLogo} alt="LICET Logo" className="logo" />
      <h1 className="election-title">LICET ALUMNI COUNCIL ELECTION</h1>
      <div className="login-card">
        <form onSubmit={validateForm}>
          <label htmlFor="regno">Registration Number:</label>
          <input
            type="text"
            id="regno"
            name="regno"
            value={regno}
            onChange={handleRegnoChange}
            placeholder="Eg. 311XXXXXXXXX"
            required
          />
          <br />
          <span className="error" id="regnoError">
            {regnoError}
          </span>

          <label htmlFor="dob">Date of Birth:</label>
          <input
            type="text"
            id="dob"
            name="dob"
            value={dob}
            onChange={handleDobChange}
            placeholder="DD-MM-YYYY"
            required
          />
          <br />
          <span className="error" id="dobError">
            {dobError}
          </span>

          <br />
          <input type="submit" value="Login" />
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
