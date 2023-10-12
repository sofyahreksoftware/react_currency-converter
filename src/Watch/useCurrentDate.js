import { useEffect, useState } from "react";

export const useCurrentDate = () => {
  const [date, setDate] = useState(new Date());

  const formatDate = (date) => {
    const datePart = date.toLocaleDateString("pl-PL", {
      weekday: "long",
      day: "numeric",
      month: "long",
    });

    const timePart = date.toLocaleTimeString("pl-PL", {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });

    return `${datePart}, ${timePart}`;
  };

  useEffect(() => {
    const intervalID = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalID);
    };
  }, [setDate]);

  return [date, formatDate];
};
