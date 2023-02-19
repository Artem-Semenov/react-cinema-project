import Container from "components/Container/Container";
import ScheduleListItem from "./ScheduleListItem/ScheduleListItem";

type ScheduleProps = 
{props: {
  shouldRenderTitle?: boolean;
  shouldRenderDate?: boolean;
  title?: string;
  dateFrom: string;
  dateTo: string;
  items: Array<object>;
}};

const Schedule = ({
  shouldRenderTitle = true,
  shouldRenderDate = true,
  title = "Розклад",
  dateFrom,
  dateTo,
  items
} : ScheduleProps) => {
  return (
    <Container>
    {shouldRenderTitle? <h2 className="schedule__title">${title}</h2> : ''}
    {shouldRenderDate ? <div className="schedule__date">З {dateFrom} по {dateTo} :</div> : ""}
    <div className="schedule__items">
    {items.map({img, id, timeArr, title}) => {
      return (
        <ScheduleListItem 
        img = {img}
        id = {id}
        timeArr = {timeArr}
        title = {title}
        />
      )
    }}
     </div>
     </Container>
  )
};
export default Schedule;
