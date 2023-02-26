import Container from "components/Container/Container";
import './Schedule.css'
import ScheduleList from "./ScheduleList/ScheduleList";

type ScheduleProps = {
  props: {
    shouldRenderTitle?: boolean;
    shouldRenderDate?: boolean;
    title?: string;
    dateFrom: string;
    dateTo: string;
    items: Array<Itemprops>;
  };
};

type Itemprops = {
  id: number;
  img: string;
  timeArr: Array<string>;
  title: string;
};

const Schedule = ({
  props: {
    shouldRenderTitle = true,
    shouldRenderDate = true,
    title = "Розклад",
    dateFrom,
    dateTo,
    items,
  },
}: ScheduleProps) => {
  return (
    <Container>
      <div className="schedule__content" id="schedule">
      {shouldRenderTitle ? <h2 className="schedule__title">{title}</h2> : ""}
      {shouldRenderDate ? (
        <div className="schedule__date">
          З {dateFrom} по {dateTo}:
        </div>
      ) : (
        ""
      )}
      <ScheduleList items = {items}/>
      </div>
    </Container>
  );
};
export default Schedule;
