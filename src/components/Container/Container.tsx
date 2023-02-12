import './Container.css'

type Props = {  children: React.ReactNode;}
const Container = (props: Props) => {
  return (
    <div className="container">
      {props.children}
    </div>
  )
}
export default Container