import React from "react";
import NavBar from "../components/NavBar";

function ProfilePage() {
  return (
    <div className="p-4">
        <NavBar/>
      <h2 className="text-2xl font-bold mb-4">Your Profile</h2>
      <p><strong>Name:</strong> Jane Doe</p>
      <p><strong>Email:</strong> janedoe@example.com</p>
      <p><strong>Resume:</strong> <a href="#">Link</a></p>
      {/*  Add profile editing feature later */}
    </div>
  );
}

export default ProfilePage;
