import Schedule from "components/Schedule/Schedule";
import homePageSchedule from "utils/homePageSchedule";

type Props = {};
type ScheduleProps = {
  shouldRenderTitle?: boolean;
  shouldRenderDate?: boolean;
  title?: string;
  dateFrom: string;
  dateTo: string;
  items: Array<Itemprops>;
  classNames: string;
};

type Itemprops = {
  id: number;
  img: string;
  timeArr: Array<string>;
  title: string;
};

const schedulePropsWatchNow: ScheduleProps = {
  shouldRenderTitle: true,
  shouldRenderDate: true,
  title: "Дивіться зараз",
  dateFrom: "19.01",
  dateTo: "25.01",
  items: homePageSchedule,
  classNames: 'mt-160 mb-80 schedulePage',
};
const schedulePropsWatchNextWeek: ScheduleProps = {
  shouldRenderTitle: false,
  shouldRenderDate: true,
  title: "Дивіться зараз",
  dateFrom: "19.01",
  dateTo: "25.01",
  items: homePageSchedule,
  classNames: 'mb-80 schedulePage'
};
const schedulePropsWatchClose: ScheduleProps = {
  shouldRenderTitle: true,
  shouldRenderDate: false,
  title: "Незабаром у прокаті",
  dateFrom: "19.01",
  dateTo: "25.01",
  items: homePageSchedule,
  classNames: 'mb-80 schedulePage title-margin'
};
const SchedulePage = (props: Props) => {
  return (
    <>
      <Schedule props={schedulePropsWatchNow} />;
      <Schedule props={schedulePropsWatchNextWeek} />;
      <Schedule props={schedulePropsWatchClose} />;
    </>
  );
};
export default SchedulePage;
