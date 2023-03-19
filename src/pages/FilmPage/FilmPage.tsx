import Container from "components/Container/Container";
import { useLocation } from "react-router-dom";
import filmsData from "utils/filmsData";
import occupiedSeatsData from "utils/occupiedSeatsData";

type Props = {};
const FilmPage = (props: Props) => {
  const location = useLocation();
  const { time, id } = location.state;

  const film = filmsData.find((el) => el.id === id);

  console.log(film);
  const {
    countryFrom,
    createdBy,
    description,
    genre,
    img,
    releasedOn,
    timeArr,
    title,
    actors,
  } = film!;

  return (
    <>
      <Container>
        <div className="film__content">
          <div className="film__content_img">
            <img src={img} alt={title} />
          </div>
          <div className="film__content_body">
            <div className="film__content_description">
              <div className="film__content_title">{title}</div>
              <div className="film__content_time">{timeArr}</div>
              <div className="film__content_country">{countryFrom}</div>
              <div className="film__content_releasedOn">{releasedOn}</div>
              <div className="film__content_creator">{createdBy}</div>
              <div className="film__content_genre">{genre}</div>
              <div className="film__content_actors">{actors}</div>
              <div className="film__content_text">{description}</div>
            </div>
            <div className="film__content_booking"></div>
            <div className="film__content_booking-finish"></div>
          </div>
        </div>
      </Container>
    </>
  );
};
export default FilmPage;
