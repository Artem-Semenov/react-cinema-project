import HomeTitlePage from "components/HomeTitlePage/HomeTitlePage"
import Schedule from "components/Schedule/Schedule"
import WhyUs from "components/WhyUs/WhyUs"
import homePageSchedule from "utils/homePageSchedule";

type Props = {}

type Itemprops = {
  id: number
  img: string
  timeArr: Array<string>
  title: string
}


type ScheduleProps =  {
  shouldRenderTitle?: boolean;
  shouldRenderDate?: boolean;
  title?: string;
  dateFrom: string;
  dateTo: string;
  items: Array<Itemprops>;
};
const scheduleProps : ScheduleProps = {
  shouldRenderTitle: true,
  shouldRenderDate: true,
  title: 'Розклад',
  dateFrom: '19.01',
  dateTo: '25.01',
  items: homePageSchedule,
}
const Home = (props: Props) => {
  return (
    <>
    <HomeTitlePage/>
    <WhyUs/>
    <Schedule props = {scheduleProps}/>
    </>
  )
}
export default Home