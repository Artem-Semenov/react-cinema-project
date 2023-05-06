import { Film } from "utils/filmsData";
import ScheduleListItem from "../ScheduleListItem/ScheduleListItem";
import "./ScheduleList.scss";
type Itemprops = {
  items: Array<Film>;
};

const ScheduleList = ({ items }: Itemprops) => {
  return (
    <ul className="schedule__items">
      {items.map(({ img, id, timeArr, title, titleForDomain }) => {
        return (
          <ScheduleListItem
            img={img}
            id={id}
            timeArr={timeArr}
            title={title}
            key={id}
            titleForDomain={titleForDomain}
          />
        );
      })}
    </ul>
  );
};
export default ScheduleList;
