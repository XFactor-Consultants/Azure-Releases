import React, { useState } from "react";
import "./App.css";
import WeatherReport from "./WeatherReport";
import WeatherSearch from "./WeatherSearch";

const App = () => {
  const [selectedResult, setSelectedResult] = useState(null);
  return (
    <div className="App">
      <WeatherSearch select={setSelectedResult} />
      {selectedResult && <h1>Weather in {selectedResult.name}</h1>}
      {selectedResult && <WeatherReport result={selectedResult} />}
    </div>
  );
};

export default App;
