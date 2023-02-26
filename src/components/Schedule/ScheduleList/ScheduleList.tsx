import ScheduleListItem from "../ScheduleListItem/ScheduleListItem";
import './ScheduleList.css'
type Itemprops ={ 
  items: Array<
{id: number;
  img: string;
  timeArr: Array<string>;
  title: string;
}>
}

const ScheduleList = ({items}: Itemprops) => {
  return (
    <ul className="schedule__items">
    {items.map(({ img, id, timeArr, title }) => {
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
  )
}
export default ScheduleList