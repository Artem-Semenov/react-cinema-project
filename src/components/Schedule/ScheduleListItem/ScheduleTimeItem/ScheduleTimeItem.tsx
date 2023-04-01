import { NavLink } from "react-router-dom";
import "./ScheduleTimeItem.scss";
import { MouseEventHandler } from "react";
type Props = {
  time: string;
  titleForDomain?: string;
  id?: number;
  clickHandle?: MouseEventHandler<HTMLButtonElement>
};

const ScheduleTimeItem = ({ time, titleForDomain, id, clickHandle }: Props) => {
  const onLinkClick = () => {};
  return (
    <div className="schedule-list-time__item" onClick={onLinkClick}>
      {titleForDomain ? (
        <NavLink to={`schedule/${titleForDomain}`} state={{ time, id }}>
          {time}
        </NavLink>
      ) : (
        <button onClick={clickHandle}>{time}</button>
      )}
    </div>
  );
};
export default ScheduleTimeItem;
