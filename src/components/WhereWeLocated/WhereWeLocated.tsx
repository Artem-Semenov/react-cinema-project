import Map from "components/GoogleMap/GoogleMap";
import "./WhereWeLocated.scss";

type Props = {};
const WhereWeLocated = (props: Props) => {
  return (
    <div className="where-we-located__body">
      <h2 className="where-we-located__title">Де ми знаходимось?</h2>
      <div className="where-we-located__content">
        <div className="map_block">
          <Map apiKey="AIzaSyDOuxr5zhrFVF5-7I7Yi6mXMxg3p0OhSoo" />
          <p>
            Адрес: вулиця Легоцького, 19а, Ужгород, Закарпатська область, 88000
          </p>
        </div>
        <div className="photo_block">
          <div className="img__wrapper">
            <picture>
              <source
                srcSet="/images/WhereWeLocated/WhereWeLocated.png"
                media="(min-wdith: 768)"
                height="auto"
              />
              <img
                src="/images/WhereWeLocated/WhereWeLocated.png"
                height="300"
                alt="location"
              />
            </picture>
          </div>
          <p>Всередині ТРЦ "TOKYO", на 3му поверху</p>
        </div>
      </div>
      <div className="tel__text">
        <a href="tel:+38 (066) 591 69 27">+38 (066) 591 69 27</a>
      </div>
    </div>
  );
};
export default WhereWeLocated;
