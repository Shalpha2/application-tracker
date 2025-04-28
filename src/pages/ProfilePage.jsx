import React from "react";
import NavBar from "../components/NavBar";

function ProfilePage() {
  return (
    <div style={{ backgroundColor: "#c7def57d", minHeight: "100vh" }} className="py-4">
      <NavBar />
      <div className="container">
        <div className="card shadow-lg mx-auto mt-5 p-4" style={{ maxWidth: "500px" }}>
          <div className="text-center">
            <img
              src="https://via.placeholder.com/100"
              alt="Profile"
              className="rounded-circle mb-3"
              width="100"
              height="100"
            />
            <h2 className="h4 fw-bold mb-3 text-primary">
              <i className="bi bi-person-circle me-2"></i>Your Profile
            </h2>
          </div>
          <ul className="list-group list-group-flush mb-3">
            <li className="list-group-item"><strong>Name:</strong> Shadrack kiprono</li>
            <li className="list-group-item"><strong>Email:</strong> kipronoshadrack@gmail.com</li>
            <li className="list-group-item"><strong>Role:</strong> Frontend Developer</li>
            <li className="list-group-item">
              <strong>Skills:</strong> React, JavaScript, Tailwind CSS
            </li>
            <li className="list-group-item">
              <strong>Resume:</strong>
              <a
                href="https://example.com/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="ms-2 text-decoration-underline text-primary"
              >
                View
              </a>
            </li>
          </ul>
          <p className="text-muted text-center fst-italic">Profile editing coming soon...</p>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;

