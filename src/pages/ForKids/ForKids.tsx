import Schedule from "components/Schedule/Schedule";
import filmsData from "utils/filmsData";
import styles from './ForKids.module.scss'

type Props = {};
const ForKids = (props: Props) => {
  const scheduleProps = {
    dateFrom: "19.01",
    dateTo: "25.01",
    items: filmsData.filter(el => el.forKids),
    classNames: 'schedulePage mb-80'
   
  }

  return (
    <div className="container">
      <h2 className={styles.title}>
        Для наших найменших глядачів - окрема підбірка мультфільмів які точно їм
        сподобаються!
      </h2>
      <Schedule props={scheduleProps} />
    </div>
  );
};
export default ForKids;
