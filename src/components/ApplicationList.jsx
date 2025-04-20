import React from 'react';

export default function ApplicationList({ applications }) {
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
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
