import React from "react";
import NavBar from "../components/NavBar";

function ContactPage() {
  return (
    <div className="p-4">
        <NavBar/>
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <form className="space-y-4">
        <input className="w-full p-2 border" type="text" placeholder="Your Name" required />
        <input className="w-full p-2 border" type="email" placeholder="Your Email" required />
        <textarea className="w-full p-2 border" rows="4" placeholder="Your Message" required />
        <button className="bg-blue-500 text-white px-4 py-2 rounded" type="submit">Send</button>
      </form>
    </div>
  );
}

export default ContactPage;
