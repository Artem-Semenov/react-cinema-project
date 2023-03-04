import './Container.scss';


type Props = {
  children: React.ReactNode; 
  mh100vh?: boolean
}

const Container = ({ children, mh100vh }: Props) => {
  return <div className= {`container ${mh100vh ? 'mh100vh' : ''}`}>
      {children}
    </div>
  
}
export default Container 