import Container from "components/Container/Container";
import ScheduleListItem from "./ScheduleListItem/ScheduleListItem";
import './Schedule.css'

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
      <ul className="schedule__items">
        {items.map(({ img, id, timeArr, title }: Itemprops) => {
          return (
            
            <ScheduleListItem
              img={img}
              id={id}
              timeArr={timeArr}
              title={title}
              key={id}
            />
           
          );
        })}
      </ul>
      </div>
    </Container>
  );
};
export default Schedule;
