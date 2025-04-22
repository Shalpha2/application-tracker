import React from "react";
import NavBar from "../components/NavBar";

function ContactPage() {
  return (
    <div className="bg-light min-vh-100 py-5">
      <NavBar />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="card shadow">
              <div className="card-body p-5">
                <h2 className="text-center mb-4 text-primary">Contact Us</h2>
                <form>
                  <div className="mb-3">
                    <label className="form-label">Your Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Your Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="form-label">Your Message</label>
                    <textarea
                      className="form-control"
                      rows="4"
                      placeholder="Type your message here"
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary w-100">
                    Send Message
                  </button>
                </form>

                <div className="text-center mt-4 text-muted">
                  Or email us directly at{" "}
                  <span className="text-decoration-underline text-primary">
                    contact@jobtracker.com
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;

