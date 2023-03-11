import './WhyUs.scss'
import WhyUsList from './WhyUsList/WhyUsList'

type Props = {}

const WhyUs = (props: Props) => {
  return (
      <div className="why-us__body">
        <h2>Чому ми?</h2>
        <WhyUsList/>
      </div>
  )
}
export default WhyUs