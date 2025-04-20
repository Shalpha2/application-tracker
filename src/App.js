
import './App.css';
import ApplicationForm from './components/ApplicationForm';
import ApplicationList from './components/ApplicationList';
import { useState } from 'react';
function App() {
  const [applications, setApplications] = useState([
    {
title : "Sofware Engineer",
company: "Microsoft",
status : "Applied",
notes : "Sent application via Linkedln"
    },
  {
title : "Full stack Developer",
company: "DevSolutions",
status: "Interview",
notes: "Technical interview scheduled for Monday"
  },
  {
    title : "Data Analyst",
    company: "DataWitz",
    status: "Rejected",
    notes: "Get rejection email last friday" 
  }
  ]);

  function handleFormSubmit(newApplication) {
    setApplications([...applications, newApplication]);
  }

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Job Application Tracker</h1>
      <div className="row">
        <ApplicationForm onFormSubmit={handleFormSubmit} />
        <div className="col">
          <h2 className="mb-3">Saved Applications</h2>
          <ApplicationList applications={applications} />
        </div>
      </div>
    </div>
  );
}

export default App;
