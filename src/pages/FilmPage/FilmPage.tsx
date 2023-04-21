import Container from "components/Container/Container";
import { useLocation } from "react-router-dom";
import filmsData, { Film } from "utils/filmsData";
import "./FilmPage.scss";
import ScheduleTimeItem from "components/Schedule/ScheduleListItem/ScheduleTimeItem/ScheduleTimeItem";
import Button from "components/Button/Button";
import { useAppSelector } from "redux/hooks";
import { useState } from "react";
import SeatsSelect, { selectedSeat } from "components/SeatsSelect/SeatsSelect";

type Props = {};

const FilmPage = (props: Props) => {
  const windowWidth = useAppSelector((state) => state.windowSize);
  const location = useLocation();
  const { time, id } = location.state;

  let {
    countryFrom,
    createdBy,
    description,
    genre,
    img,
    releasedOn,
    timeArr,
    title,
    actors,
  }: Film = {
    countryFrom: "",
    createdBy: "",
    description: "",
    genre: [],
    img: "",
    releasedOn: "",
    timeArr: [],
    title: "",
    actors: [],
  };

  const film: Film = filmsData.find((el) => el?.id === id);

  console.log(film);

  if (film) {
    countryFrom = film.countryFrom;
    createdBy = film.createdBy;
    description = film.description;
    genre = film.genre;
    img = film.img;
    releasedOn = film.releasedOn;
    timeArr = film.timeArr;
    title = film.title;
    actors = film.actors;
  }

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

  const [openSeatsSelect, setOpenSeatsSelect] = useState(false);

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
        <Button
          title="Забронювати"
          clickHandler={() => setOpenSeatsSelect(true)}
        />
        <Button title="Дивитись трейлер" trailerLink="link" />
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

  const shortFilmDesc = () => (
    <div className="film__content_short-desc">
      <div>Місто Ужгород, 5 Елемент, зал CineMax</div>
      <div>24 Січня, 20:35</div>
      <div>2D</div>
    </div>
  );

  const selectedSeats = useAppSelector((state) => state.addSelectedSeats);
  return (
    <>
      <Container>
        <div className="film__wrapper">
          {openSeatsSelect && (
            <button
              className="backToTheDescBtn"
              onClick={() => setOpenSeatsSelect(false)}>
              <svg
                width="6"
                height="9"
                viewBox="0 0 6 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5.01686 0.692228C4.96866 0.646192 4.9114 0.609667 4.84837 0.584746C4.78533 0.559825 4.71776 0.546997 4.64951 0.546997C4.58126 0.546997 4.51368 0.559825 4.45065 0.584746C4.38761 0.609667 4.33036 0.646192 4.28216 0.692228L0.79131 4.01814C0.752831 4.05472 0.722302 4.09818 0.701473 4.14602C0.680643 4.19386 0.669922 4.24515 0.669922 4.29694C0.669922 4.34874 0.680643 4.40002 0.701473 4.44787C0.722302 4.49571 0.752831 4.53916 0.79131 4.57575L4.28216 7.90166C4.48555 8.09544 4.81347 8.09544 5.01686 7.90166C5.22025 7.70788 5.22025 7.39546 5.01686 7.20168L1.97015 4.29892L5.02101 1.39221C5.22025 1.19843 5.22025 0.886008 5.01686 0.692228Z"
                  fill="white"
                />
              </svg>
              <span>Назад до опису</span>
            </button>
          )}
          {openSeatsSelect && windowWidth < 767 && (
            <div className="film__content_title ">{title}</div>
          )}
          {openSeatsSelect && windowWidth < 768 && shortFilmDesc()}

          {openSeatsSelect && windowWidth < 768 && (
            <SeatsSelect id={id} time={time === -1 ? timeArr[0] : time} />
          )}
          <div className="film__content">
            {!openSeatsSelect && windowWidth < 768 && (
              <div className="film__content_img">
                <img src={img} alt={title} />
              </div>
            )}

            {windowWidth > 767 && (
              <div className="film__content_img">
                <img src={img} alt={title} />
              </div>
            )}

            <div className="film__content_body">
              {openSeatsSelect && windowWidth > 767 && (
                <div className="film__content_title ">{title}</div>
              )}
              {openSeatsSelect && windowWidth > 767 && shortFilmDesc()}
              {openSeatsSelect && windowWidth > 767 && windowWidth < 1024 && (
                <div className="selected_seats__wrapper">
                  {selectedSeats.map((el, i) =>
                    selectedSeat(el.row!, el.seat!, i)
                  )}
                </div>
              )}

              {openSeatsSelect && windowWidth > 1023 && (
                <SeatsSelect id={id} time={time === -1 ? timeArr[0] : time} />
              )}
              {windowWidth < 768 && !openSeatsSelect && timeAndButtonsBlock()}
              {!openSeatsSelect && (
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
              )}
              {!openSeatsSelect && windowWidth > 767 && windowWidth < 1024
                ? timeAndButtonsBlock()
                : windowWidth > 1023 && !openSeatsSelect
                ? buttonBlock()
                : ""}
              <div className="film__content_booking"></div>
              <div className="film__content_booking-finish"></div>
            </div>
          </div>
          {windowWidth > 1023 && (
            <div className="selected_seats__wrapper selected_seats__wrapper__desktop">
              {selectedSeats.map((el, i) => selectedSeat(el.row!, el.seat!, i))}
            </div>
          )}
          {openSeatsSelect && windowWidth > 767 && windowWidth < 1024 && (
            <SeatsSelect id={id} time={time === -1 ? timeArr[0] : time} />
          )}
          {!openSeatsSelect && (
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
          )}
        </div>
      </Container>
    </>
  );
};
export default FilmPage;
