import React, { useState, useEffect } from "react";
import { fetchWeather } from "../utils/api";
import DailyForecast from "./DailyForecast";
import HourlyForecast from "./HourlyForecast";
import Loading from "./Loading";
import "./WeatherReport.css";

const WeatherReport = ({ result }) => {
  const [data, setData] = useState(null);
  console.log("report", data);
  useEffect(() => {
    fetchWeather(result.lat, result.lon).then(setData);
  }, [result]);
  if (!data) {
    return <Loading />;
  }
  return (
    <div className="weatherReport">
      <div className="temp">{data.current.feels_like}°</div>
      <div className="info">
        <div>Currently: {data.current.weather[0].description}</div>
        <div>Wind: {data.current.wind_speed} MPH</div>
      </div>
      {/* <DailyForecast {...data} /> */}
      <HourlyForecast {...data} />
    </div>
  );
};

export default WeatherReport;
