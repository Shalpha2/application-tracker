import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import './App.css';
import ApplicationForm from './components/ApplicationForm';
import ApplicationList from './components/ApplicationList';
import NavBar from "./components/NavBar";
import Hero from './components/Hero';
import { useState , useEffect} from 'react';
function App() {
 
  const [applications, setApplications] = useState([]);
  const [search, setSearch] = useState("");
  async function getApplications() {
    try {
      const response = await fetch("http://localhost:3000/applications");
      const data = await response.json();
      setApplications(data);
    } catch (error) {
      throw new Error(error);
    } 
  }

  useEffect(() => {
    getApplications();
  }, []);

  return (
    <div className="container mt-4">
      <NavBar/>
      <Hero />
      <h4 className="text-center mb-3 fw-bold display-6 text-primary">
  <i className="bi bi-briefcase-fill me-2"></i>Job Application Tracker
</h4>
      <div className="row">
        <ApplicationForm setApplications={setApplications} />
        <div className="col">
          <h3 className="mb-3">Saved Applications</h3>
          <ApplicationList applications={applications} 
          setApplications={setApplications}
           search={search}  
           setSearch={setSearch}/>
        </div>
      </div>
    </div>
  );
}

export default App;