import './Container.css'

type Props = {
  children: React.ReactNode; 
  mh100vh?: boolean
}
const Container = (props: Props) => {
  return (
    <div className= {`container ${props.mh100vh ? 'mh100vh' : ''}`}>
      {props.children}
    </div>
  )
}
export default Container