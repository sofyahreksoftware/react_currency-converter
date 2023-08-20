import "./style.css";
import { useEffect } from "react";

function Watch({ dateTime, setDateTime }) {
  useEffect(() => {
    const intervalID = setInterval(() => {
      const newDate = new Date();
      const dataOptions = {
        weekday: "long",
        day: "numeric",
        month: "long",
      };
      const date = newDate.toLocaleDateString("pl-PL", dataOptions);
      const time = newDate.toLocaleTimeString();
      setDateTime(date + ", " + time);
    }, 1000);

    return () => {
      clearInterval(intervalID);
    };
  }, [setDateTime]);

  return (
    <p className="watch">
      Dzisiaj jest <span>{dateTime}</span>
    </p>
  );
}

export default Watch;
