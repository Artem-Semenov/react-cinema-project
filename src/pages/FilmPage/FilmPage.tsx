import Container from "components/Container/Container";
import { NavLink, useLocation } from "react-router-dom";
import filmsData, { Film } from "utils/filmsData";
import "./FilmPage.scss";
import ScheduleTimeItem from "components/Schedule/ScheduleListItem/ScheduleTimeItem/ScheduleTimeItem";
import Button from "components/Button/Button";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { useEffect, useState } from "react";
import SeatsSelect, { selectedSeat } from "components/SeatsSelect/SeatsSelect";
import SvgIcon from "components/Sprite/Sprite";
import FilmsSlider from "components/FilmsSlider/FilmsSlider";
import { addSelectedSeats } from "redux/selectedSeats";

type Props = {};

const FilmPage = (props: Props) => {
  const windowWidth = useAppSelector((state) => state.windowSize);
  const location = useLocation();
  const dispatch = useAppDispatch();

  const { time, id } = location.state;
  const { pathname } = location;
  const [openSeatsSelect, setOpenSeatsSelect] = useState(false);

  useEffect(() => {

    dispatch(addSelectedSeats([]));
    setOpenSeatsSelect(false);
  }, [dispatch, pathname]);


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
          <div className="film__wrapper_breadCrumbs">
            <SvgIcon iconName="arrow-back-left" />
            <NavLink to="/schedule">Розклад</NavLink>/
            <button onClick={() => setOpenSeatsSelect(false)}>{title}</button>
            {openSeatsSelect && (
              <>
                /<span>Бронювання</span>
              </>
            )}
          </div>
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
          {windowWidth > 1023 && openSeatsSelect && (
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

          <div className="film__slider">
            <div className="film__slider__title">Популярні кіно</div>
            <FilmsSlider />
          </div>
        </div>
      </Container>
    </>
  );
};
export default FilmPage;
