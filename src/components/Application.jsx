import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import NavBar from './NavBar';

export default function Application() {
  const { id } = useParams();
  const location = useLocation();
  const app = location.state;

  return (
    <div className="container mt-4">
        <NavBar/>
      {app ? (
        <div className="card shadow p-4">
          <h3>{app.title}</h3>
          <h5 className="text-muted">{app.company}</h5>
          <p><strong>Status:</strong> {app.status}</p>
          <p><strong>Notes:</strong> {app.notes}</p>
        </div>
      ) : (
        <p>No application data found for ID: {id}</p>
      )}
    </div>
  );
}
