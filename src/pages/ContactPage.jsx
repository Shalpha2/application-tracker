import React from "react";
import NavBar from "../components/NavBar";

function ContactPage() {
  return (
    <div style={{ backgroundColor: "#c7def57d", minHeight: "100vh" }}>
      <NavBar />
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="card border-0 shadow-lg rounded-4">
              <div className="card-body p-5">
                <h2 className="text-center mb-4 text-primary fw-bold">
                  Get in Touch
                </h2>
                <form>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Your Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Your Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="form-label fw-semibold">Your Message</label>
                    <textarea
                      className="form-control"
                      rows="4"
                      placeholder="Type your message here..."
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary w-100 fw-bold">
                    Send Message
                  </button>
                </form>

                <div className="text-center mt-4 text-muted">
                  Or email us at{" "}
                  <a href="mailto:contact@jobtracker.com" className="text-decoration-none text-primary fw-semibold">
                    contact@jobtracker.com
                  </a>
                </div>
              </div>
            </div>
            <p className="text-center text-muted mt-4">
              We'll get back to you within 24 hours.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;

