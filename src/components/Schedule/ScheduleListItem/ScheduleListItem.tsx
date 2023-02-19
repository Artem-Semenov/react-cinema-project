type Itemprops = {
  id: number
  img: string
  timeArr: Array<string>
  title: string
}




const ScheduleListItem = ({id, img, timeArr, title} : Itemprops) => {
  return (
    <div>{id} {img} {timeArr} {title}</div>
  )
}
export default ScheduleListItem