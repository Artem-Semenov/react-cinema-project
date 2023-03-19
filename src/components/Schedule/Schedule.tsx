import "./Schedule.scss";
import ScheduleList from "./ScheduleList/ScheduleList";

type ScheduleProps = {
  props: {
    shouldRenderTitle?: boolean;
    shouldRenderDate?: boolean;
    title?: string;
    dateFrom: string;
    dateTo: string;
    items: Array<Itemprops>;
    classNames?: string;
    shouldRenderDesc?: boolean
    scheduleDesc?: string
  };
};

type Itemprops = {
  id: number;
  img: string;
  timeArr: Array<string>;
  title: string;
  titleForDomain: string;
};

const Schedule = ({
  props: {
    shouldRenderTitle = true,
    shouldRenderDate = true,
    title = "Розклад",
    dateFrom,
    dateTo,
    items,
    classNames = "",
    shouldRenderDesc = false,
    scheduleDesc = ""
  },
}: ScheduleProps) => {
  return (
    <div className={classNames ? classNames + " schedule" : "schedule"}>
      <div className="schedule__content" id="schedule">
        {shouldRenderTitle ? <h2 className="schedule__title">{title}</h2> : ""}
        {shouldRenderDate ? (
          <div className="schedule__date">
            З {dateFrom} по {dateTo}:
          </div>
        ) : (
          ""
        )}
        {shouldRenderDesc ? (
          <div className="schedule_desc">{scheduleDesc}</div>
        ) : (
          ""
        )}
        <ScheduleList items={items} />
      </div>
    </div>
  );
};
export default Schedule;
