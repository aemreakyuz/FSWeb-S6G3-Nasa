import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import ImageViewer from "./components/ImageViewer";
import DatePicker from "./components/DatePicker";
const API_KEY = "5KZUoJqsYvq1eYr7SttuqYkEJjhxQQ0PAfIQrjfX";

function App() {
  const [nasaData, setNasaData] = useState(null);
  const [error, setError] = useState(null);
  const today = new Date();
  const formattedToday = today.toISOString().split("T")[0];
  const [selectedDate, setSelectedDate] = useState(formattedToday);

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${selectedDate}`
      )
      .then((res) => {
        console.log(res.data);
        setNasaData(res.data);
        console.log(nasaData);
      })
      .catch((err) => {
        console.log(err);
        setError(err.response.data.msg);
      });
  }, [selectedDate]);

  return (
    <div className="App">
      <DatePicker val={selectedDate} dateChange={setSelectedDate} />

      {error && <h3>Error: {error}</h3>}
      {!error && <ImageViewer viewData={nasaData} />}
    </div>
  );
}

export default App;
