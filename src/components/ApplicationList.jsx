import React, { useState } from 'react';
import SearchBar from './SearchBar';

export default function ApplicationList({ applications, setApplications, search, setSearch }) {
  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState({ title: '', company: '', status: '', notes: '' });

  async function handleRemove(id) {
    try {
      const res = await fetch(`http://localhost:3000/applications/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setApplications((prev) => prev.filter((app) => app.id !== data.id));
    } catch (error) {
      console.error(error);
    }
  }

  async function handleUpdate(id) {
    try {
      const res = await fetch(`http://localhost:3000/applications/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editData),
      });
      const updatedApp = await res.json();
      setApplications((prev) =>
        prev.map((app) => (app.id === id ? updatedApp : app))
      );
      setEditId(null);
    } catch (error) {
      console.error(error);
    }
  }

  const filteredApps = applications.filter((app) =>
    (app.title?.toLowerCase().includes(search.toLowerCase()) || 
     app.company?.toLowerCase().includes(search.toLowerCase()) ||
     app.status?.toLowerCase().includes(search.toLowerCase()))
  );
  
  

  const handleEditClick = (app) => {
    setEditId(app.id);
    setEditData({ title: app.title, company: app.company, status: app.status, notes: app.notes });
  };

  return (
    <div className="row mt-4">
      <SearchBar search={search} setSearch={setSearch} />
      {filteredApps.map((app) => (
        <div key={app.id} className="col-md-4 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              {editId === app.id ? (
                <>
                  <input
                    type="text"
                    className="form-control form-control-sm mb-2"
                    value={editData.title}
                    onChange={(e) => setEditData({ ...editData, title: e.target.value })}
                  />
                  <input
                    type="text"
                    className="form-control form-control-sm mb-2"
                    value={editData.company}
                    onChange={(e) => setEditData({ ...editData, company: e.target.value })}
                  />
                  <select
                    className="form-select form-select-sm mb-2"
                    value={editData.status}
                    onChange={(e) => setEditData({ ...editData, status: e.target.value })}
                  >
                    <option>Applied</option>
                    <option>Interview</option>
                    <option>Offer</option>
                    <option>Rejected</option>
                  </select>
                  <textarea
                    className="form-control form-control-sm mb-2"
                    value={editData.notes}
                    onChange={(e) => setEditData({ ...editData, notes: e.target.value })}
                  />
                  <div className="d-flex justify-content-between">
                    <button className="btn btn-sm btn-success" onClick={() => handleUpdate(app.id)}>Save</button>
                    <button className="btn btn-sm btn-secondary" onClick={() => setEditId(null)}>Cancel</button>
                  </div>
                </>
              ) : (
                <>
                  <h5 className="card-title">{app.title}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{app.company}</h6>
                  <p className="card-text">
                    <strong>Status:</strong> {app.status}
                    <br />
                    {app.notes && (
                      <>
                        <strong>Notes:</strong> {app.notes}
                      </>
                    )}
                  </p>
                  <button className="btn btn-sm btn-outline-primary me-2" onClick={() => handleEditClick(app)}>
                    Edit
                  </button>
                  <button className="btn btn-sm btn-outline-danger" onClick={() => handleRemove(app.id)}>
                    Delete
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
