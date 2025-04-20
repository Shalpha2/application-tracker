import React from 'react';

export default function ApplicationList({ applications,setApplications }) {
    async function handleRemove(id) {
        try{
          const removedApplications = await fetch(
            `http://localhost:3000/applications/${id}`,
            {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
              },
            }
          );
          const data = await removedApplications.json();
          setApplications((prev) =>
            prev.filter((application) => application.id !== data.id)
          );
        }catch(error){
          throw new Error(error)
        }
      }
    
    
  return (
    <div className="row mt-4">
      {applications.length === 0 ? (
        <p className="text-muted">No applications added yet.</p>
      ) : (
        applications.map((app) => (
          <div key={app.id} className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{app.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{app.company}</h6>
                <p className="card-text">
                  <strong>Status:</strong> {app.status}<br />
                  {app.notes && (
                    <>
                      <strong>Notes:</strong> {app.notes}
                    </>
                  )}
                </p>
                <button
                  className="btn btn-sm btn-outline-danger mt-2"
                  onClick={() => handleRemove(app.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
