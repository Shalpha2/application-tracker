
import './App.css';
import ApplicationForm from './components/ApplicationForm';
import ApplicationList from './components/ApplicationList';
import { useState , useEffect} from 'react';
function App() {
  const [applications, setApplications] = useState([]);

  async function getApplications() {
    try {
      const response = await fetch("http://localhost:3000/applications");
      const data = await response.json();
      setApplications(data);
    } catch (error) {
      throw new Error(error);
    } finally {
    }
  }

  useEffect(() => {
    getApplications();
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Job Application Tracker</h1>
      <div className="row">
        <ApplicationForm setApplications={setApplications} />
        <div className="col">
          <h2 className="mb-3">Saved Applications</h2>
          <ApplicationList applications={applications} setApplications={setApplications} />
        </div>
      </div>
    </div>
  );
}

export default App;
