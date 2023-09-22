import "./style.css";
import { useCurrentDate } from "./useCurrentDate.js";

function Watch() {
  const [date, formatDate] = useCurrentDate();

  return (
    <p className="watch">
      Dzisiaj jest <span>{formatDate(date)}</span>
    </p>
  );
}

export default Watch;
