import ScheduleListItem from "../ScheduleListItem/ScheduleListItem";
import './ScheduleList.scss'
type Itemprops ={ 
  items: Array<
{id: number;
  img: string;
  timeArr: Array<string>;
  title: string;
  titleForDomain: string;
}>
}

const ScheduleList = ({items}: Itemprops) => {
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
          titleFotDomain = {titleForDomain}
        />
       
      );
    })}
  </ul>
  )
}
export default ScheduleList