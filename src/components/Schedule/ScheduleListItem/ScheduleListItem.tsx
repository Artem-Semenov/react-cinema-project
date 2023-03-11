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
        <div className="img">
          <div className="background"></div>
          <div className="buy-icon-wrapper">
            <div className="buy-icon">
              <svg
                width="100%"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1 5.5H19L18 19H2L1 5.5Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 7.5V1H14V7.5"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 15H14"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
          <img src={img} alt={title} />
        </div>
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
