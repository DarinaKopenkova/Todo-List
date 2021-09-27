import "./Date.css";
const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const shortMonths = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
export function CurrentDate() {
  const date = new Date();

  return (
    <div className="date">
      <div className="date_hour">{date.getDate()}</div>
      <div className="date_month">
        <div>{shortMonths[date.getMonth()]}</div>
        <div>{date.getFullYear()}</div>
      </div>
      <div className="date_week">{weekDays[date.getDay()]}</div>
    </div>
  );
}
