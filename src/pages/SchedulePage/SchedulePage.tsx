import Container from "components/Container/Container";
import Schedule from "components/Schedule/Schedule";
import homePageSchedule from "utils/homePageSchedule";
import "./SchedulePage.scss"

type Props = {};
type ScheduleProps = {
  shouldRenderTitle?: boolean;
  shouldRenderDate?: boolean;
  title?: string;
  dateFrom: string;
  dateTo: string;
  items: Array<Itemprops>;
  classNames: string;
  shouldRenderDesc?: boolean;
  scheduleDesc?: string;
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
  classNames: "mb-40 schedulePage",
};
const schedulePropsWatchNextWeek: ScheduleProps = {
  shouldRenderTitle: false,
  shouldRenderDate: true,
  title: "Дивіться зараз",
  dateFrom: "19.01",
  dateTo: "25.01",
  items: homePageSchedule,
  classNames: "mb-80 schedulePage",
};
const schedulePropsWatchClose: ScheduleProps = {
  shouldRenderTitle: true,
  shouldRenderDate: false,
  title: "Незабаром у прокаті",
  dateFrom: "19.01",
  dateTo: "25.01",
  items: homePageSchedule,
  classNames: "mb-80 schedulePage title-margin",
  shouldRenderDesc: true,
  scheduleDesc:
    " Ми постійно шукаємо найочікуваніші та найзахопливіші фільми, щоб забезпечити нашим глядачам найкращі враження від кіно. Слідкуйте за оновленнями на цій сторінці, оскільки тут ми опублікуємо більше інформації про релізи нових фільмів.",
};
const SchedulePage = (props: Props) => {
  return (
    <Container>
      <div className="SchedulePage" style={{ marginTop: "136px" }}>
        <p className="schedulePage__desc">
          Ласкаво просимо на сторінку розкладу нашого кінотеатру, де ви можете
          знайти всю необхідну інформацію про останні фільми та розклад сеансів
        </p>
        <Schedule props={schedulePropsWatchNow} />
        <div className="schedulePage__artickle">
          Ми пишаємося тим, що забезпечуємо найкращий кінематографічний досвід
          для нашої аудиторії Незалежно від того, чи є ви прихильником
          бойовиків, романтики, драми чи комедії, у нас є новинка для кожного!
        </div>
        <Schedule props={schedulePropsWatchNextWeek} />
        <Schedule props={schedulePropsWatchClose} />
      </div>
    </Container>
  );
};
export default SchedulePage;
