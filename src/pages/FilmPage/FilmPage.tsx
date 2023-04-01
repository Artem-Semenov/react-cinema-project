import Container from "components/Container/Container";
import { useLocation } from "react-router-dom";
import filmsData from "utils/filmsData";
// import occupiedSeatsData from "utils/occupiedSeatsData";
import "./FilmPage.scss";
import ScheduleTimeItem from "components/Schedule/ScheduleListItem/ScheduleTimeItem/ScheduleTimeItem";
import Button from "components/Button/Button";
import { useAppSelector } from "redux/hooks";

type Props = {};
const FilmPage = (props: Props) => {
  const windowWidth = useAppSelector(state => state.windowSize)
  const location = useLocation();
  const { id } = location.state;
{//time}
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

  const timeClickHandle = () => {
    console.log(id);
  };

  const accordOpenBtnClick = (e: React.MouseEvent) => {
    const accordBtn = e.currentTarget;
    const accordContent = accordBtn.nextElementSibling as HTMLElement;
    if (!accordBtn || !accordContent) return;
    accordBtn.classList.toggle("open");
    accordContent.classList.toggle("open");
    if (accordBtn.classList.contains("open")) {
      accordContent.style.height = accordContent.scrollHeight + "px";
    } else {
      accordContent.style.height = "";
    }
  };

  const timeBlock = () => {
    return (
      <div className="film__content_time">
        {timeArr.map((el, i) => (
          <ScheduleTimeItem key={i} time={el} clickHandle={timeClickHandle} />
        ))}
      </div>
    );
  };
  const buttonBlock = () => {
    return (
      <div className="film__content_buttons-wrapper">
        <Button title="Забронювати" />
        <Button title="Дивитись трейлер" />
      </div>
    );
  };
  const timeAndButtonsBlock = () => {
    return (
      <div className="timeAndButtonsBlock">
        {timeBlock()}
        {buttonBlock()}
      </div>
    );
  };
  return (
    <>
      <Container>
        <div className="film__wrapper">
          <div className="film__content_title-mobile">{title}</div>
          <div className="film__content">
            <div className="film__content_img">
              <img src={img} alt={title} />
            </div>
            <div className="film__content_body">
              {windowWidth < 768 ? timeAndButtonsBlock() : ""}
              <div className="film__content_description">
                <div className="film__content_title">{title}</div>
                {windowWidth > 1023 ? timeBlock() : ""}
                <div className="film__content_releasedOn">
                  У прокаті з {releasedOn}
                </div>
                <div className="film__content_country">
                  Країна: {countryFrom}
                </div>
                <div className="film__content_creator">
                  Режисер: {createdBy}
                </div>
                <div className="film__content_genre">
                  Жанр:{" "}
                  {genre.map((el, i) => {
                    if (i === genre.length - 1) return el;
                    return el + ", ";
                  })}
                </div>
                <div className="film__content_actors">
                  В ролях:{" "}
                  {actors.map((el, i) => {
                    if (i === actors.length - 1) return el;
                    return el + ", ";
                  })}
                </div>
                 <div className="film__content_text">{description}</div> 
              </div>
              {windowWidth > 767 && windowWidth < 1024
                ? timeAndButtonsBlock()
                : windowWidth > 1023
                ? buttonBlock()
                : ""}
              <div className="film__content_booking"></div>
              <div className="film__content_booking-finish"></div>
            </div>
          </div>
          <div className="film__content_text-mobile">
            <button
              onClick={accordOpenBtnClick}
              className="film__content_text-mobile-button"
              id="accordBtn">
              <span>Опис</span>
            </button>
            <div
              className="film__content_text-mobile-accord"
              id="accordContent">
              {description}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};
export default FilmPage;
