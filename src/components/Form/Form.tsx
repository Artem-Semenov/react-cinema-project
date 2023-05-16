import { useAppSelector } from "redux/hooks";
import "./Form.scss";
import Button from "components/Button/Button";
import { useRef } from "react";
import { FormEventHandler } from "react";

type Props = {
  callback: () => void;
  filmName: string;
  filmDate: string;
};

const Form = ({ callback, filmName, filmDate }: Props) => {
  const selectedSeats = useAppSelector((state) => state.addSelectedSeats);
  console.log(selectedSeats);

  const form = useRef<HTMLFormElement>(null);
  const name = useRef<HTMLInputElement>(null);
  const surname = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const radio1 = useRef<HTMLInputElement>(null);
  const radio2 = useRef<HTMLInputElement>(null);

  const validateForm = (e: React.FormEvent<HTMLFormElement>) => {
    debugger;
    e.preventDefault();
    console.log(e);

    const [nameValue, surnameValue, emailValue] = [
      name?.current?.value || "",
      surname?.current?.value || "",
      email?.current?.value || "",
    ];

    if (!nameValue) {
      name.current?.classList.toggle("error", true);
      return;
    } else {
      name.current?.classList.remove("error");
    }

    if (!surnameValue) {
      surname.current?.classList.toggle("error", true);
      return;
    } else {
      surname.current?.classList.remove("error");
    }

    if (!/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(emailValue)) {
      email.current?.classList.toggle("error", true);
      return;
    } else {
      email.current?.classList.remove("error");
    }

    callback();
  };

  return (
    <div className="form__wrapper">
      <div className="form__content">
        <h3 className="form__wrapper_title">
          Будь ласка, заповніть інформацію про себе
        </h3>
        <div className="date">
          Дата: {filmDate.split("T")[0]}, час: {filmDate.split("T")[1]}
        </div>
        <div className="form__name">Фільм: {filmName}</div>
        <div className="seatsWrapper">
          <div>Обрані місця:</div>
          <ul>
            {selectedSeats.map((el, ind) => (
              <li className="seatsWrapper__li" key={ind}>
                Ряд: {el.row} місце: {el.seat}
              </li>
            ))}
          </ul>
        </div>
        <form ref={form} className="form" onSubmit={validateForm}>
          <div className="form__field">
            <label htmlFor="">Ім'я</label>
            <input ref={name} type="text" />
          </div>
          <div className="form__field">
            <label htmlFor="">Фамілія</label>
            <input ref={surname} type="text" />
          </div>
          <div className="form__field">
            <label htmlFor="">Пошта</label>
            <input ref={email} type="email" />
          </div>
          <div className="form__field">
            <label htmlFor="">Форма оплати</label>
            <div className="form__payment_type">
              <div className="form__payment_type_item">
                <label htmlFor="payment__type_1">Кaртка</label>
                <input
                  ref={radio1}
                  type="radio"
                  className="form__radio-btn"
                  name="payment__type"
                  id="payment__type_1"
                />
                <div className="styled_radio"></div>
              </div>
              <div className="form__payment_type_item">
                <label htmlFor="payment__type_2">Готівка</label>
                <input
                  ref={radio2}
                  type="radio"
                  className="form__radio-btn"
                  name="payment__type"
                  id="payment__type_2"
                />
                <div className="styled_radio"></div>
              </div>
            </div>
          </div>
          <Button type="submit" title="Забронювати" />
        </form>
      </div>
    </div>
  );
};
export default Form;
