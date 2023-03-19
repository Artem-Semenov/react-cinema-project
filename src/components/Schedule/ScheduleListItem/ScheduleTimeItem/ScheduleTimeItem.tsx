import { NavLink } from "react-router-dom";
import "./ScheduleTimeItem.scss";
type Props = {
  time: string;
  titleForDomain: string;
  id: number;
};

const ScheduleTimeItem = ({ time, titleForDomain, id }: Props) => {
  const onLinkClick = () => {};
  return (
    <div className="schedule-list-time__item" onClick={onLinkClick}>
      <NavLink to={`schedule/${titleForDomain}`} state={{ time, id }}>
        {time}
      </NavLink>
    </div>
  );
};
export default ScheduleTimeItem;
