import "./SeatsSelecs.scss";
import occupiedSeatsData from "utils/occupiedSeatsData";
import Button from "components/Button/Button";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { addSelectedSeats } from "redux/selectedSeats";

type Props = {
  id: number;
  time: string;
  bookingClickHandler: () => void
};


export const selectedSeat = (row: number, seat: number, i: number) => {
  return (
    <div className="selected_seats__block" key={i}>
      <div className="selected_seats__item">{seat} місце</div>
      <div className="selected_seats__item">{row} ряд</div>
      <div className="selected_seats__item selected_seats__item-price">
        150 грн
      </div>
    </div>
  );
};

const SeatsSelect = ({ id, time, bookingClickHandler }: Props) => {
  console.log(id, time)
  const windowSize = useAppSelector((state) => state.windowSize);
  const selectedSeats = useAppSelector((state) => state.addSelectedSeats);

  const dispatch = useAppDispatch();

  const handleSeatSelect = (row: number, seat: number) => {
    dispatch(addSelectedSeats({ row, seat }));
  };

  const buttonBlock = (openSeatSelectState = false) => {
    return (
      <>
        <div
          className={`film__content_buttons-wrapper mb-0 ${
            openSeatSelectState ? "film__content_buttons-wrapper_longed" : ""
          }`}>
          <Button title="Забронювати" clickHandler={bookingClickHandler} />
          <Button title="Оплатити квитки" trailerLink="link" />
        </div>
         <p className={`film__content_buttons_desc ${
            openSeatSelectState ? "film__content_buttons-wrapper_longed" : ""
          }`}> *Бронь автоматично знімається за пів години до <br hidden={windowSize > 767 && windowSize < 1024 ? false : true}/> сеансу</p> 
      </>
    );
  };

  return (
    <div className="seatsSelect__wrapper">
      <div className="seatsSelect__titlle">
        <div className="decor"></div>
        <span>Екран</span>
      </div>
      <div className="seatsSelect__seats">
        {Object.keys(occupiedSeatsData[id][time]).map((el, i) => {
          return (
            <div
              key={i}
              className="seatsSelect__row"
              style={
                i === 1 || i === 2 ? { justifyContent: "flex-end" } : undefined
              }>
              <span className="seatsSelect__row-index seatsSelect__row-index-left">
                {i + 1}
              </span>
              {Object.values(occupiedSeatsData[id][time][el]).map((el, ind) => {
                return (
                  <div
                    style={
                      el
                        ? { background: "gray", cursor: "unset" }
                        : selectedSeats.find(
                            (el) => el.row === i + 1 && el.seat === ind + 1
                          )
                        ? { background: "#0500FF" }
                        : undefined
                    }
                    onClick={
                      !el ? () => handleSeatSelect(i + 1, ind + 1) : undefined
                    }
                    key={ind}
                    className="seatsSelect__seat"></div>
                );
              })}
              <span
                className="seatsSelect__row-index seatsSelect__row-index-right"
                style={
                  i === 1 || i === 2 ? { marginLeft: "unset" } : undefined
                }>
                {i + 1}{" "}
              </span>
            </div>
          );
        })}
      </div>
      {windowSize < 768 && (
        <div className="selected_seats__wrapper">
          {selectedSeats.map((el, i) => selectedSeat(el.row!, el.seat!, i))}
        </div>
      )}

      {buttonBlock(true)}
    </div>
  );
};
export default SeatsSelect;
