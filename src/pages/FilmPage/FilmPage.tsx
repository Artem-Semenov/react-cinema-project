import Container from "components/Container/Container";
import { NavLink, useLocation } from "react-router-dom";
import filmsData, { Film } from "utils/filmsData";
import "./FilmPage.scss";
import ScheduleTimeItem from "components/Schedule/ScheduleListItem/ScheduleTimeItem/ScheduleTimeItem";
import Button from "components/Button/Button";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { useCallback, useEffect, useState } from "react";
import SeatsSelect, { selectedSeat } from "components/SeatsSelect/SeatsSelect";
import SvgIcon from "components/Sprite/Sprite";
import FilmsSlider from "components/FilmsSlider/FilmsSlider";
import { addSelectedSeats } from "redux/selectedSeats";
import SelectDateTime from "components/SelectDateTime/SelectDateTime";
import Form from "components/Form/Form";

type Props = {};

const FilmPage = (props: Props) => {
  const windowWidth = useAppSelector((state) => state.windowSize);
  const location = useLocation();
  const dispatch = useAppDispatch();

  let time: string | null = null,
    idFromClick: number | null = null;

  if (location.state) {
    time = location.state.time;
    idFromClick = location.state.id;
  }

  const { pathname } = location;
  const [openSeatsSelect, setOpenSeatsSelect] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const selectedSeats = useAppSelector((state) => state.addSelectedSeats);

  useEffect(() => {
    dispatch(addSelectedSeats([]));
    setOpenSeatsSelect(false);
  }, [dispatch, pathname]);

  let film: Film;
  if (idFromClick) {
    film = filmsData.find((el) => el.id === idFromClick)!;
  } else {
    film = filmsData.find((el) => {
      let pathArr = pathname.split("/");
      return el.titleForDomain === pathArr[pathArr.length - 1];
    })!;
  }

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
    id,
  } = film;

  const [selectedTime, setSelectedTime] = useState(timeArr[0]);

  console.log(selectedTime);

  const timeClickHandle = () => {
    setOpenSeatsSelect(true);
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

  const [appear, setAppear] = useState(true);
  const [appearStyle, setAppearStyle] = useState<string>("appear");

  const setAppearForm = () => {
    setShowForm(true);
    setAppearStyle("appear");
  };

  const setDisappearForm = () => {
    setAppearStyle("disappear");
    setTimeout(() => {
      setShowForm(false);
    }, 300);
  };

  const bookingClickHandler = useCallback(() => {
    if (selectedSeats.length === 0) return alert("Choose at least one seat!");
    setAppear(!appear);

    appear && setAppearForm();
    !appear && setDisappearForm();
  }, [appear, selectedSeats.length]);

  if (showForm) {
    document.getElementById("body")?.classList.toggle("lock", true);
  } else {
    document.getElementById("body")?.classList.toggle("lock", false);
  }

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
            <div className="film__content_title_wrapper ">
              <div>{title}</div>
            </div>
          )}
          {openSeatsSelect && windowWidth < 768 && shortFilmDesc()}
          {openSeatsSelect && windowWidth < 768 && (
            <SeatsSelect
              id={id}
              time={time === null ? timeArr[0] : time}
              bookingClickHandler={bookingClickHandler}
            />
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
                <div className="film__content_title_wrapper ">
                  <div>{title}</div>
                  <SelectDateTime
                    timeArr={timeArr}
                    setTimeFunc={(time: string) => setSelectedTime(time)}
                  />
                </div>
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
                <SeatsSelect
                  id={id}
                  time={
                    timeArr.includes(selectedTime) ? selectedTime : timeArr[0]
                  }
                  bookingClickHandler={bookingClickHandler}
                />
              )}
              {windowWidth < 768 && !openSeatsSelect && timeAndButtonsBlock()}
              {!openSeatsSelect && (
                <div className="film__content_description">
                  <div className="film__content_title_wrapper ">
                    <div>{title}</div>
                  </div>
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
            <SeatsSelect
              id={id}
              time={time === null ? timeArr[0] : time}
              bookingClickHandler={bookingClickHandler}
            />
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
      {showForm && (
        <Form
          callback={bookingClickHandler}
          filmName={title}
          filmDate={`24.01T11:45`}
          animationName={appearStyle}
        />
      )}
    </>
  );
};
export default FilmPage;
