import React from "react";
import NavBar from "../components/NavBar";

function ProfilePage() {
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <NavBar />
      <div className="bg-white shadow-md rounded-xl p-6 max-w-md mx-auto mt-6">
        <img
          src="https://via.placeholder.com/100"
          alt="Profile"
          className="rounded-full w-24 h-24 mx-auto mb-4"
        />
        <h2 className="text-2xl font-bold text-center mb-4">Your Profile</h2>
        <p><strong>Name:</strong> Jane Doe</p>
        <p><strong>Email:</strong> janedoe@example.com</p>
        <p><strong>Role:</strong> Frontend Developer</p>
        <p><strong>Skills:</strong> React, JavaScript, Tailwind CSS</p>
        <p><strong>Resume:</strong>
          <a
            href="https://example.com/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-800 ml-2"
          >
            View
          </a>
        </p>
        <p className="text-gray-500 mt-4 italic">Profile editing coming soon...</p>
      </div>
    </div>
  );
}

export default ProfilePage;

