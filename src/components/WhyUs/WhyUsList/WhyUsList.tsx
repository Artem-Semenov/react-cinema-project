import WhyUsListItem from "../WhyUsListItem/WhyUsListItem"
import './WhyUsList.scss'
import whyUsData from "utils/whyUsContentArr"

const WhyUsList = () => {
  return (
    <div className="why-us-list__body">
      {whyUsData.map(({title, text, icon, id}) => {
    return(
      <WhyUsListItem 
      icon = {icon}
      text = {text}
      title = {title}
      key = {id}
      />)}
      )
      }

    </div>
  )
}
export default WhyUsList