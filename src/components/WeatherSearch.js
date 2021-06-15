import React, { useState } from "react";

import { search } from "../utils/api";

import "./WeatherSearch.css";

const debounce = (f, interval = 300) => {
  let timer = null;

  return (...args) => {
    clearTimeout(timer);
    return new Promise((resolve) => {
      timer = setTimeout(() => resolve(f(...args)), interval);
    });
  };
};

const handleSearch = debounce(search);

const WeatherSearch = ({ select }) => {
  const [data, setData] = useState(null);
  console.log(data);
  const handleChange = ({ target: { value } }) => {
    if (value.length < 3) {
      return;
    }
    const resp = handleSearch(value);
    if (resp) {
      resp.then(setData);
    }
  };
  return (
    <div className="container">
      <h1>Search Weather:</h1>
      <h4>Enter Full Town, Country, State</h4>
      <input type="text" onChange={handleChange} placeholder="London, US" />
      <div className="results">
        {data &&
          data.map((result, i) => (
            <div
              className="result"
              key={i}
              onClick={() => {
                setData(null);
                select(result);
              }}
            >
              {result.name}, {result.country} {result.state || null}
            </div>
          ))}
      </div>
    </div>
  );
};

export default WeatherSearch;
