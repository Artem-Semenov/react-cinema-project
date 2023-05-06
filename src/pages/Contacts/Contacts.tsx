import Map from "components/GoogleMap/GoogleMap";
import styles from "./Contacts.module.scss";

type Props = {};

const Contacts = (props: Props) => {
  const { map, desc } = styles;
  return (
    <div className="container">
      <div className={desc}>
        <h2>Наші контакти</h2>
        <div>Адреса: <a href="https://goo.gl/maps/qZFtA9VHWVaCiuQv6" target="_blank">вулиця Легоцького, 19а, Ужгород, ТРЦ "TOKYO", 3й поверх</a></div>
        <div>Телефон: <a href="tel:+380665916927">+38 (066) 591 69 27</a></div>
        <div>Пошта: <a href="mailto:support@5element.uz.ua">support@5element.uz.ua</a></div>
        <div> Ми на мапі:</div>
      </div>
      <div className={map}>
        <Map />
      </div>
    </div>
  );
};
export default Contacts;
