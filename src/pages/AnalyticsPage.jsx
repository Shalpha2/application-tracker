import React from "react";
import NavBar from "../components/NavBar";

function AnalyticsPage() {
  return (
    <div className="p-4">
        <NavBar/>
      <h2 className="text-2xl font-bold mb-4">Analytics</h2>
      <p>Summary of your job application progress will go here.</p>
      {/*Add charts for stats like applications by status */}
    </div>
  );
}

export default AnalyticsPage;
