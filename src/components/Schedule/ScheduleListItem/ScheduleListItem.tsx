import ScheduleTimeItem from "./ScheduleTimeItem/ScheduleTimeItem";
import "./ScheduleListItem.scss";
type Itemprops = {
  id: number;
  img: string;
  timeArr: Array<string>;
  title: string;
};

const ScheduleListItem = ({ id, img, timeArr, title }: Itemprops) => {
  return (
    <li className="schedule-list__item__wrapper" key={id}>
      <div className="schedule-list__item_content">
        <img src={img} alt={title} />
        <h2>{title}</h2>
        <div className="time__wrapper">
          {timeArr.map((el, i) => {
            return <ScheduleTimeItem time={el} id={id} key={i} />;
          })}
        </div>
      </div>
    </li>
  );
};
export default ScheduleListItem;
