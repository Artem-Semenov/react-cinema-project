import { useAppSelector } from "redux/hooks";
import "./Form.scss";
import Button from "components/Button/Button";
import { useCallback, useEffect, useRef, useState } from "react";

type Props = {
  callback: () => void;
  filmName: string;
  filmDate: string;
  animationName?: string;
};

const Form = ({ callback, filmName, filmDate, animationName }: Props) => {
  const selectedSeats = useAppSelector((state) => state.addSelectedSeats);

  const [success, setSuccess] = useState(false);

  console.log(selectedSeats);

  const form = useRef<HTMLFormElement>(null);
  const name = useRef<HTMLInputElement>(null);
  const surname = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const radio1 = useRef<HTMLInputElement>(null);
  const radio2 = useRef<HTMLInputElement>(null);

  const validateForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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

    if (!radio1.current?.checked && !radio2.current?.checked) {
      radio1.current?.classList.toggle("error", true);
      radio2.current?.classList.toggle("error", true);
      return;
    } else {
      radio1.current?.classList.remove("error");
      radio2.current?.classList.remove("error");
    }

    setSuccess(true);
  };

  const closeFormOnClickOutside = useCallback((e: Event) => {
    const target = e.target as HTMLElement;

    if (!target) return;

    if (target.classList.contains("form__wrapper")) {
      console.log("callback");
      callback();
    }
  }, [callback]);

  useEffect(() => {
    document.addEventListener("click", closeFormOnClickOutside);
    return () => {
      document.removeEventListener("click", closeFormOnClickOutside);
    };
  }, [closeFormOnClickOutside]);

  return (
    <div className="form__wrapper">
      <div
        className="form__content"
        style={{ animationName: animationName ?? "" }}>
        {!success && (
          <div className="form__content_inner">
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
        )}
        {success && (
          <div className="success__content">
            <h3 className="success__title">Вітаємо!</h3>
            <div className="success__desc">
              Білети успішно заброньовано за вашим іменем та номером телефону
            </div>
            <div className="success__reminder">
              Нагадуємо, що бронь знімається за 30 хвилин до початку сеансу
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Form;
