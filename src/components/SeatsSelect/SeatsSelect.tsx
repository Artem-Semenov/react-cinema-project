import { useState } from "react";
import "./SeatsSelecs.scss";
import occupiedSeatsData from "utils/occupiedSeatsData";
import Button from "components/Button/Button";

type Props = {
  id: number;
  time: string;
};

type SelectedSeats = {
  ["row"]: number;
  ["seat"]: number;
}[];
const SeatsSelect = ({ id, time }: Props) => {
  const [selectedSeats, setSelectedSeats] = useState<SelectedSeats>([]);

  const handleSeatSelect = (row: number, seat: number) => {
    setSelectedSeats((state) => {
      let stateCopy = [...state];
      let existingEl = state.find((el) => el.row === row && el.seat === seat);
      let indexOfExistingEl;
      if (existingEl) {
        indexOfExistingEl = state.indexOf(existingEl);
        stateCopy.splice(indexOfExistingEl, 1);
        return stateCopy;
      }

      let result = [
        ...state,
        {
          ["row"]: row,
          ["seat"]: seat,
        },
      ];
      return result;
    });
  };

  console.log(selectedSeats);
  const selectedSeat = (row: number, seat: number, i: number) => {
    return (
      <div key={i}>
        <div>{seat} місце</div>
        <div>{row} ряд</div>
        <div>150 грн</div>
      </div>
    );
  };

  const buttonBlock = () => {
    return (
      <div className="film__content_buttons-wrapper">
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
              <span className="seatsSelect__row-index-left">{i + 1}</span>
              {Object.values(occupiedSeatsData[id][time][el]).map((el, ind) => {
                return (
                  <div
                    style={
                      el
                        ? { background: "gray" }
                        : selectedSeats.find(
                            (el) => el.row === i + 1 && el.seat === ind + 1
                          )
                        ? { background: "#0500FF" }
                        : undefined
                    }
                    onClick={() => handleSeatSelect(i + 1, ind + 1)}
                    key={ind}
                    className="seatsSelect__seat"></div>
                );
              })}
              <span
                className="seatsSelect__row-index-right"
                style={
                  i === 1 || i === 2 ? { marginLeft: "unset" } : undefined
                }>
                {i + 1}{" "}
              </span>
            </div>
          );
        })}
      </div>
      {selectedSeats.map((el, i) => selectedSeat(el.row, el.seat, i))}
      {buttonBlock()}
    </div>
  );
};
export default SeatsSelect;
