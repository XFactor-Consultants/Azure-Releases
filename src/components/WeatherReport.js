import React, { useState, useEffect } from "react";
import { fetchWeather } from "../utils/api";
import DailyForecast from "./DailyForecast";
import HourlyForecast from "./HourlyForecast";
import Loading from "./Loading";
import "./WeatherReport.css";
import { AppConfigurationClient } from "@azure/app-configuration";

const client = new AppConfigurationClient(
  "Endpoint=https://weatherapp-featureflag.azconfig.io;Id=+XiI-l4-s0:FtWFuHd83stOMp0BZVoH;Secret=gwLXbi/wtjUg5nyTo3GXY0p9Z4/lFPNvJPFuZHhW7g4="
);

const WeatherReport = ({ result }) => {
  const [data, setData] = useState(null);
  const [hourlyEnabled, setHourlyEnabled] = useState(false);
  useEffect(() => {
    fetchWeather(result.lat, result.lon).then(setData);
    client
      .getConfigurationSetting({
        key: ".appconfig.featureflag/Hourly",
      })
      .then((data) => {
        setHourlyEnabled(JSON.parse(data.value).enabled);
      });
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
      <DailyForecast {...data} />
      {hourlyEnabled && <HourlyForecast {...data} />}
    </div>
  );
};

export default WeatherReport;
