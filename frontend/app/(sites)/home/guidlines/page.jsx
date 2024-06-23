"use client";
import React from "react";

export default function Page() {
  const properties = [
    {
      name: "age",
      description:
        "The age of the patient. Older age increases the risk of heart disease.",
    },
    {
      name: "sex",
      description:
        "The sex of the patient. Men have a higher risk of heart attacks compared to women.",
    },
    {
      name: "cp",
      description:
        "Chest pain type. Different types of chest pain can indicate varying levels of heart disease risk.",
    },
    {
      name: "trtbps",
      description:
        "Resting blood pressure in mm Hg. High blood pressure is a significant risk factor for heart disease.",
    },
    {
      name: "chol",
      description:
        "Serum cholesterol in mg/dl. High levels of cholesterol can lead to clogged arteries and heart disease.",
    },
    {
      name: "fbs",
      description:
        "Fasting blood sugar > 120 mg/dl (1 = true; 0 = false). High blood sugar levels can indicate diabetes, which is a risk factor for heart disease.",
    },
    {
      name: "restecg",
      description:
        "Resting electrocardiographic results. Abnormal ECG results can indicate heart problems.",
    },
    {
      name: "thalachh",
      description:
        "Maximum heart rate achieved. Lower heart rate can indicate better cardiovascular fitness.",
    },
    {
      name: "exng",
      description:
        "Exercise induced angina (1 = yes; 0 = no). Angina during exercise can indicate blocked arteries.",
    },
    {
      name: "oldpeak",
      description:
        "ST depression induced by exercise relative to rest. Measures how much the heart’s blood supply is reduced during exercise.",
    },
    {
      name: "slp",
      description:
        "The slope of the peak exercise ST segment. Abnormal slopes can indicate heart disease.",
    },
    {
      name: "caa",
      description:
        "Number of major vessels (0-3) colored by fluoroscopy. More blocked vessels can indicate severe heart disease.",
    },
    {
      name: "thall",
      description:
        "Thalassemia (3 = normal; 6 = fixed defect; 7 = reversible defect). Helps in diagnosing the extent of heart damage.",
    },
    {
      name: "prediction",
      description:
        "Prediction result. Indicates whether the model predicts a heart attack (yes/no).",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen text-black p-4">
      <h1 className="text-2xl font-bold mb-4">
        Heart Attack Prediction Properties Guideline
      </h1>
      <ul className="list-disc pl-5">
        {properties.map((property) => (
          <li key={property.name} className="mb-2">
            <strong>{property.name}:</strong> {property.description}
          </li>
        ))}
      </ul>
    </div>
  );
}
