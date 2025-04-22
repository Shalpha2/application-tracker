import React, { useState } from 'react';

export default function ApplicationForm({ setApplications }) {
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    status: 'Applied',
    notes: ''
  });

  async function handleSubmit(event) {
    event.preventDefault();
  
    try {
      const response = await postApplication(formData);
      const newApp = await response.json(); // Get the newly created application with id
      setApplications((prev) => [...prev, newApp]);
  
      setFormData({
        title: '',
        company: '',
        status: 'Applied',
        notes: ''
      });
    } catch (error) {
      console.error("Error submitting application:", error);
    }
  }
  
  const postApplication = async (application) => {
    try {
      return await fetch("http://localhost:3000/applications", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(application),
      });
    } catch (error) {
      throw new Error(error)
    }
  };

  const handleOnChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="col-3 mx-2">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="jobTitle" className="form-label">
            Job Title
          </label>
          <input
            type="text"
            className="form-control form-control-sm"
            id="jobTitle"
            name="title"
            placeholder="e.g. Software Engineer"
            value={formData.title}
            onChange={handleOnChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="company" className="form-label">
            Company Name
          </label>
          <input
            type="text"
            className="form-control form-control-sm"
            id="company"
            name="company"
            placeholder="e.g. Google"
            value={formData.company}
            onChange={handleOnChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="status" className="form-label">
            Application Status
          </label>
          <select
            className="form-select form-select-sm"
            id="status"
            name="status"
            value={formData.status}
            onChange={handleOnChange}
          >
            <option>Applied</option>
            <option>Interview</option>
            <option>Offer</option>
            <option>Rejected</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="notes" className="form-label">
            Notes
          </label>
          <textarea
            className="form-control form-control-sm"
            id="notes"
            name="notes"
            placeholder="Optional notes..."
            value={formData.notes}
            onChange={handleOnChange}
          />
        </div>

        <div className="d-grid gap-2 col-12 mx-auto">
          <button className="btn btn-dark btn-sm" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
