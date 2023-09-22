import { useEffect, useState } from "react";

export const useCurrentDate = () => {
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

  return [date, formatDate];
};
