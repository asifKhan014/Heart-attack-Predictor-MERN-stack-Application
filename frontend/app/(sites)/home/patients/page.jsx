"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Page() {
  const [patients, setPatients] = useState([]);

  const getPatients = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/users");
      setPatients(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const deletePatient = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/users/${id}`);
      setPatients(patients.filter((patient) => patient._id !== id));
    } catch (error) {
      console.error("Error deleting patient:", error);
    }
  };

  useEffect(() => {
    getPatients();
  }, []);

  return (
    <div className="bg-white min-h-screen text-black p-4">
      <h1 className="text-2xl font-bold mb-4">Patients</h1>
      <div className="grid grid-cols-1 gap-4">
        {patients.map((patient) => (
          <div key={patient._id} className="border p-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-2">{patient.name}</h2>
            <p>
              <strong>Age:</strong> {patient.age}
            </p>
            <p>
              <strong>Sex:</strong> {patient.sex}
            </p>
            <p>
              <strong>Chest Pain Type (cp):</strong> {patient.cp}
            </p>
            <p>
              <strong>Resting Blood Pressure (trtbps):</strong> {patient.trtbps}
            </p>
            <p>
              <strong>Cholesterol (chol):</strong> {patient.chol}
            </p>
            <p>
              <strong>Fasting Blood Sugar (fbs):</strong> {patient.fbs}
            </p>
            <p>
              <strong>Resting ECG (restecg):</strong> {patient.restecg}
            </p>
            <p>
              <strong>Max Heart Rate (thalachh):</strong> {patient.thalachh}
            </p>
            <p>
              <strong>Exercise Induced Angina (exng):</strong> {patient.exng}
            </p>
            <p>
              <strong>Oldpeak:</strong> {patient.oldpeak}
            </p>
            <p>
              <strong>Slope (slp):</strong> {patient.slp}
            </p>
            <p>
              <strong>Number of Major Vessels (caa):</strong> {patient.caa}
            </p>
            <p>
              <strong>Thalassemia (thall):</strong> {patient.thall}
            </p>
            <p>
              <strong>Prediction:</strong> {patient.prediction}
            </p>
            <button
              onClick={() => deletePatient(patient._id)}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
