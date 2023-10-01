import { useCurrentDate } from "./useCurrentDate.js";
import { StyledWatch } from "./styled";

function Watch() {
  const [date, formatDate] = useCurrentDate();

  return (
    <StyledWatch>
      Dzisiaj jest <span>{formatDate(date)}</span>
    </StyledWatch>
  );
}

export default Watch;
