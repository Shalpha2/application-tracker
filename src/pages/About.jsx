import NavBar from "../components/NavBar";

export default function About() {
  return (
    <div style={{ backgroundColor: "#c7def57d", minHeight: "100vh" }}>
      <NavBar />
      <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "90vh" }}>
        <div className="text-center p-5 bg-white rounded shadow" style={{ maxWidth: "800px", width: "100%" }}>
          <h1 className="mb-4 text-primary">About This App</h1>
          <p>This app was built using React and Bootstrap CSS to help users manage their job hunt.</p>
          <p>This app helps users track their job applications efficiently.</p>
        </div>
      </div>
    </div>
  );
}

  
  
  
  