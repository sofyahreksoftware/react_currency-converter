import "./style.css";
import { useEffect, useState } from "react";

function Watch() {
  const [date, setDate] = useState(new Date());

  const formatDate = (date) => {
    return date.toLocaleDateString("pl-PL", {
      weekday: "long",
      day: "numeric",
      month: "long",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
  };

  useEffect(() => {
    const intervalID = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalID);
    };
  }, [setDate]);

  return (
    <p className="watch">
      Dzisiaj jest <span>{formatDate(date)}</span>
    </p>
  );
}

export default Watch;
