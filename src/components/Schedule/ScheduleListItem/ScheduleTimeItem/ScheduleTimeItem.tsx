import './ScheduleTimeItem.css'
type Props = {
  time: string
  id: number
}

const ScheduleTimeItem = ({time, id}: Props) => {

  const onLinkClick = () => {
    console.log(id, time)
  }
  return (
    <div className='schedule-list-time__item' onClick={onLinkClick}>{time}</div>
  )
}
export default ScheduleTimeItem