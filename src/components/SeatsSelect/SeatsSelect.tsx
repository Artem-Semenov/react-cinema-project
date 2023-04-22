import "./SeatsSelecs.scss";
import occupiedSeatsData from "utils/occupiedSeatsData";
import Button from "components/Button/Button";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { addSelectedSeats } from "redux/selectedSeats";

type Props = {
  id: number;
  time: string;
};

/* type SelectedSeats = {
  ["row"]: number;
  ["seat"]: number;
}[]; */

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

const SeatsSelect = ({ id, time }: Props) => {
  const windowSize = useAppSelector((state) => state.windowSize);
  const selectedSeats = useAppSelector((state) => state.addSelectedSeats);

  const dispatch = useAppDispatch();
  // const [selectedSeats, setSelectedSeats] = useState<SelectedSeats>([]);

  const handleSeatSelect = (row: number, seat: number) => {
    dispatch(addSelectedSeats({ row, seat }));
  };

  console.log(selectedSeats);

 

  const buttonBlock = (zeroRightPad = false) => {
    return (
      <div
        className="film__content_buttons-wrapper"
        style={zeroRightPad ? { paddingRight: "0px" } : undefined}>
        <Button title="Забронювати" />
        <Button title="Оплатити квитки" trailerLink="link" />
      </div>
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
