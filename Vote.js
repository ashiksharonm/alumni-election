import React, { useState } from "react";
import "./Vote.css";
import LICETLogo from "./licet-logo.png";
import dhoniImage from "./dhoni.jpg";
import kohliImage from "./kohli.png";

const Vote = () => {
  const [nominees, setNominees] = useState([
    {
      id: 1,
      name: "John Doe",
      batch: "Class of 20XX",
      position: "President",
      photo: dhoniImage,
      voted: false,
    },
    {
      id: 2,
      name: "Jane Smith",
      batch: "Class of 20XX",
      position: "Vice President",
      photo: kohliImage,
      voted: false,
    },
    {
      id: 3,
      name: "James",
      batch: "Class of 20XX",
      position: "President",
      photo: kohliImage,
      voted: false,
    },
    {
      id: 4,
      name: "Jones",
      batch: "Class of 20XX",
      position: "Executive",
      photo: kohliImage,
      voted: false,
    },
    {
      id: 5,
      name: "Raina",
      batch: "Class of 20XX",
      position: "Executive",
      photo: kohliImage,
      voted: false,
    },
    {
      id: 6,
      name: "Farukh",
      batch: "Class of 20XX",
      position: "Executive",
      photo: kohliImage,
      voted: false,
    },
    {
      id: 7,
      name: "Sharon",
      batch: "Class of 20XX",
      position: "Executive",
      photo: kohliImage,
      voted: false,
    },
    {
      id: 8,
      name: "Rasesh",
      batch: "Class of 20XX",
      position: "Executive",
      photo: kohliImage,
      voted: false,
    },
    {
      id: 9,
      name: "Ramesh",
      batch: "Class of 20XX",
      position: "Executive",
      photo: kohliImage,
      voted: false,
    },
    {
      id: 10,
      name: "Rahul",
      batch: "Class of 20XX",
      position: "Executive",
      photo: kohliImage,
      voted: false,
    },
    {
      id: 11,
      name: "Danush",
      batch: "Class of 20XX",
      position: "Treasurer",
      photo: kohliImage,
      voted: false,
    },
    {
      id: 12,
      name: "Senthil",
      batch: "Class of 20XX",
      position: "Bearer",
      photo: kohliImage,
      voted: false,
    },
    {
      id: 13,
      name: "Faisal",
      batch: "Class of 20XX",
      position: "Executive",
      photo: kohliImage,
      voted: false,
    },
    {
      id: 14,
      name: "Gautam",
      batch: "Class of 20XX",
      position: "Executive",
      photo: kohliImage,
      voted: false,
    },
    {
      id: 15,
      name: "Harish",
      batch: "Class of 20XX",
      position: "Executive",
      photo: kohliImage,
      voted: false,
    },
    {
      id: 16,
      name: "Chozhan",
      batch: "Class of 20XX",
      position: "Executive",
      photo: kohliImage,
      voted: false,
    },
    {
      id: 17,
      name: "Patrick",
      batch: "Class of 20XX",
      position: "Executive",
      photo: kohliImage,
      voted: false,
    },
    // Rest of the nominees...
  ]);

  const [selectedNominees, setSelectedNominees] = useState({});
  const [hasVoted, setHasVoted] = useState(false);

  const handleVote = (id, position) => {
    if (
      window.confirm(
        `Are you sure you want to vote for ${
          nominees.find((nominee) => nominee.id === id).name
        } as ${nominees.find((nominee) => nominee.id === id).position}?`
      )
    ) {
      setSelectedNominees((prevSelectedNominees) => ({
        ...prevSelectedNominees,
        [position]: [...(prevSelectedNominees[position] || []), id],
      }));

      const updatedNominees = nominees.map((nominee) => {
        if (nominee.id === id) {
          return { ...nominee, voted: true };
        }
        return nominee;
      });
      setNominees(updatedNominees);

      // Check if user has voted for all elections
      const allVoted = nominees.every(
        (nominee) => nominee.voted || nominee.position === position
      );
      setHasVoted(allVoted);
    }
  };

  const handleLogout = () => {
    if (hasVoted) {
      // Implement your logout logic here
      // For example, redirect the user to the logout page or clear the session/local storage
      // and then navigate them to the login page.
      console.log("Logout");
    } else {
      // Display a message to the user indicating they cannot log out until they have voted for all elections
      alert("You must vote for all elections before logging out.");
    }
  };

  return (
    <div className="vote-container">
      <div className="header">
        <div className="header-left">
          <img src={LICETLogo} alt="LICET Logo" className="logo" />
        </div>
        <div className="header-center">
          <h1 className="election-title">LICET ALUMNI COUNCIL ELECTION</h1>
        </div>
        <div className="header-right">
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>

      {/* President Section */}
      <div className="election-section">
        <h2>President</h2>
        <div className="nominee-list">
          {nominees
            .filter((nominee) => nominee.position === "President")
            .map((nominee) => (
              <div
                className={`nominee-card ${nominee.voted ? "visible" : ""}`}
                key={nominee.id}
              >
                <div className="nominee-image">
                  <img src={nominee.photo} alt={nominee.name} />
                </div>
                <div className="nominee-details">
                  <h3>{nominee.name}</h3>
                  <p>{nominee.batch}</p>
                  <br />
                </div>
                {!nominee.voted ? (
                  <button
                    onClick={() => handleVote(nominee.id, nominee.position)}
                    disabled={!!selectedNominees[nominee.position]}
                  >
                    Vote
                  </button>
                ) : (
                  <p>Voted</p>
                )}
              </div>
            ))}
        </div>
      </div>

      {/* Vice President Section */}
      <div className="election-section">
        <h2>Vice President</h2>
        <div className="nominee-list">
          {nominees
            .filter((nominee) => nominee.position === "Vice President")
            .map((nominee) => (
              <div
                className={`nominee-card ${nominee.voted ? "visible" : ""}`}
                key={nominee.id}
              >
                <div className="nominee-image">
                  <img src={nominee.photo} alt={nominee.name} />
                </div>
                <div className="nominee-details">
                  <h3>{nominee.name}</h3>
                  <p>{nominee.batch}</p>
                  <br />
                </div>
                {!nominee.voted ? (
                  <button
                    onClick={() => handleVote(nominee.id, nominee.position)}
                    disabled={!!selectedNominees[nominee.position]}
                  >
                    Vote
                  </button>
                ) : (
                  <p>Voted</p>
                )}
              </div>
            ))}
        </div>
      </div>

      {/* Treasurer Section */}
      <div className="election-section">
        <h2>Treasurer</h2>
        <div className="nominee-list">
          {nominees
            .filter((nominee) => nominee.position === "Treasurer")
            .map((nominee) => (
              <div
                className={`nominee-card ${nominee.voted ? "visible" : ""}`}
                key={nominee.id}
              >
                <div className="nominee-image">
                  <img src={nominee.photo} alt={nominee.name} />
                </div>
                <div className="nominee-details">
                  <h3>{nominee.name}</h3>
                  <p>{nominee.batch}</p>
                  <br />
                </div>
                {!nominee.voted ? (
                  <button
                    onClick={() => handleVote(nominee.id, nominee.position)}
                    disabled={!!selectedNominees[nominee.position]}
                  >
                    Vote
                  </button>
                ) : (
                  <p>Voted</p>
                )}
              </div>
            ))}
        </div>
      </div>

      {/* Bearer Section */}
      <div className="election-section">
        <h2>Bearer</h2>
        <div className="nominee-list">
          {nominees
            .filter((nominee) => nominee.position === "Bearer")
            .map((nominee) => (
              <div
                className={`nominee-card ${nominee.voted ? "visible" : ""}`}
                key={nominee.id}
              >
                <div className="nominee-image">
                  <img src={nominee.photo} alt={nominee.name} />
                </div>
                <div className="nominee-details">
                  <h3>{nominee.name}</h3>
                  <p>{nominee.batch}</p>
                  <br />
                </div>
                {!nominee.voted ? (
                  <button
                    onClick={() => handleVote(nominee.id, nominee.position)}
                    disabled={!!selectedNominees[nominee.position]}
                  >
                    Vote
                  </button>
                ) : (
                  <p>Voted</p>
                )}
              </div>
            ))}
        </div>
      </div>

      {/* Executives Section */}
      <div className="election-section">
        <h2>Executive</h2>
        <div className="nominee-list">
          {nominees
            .filter((nominee) => nominee.position === "Executive")
            .map((nominee) => (
              <div
                className={`nominee-card ${nominee.voted ? "visible" : ""}`}
                key={nominee.id}
              >
                <div className="nominee-image">
                  <img src={nominee.photo} alt={nominee.name} />
                </div>
                <div className="nominee-details">
                  <h3>{nominee.name}</h3>
                  <p>{nominee.batch}</p>
                  <br />
                </div>
                {!nominee.voted ? (
                  <button
                    onClick={() => handleVote(nominee.id, nominee.position)}
                    disabled={
                      (selectedNominees[nominee.position] || []).length >= 10
                    }
                  >
                    Vote
                  </button>
                ) : (
                  <p>Voted</p>
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Vote;
