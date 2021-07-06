import "./DailyForecast.css";

const DailyForecast = ({ daily }) => (
  <div className="daily">
    {daily.map((day, i) => (
      <div className="day" key={day.dt}>
        <strong>
          {
            ["Sun", "Mon", "Tues", "Weds", "Thu", "Fri", "sat"][
              new Date(day.dt * 1000).getDay()
            ]
          }
        </strong>
        <span>{day.feels_like.day}°</span>
      </div>
    ))}
  </div>
);

export default DailyForecast;
