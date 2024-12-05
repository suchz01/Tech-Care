import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Patients from "./components/Patients";
import DiagnosticList from "./components/DiagnosticList";
import DiagnosisHistory from "./components/DiagnosisHistory";
import LabResult from "./components/LabResult";
import Profile from "./components/Profile";

function App() {
  const [data, setData] = useState(null);
  const [currentPatient, setCurrentPatient] = useState(null); 

  const fetchData = async () => {
    const url = "https://fedskillstest.coalitiontechnologies.workers.dev";
    const username = "coalition";
    const password = "skills-test";

    const authHeader = "Basic " + btoa(`${username}:${password}`);

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: authHeader,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setData(data);
      setCurrentPatient(data[0]);
    } catch (error) {
      console.error("Error:", error);
      setData(null);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handlePatientClick = (patient) => {
    setCurrentPatient(patient);
  };

  
if(data)
  return (
    <>
      <div className="bg-[#F6F7F8] h-full w-full m-0">
        <Navbar />
        <div className="flex">
          <div className="left h-full w-1/4">
            <Patients data={data} handlePatientClick={handlePatientClick} currentPatient={currentPatient} />
          </div>
          <div className="center h-full w-1/2 p-2 mt-8 overflow-y-auto max-h-[calc(100vh-120px)] rounded-3xl">
            <DiagnosisHistory currentPatient={currentPatient} />
            <DiagnosticList currentPatient={currentPatient} />
          </div>
          <div className="right w-1/4 h-full p-5">
            <Profile currentPatient={currentPatient} />
            <LabResult currentPatient={currentPatient} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
