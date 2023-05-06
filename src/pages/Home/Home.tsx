import Container from "components/Container/Container";
import HomeTitlePage from "components/HomeTitlePage/HomeTitlePage";
import Schedule from "components/Schedule/Schedule";
import WhereWeLocated from "components/WhereWeLocated/WhereWeLocated";
import WhyUs from "components/WhyUs/WhyUs";
import filmsData, { Film } from "utils/filmsData";

type Props = {};

type ScheduleProps = {
  shouldRenderTitle?: boolean;
  shouldRenderDate?: boolean;
  title?: string;
  dateFrom: string;
  dateTo: string;
  items: Array<Film>;
};
const scheduleProps: ScheduleProps = {
  shouldRenderTitle: true,
  shouldRenderDate: true,
  title: "Розклад",
  dateFrom: "19.01",
  dateTo: "25.01",
  items: filmsData,
};
const Home = (props: Props) => {
  return (
    <>
      <HomeTitlePage />
      <Container>
        <WhyUs />
        <Schedule props={scheduleProps} />
        <WhereWeLocated />
      </Container>
    </>
  );
};
export default Home;
