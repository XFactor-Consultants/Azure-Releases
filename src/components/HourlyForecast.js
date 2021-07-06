import "./HourlyForecast.css";

const formatDate = (date) =>
  `${date.getMonth()}/${date.getDate()} ${date.getHours()}:00`;

const HourlyForecast = ({ hourly }) => (
  <div className="hourly">
    {hourly
      .filter((v, i) => i % 3 === 0)
      .map((hour, i) => (
        <div className="hour" key={hour.dt}>
          <strong>{formatDate(new Date(hour.dt * 1000))}</strong>
          <span>{hour.feels_like}°</span>
        </div>
      ))}
  </div>
);

export default HourlyForecast;
