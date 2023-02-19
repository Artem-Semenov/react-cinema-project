import Container from 'components/Container/Container'
import './WhyUs.css'
import WhyUsList from './WhyUsList/WhyUsList'

type Props = {}

const WhyUs = (props: Props) => {
  return (
    <Container>
      <div className="why-us__body">
        <h2>Чому ми?</h2>
        <WhyUsList/>
      </div>
    </Container>
  )
}
export default WhyUs