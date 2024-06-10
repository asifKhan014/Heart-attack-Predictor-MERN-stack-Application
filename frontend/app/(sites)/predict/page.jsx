"use client";
import { useState } from "react";
import axios from "axios";

const Prediction = () => {
  const [userData, setUserData] = useState({
    name: "",
    age: "",
    sex: "",
    cp: "",
    trtbps: "",
    chol: "",
    fbs: "",
    restecg: "",
    thalachh: "",
    exng: "",
    oldpeak: "",
    slp: "",
    caa: "",
    thall: "",
  });
  const [prediction, setPrediction] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target);
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/predict",
        userData
      );
      setPrediction(response.data.prediction); // Display the prediction result
      console.log(response.data.prediction); // Display the prediction result
      // const response = await axios.post(
      //   "http://localhost:5001/predict",
      //   userData
      // );
      // // const prediction = response.data.prediction;
      // setPrediction(response.data.prediction); // Display the prediction result
      // console.log(response.data.prediction); // Display the prediction result
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen justify-center items-center bg-cover bg-center bg-custom-bg2">
      <h1 className="text-4xl text-white font-bold py-4">
        Heart Attack Predictor
      </h1>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-3 w-full  gap-4 px-4 py-8"
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          className="p-4 mt-2 w-full md:w-96 border outline-none rounded-md text-black"
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          onChange={handleChange}
          className="p-4 mt-2 w-full md:w-96 border outline-none rounded-md text-black"
        />
        <input
          type="number"
          name="sex"
          placeholder="Sex"
          onChange={handleChange}
          className="p-4 mt-2 w-full md:w-96 border outline-none rounded-md text-black"
        />
        <input
          type="number"
          name="cp"
          placeholder="CP"
          onChange={handleChange}
          className="p-4 mt-2 w-full md:w-96 border outline-none rounded-md text-black"
        />
        <input
          type="number"
          name="trtbps"
          placeholder="TRTBPS"
          onChange={handleChange}
          className="p-4 mt-2 w-full md:w-96 border outline-none rounded-md text-black"
        />
        <input
          type="number"
          name="chol"
          placeholder="Chol"
          onChange={handleChange}
          className="p-4 mt-2 w-full md:w-96 border outline-none rounded-md text-black"
        />

        <input
          type="number"
          name="fbs"
          placeholder="FBS"
          onChange={handleChange}
          className="p-4 mt-2 w-full md:w-96 border outline-none rounded-md text-black"
        />
        <input
          type="number"
          name="restecg"
          placeholder="Rest ECG"
          onChange={handleChange}
          className="p-4 mt-2 w-full md:w-96 border outline-none rounded-md text-black"
        />
        <input
          type="number"
          name="thalachh"
          placeholder="Thalachh"
          onChange={handleChange}
          className="p-4 mt-2 w-full md:w-96 border outline-none rounded-md text-black"
        />
        <input
          type="number"
          name="exng"
          placeholder="Exng"
          onChange={handleChange}
          className="p-4 mt-2 w-full md:w-96 border outline-none rounded-md text-black"
        />
        <input
          type="number"
          name="oldpeak"
          placeholder="Oldpeak"
          onChange={handleChange}
          className="p-4 mt-2 w-full md:w-96 border outline-none rounded-md text-black"
        />
        <input
          type="number"
          name="slp"
          placeholder="SLP"
          onChange={handleChange}
          className="p-4 mt-2 w-full md:w-96 border outline-none rounded-md text-black"
        />
        <input
          type="number"
          name="caa"
          placeholder="CAA"
          onChange={handleChange}
          className="p-4 mt-2 w-full md:w-96 border outline-none rounded-md text-black"
        />
        <input
          type="number"
          name="thall"
          placeholder="Thall"
          onChange={handleChange}
          className="p-4 mt-2 w-full md:w-96 border outline-none rounded-md text-black"
        />
        <button
          type="submit"
          className="bg-blue-600 mt-4 w-full md:w-96 border-blue-700 rounded-md px-8 py-4 mb-4"
        >
          Submit
        </button>
      </form>
      {prediction && (
        <div className="text-white w-full text-center px-8 py-4 mb-4 text-3xl font-bold">
          Prediction: {prediction}
        </div>
      )}
    </div>
  );
};

export default Prediction;
