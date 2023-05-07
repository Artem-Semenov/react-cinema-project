import { MouseEventHandler } from "react";
import styles from "./SelectDateTime.module.scss";
import SvgIcon from "components/Sprite/Sprite";

type Props = {
  timeArr: string[];
  setTimeFunc: Function
};

const { wrapper, date, dateDisplay, dateDisplayWrapper, svg } =
  styles;

const SelectDateTime = ({ timeArr, setTimeFunc }: Props) => {

  const onClickDateHandler: MouseEventHandler<HTMLDivElement> = (event) => {
    const target = event.currentTarget;
    target.classList.toggle("open");
    if (!target.classList.contains("open")) {
      target.style.height = "29px";
    } else {
      target.style.height = event.currentTarget.scrollHeight + "px";
    }
  };

  const onclickDateItemHandler: MouseEventHandler<HTMLLIElement> = (e) => {
    document.querySelectorAll(".dateItem").forEach((el) => {
      (el as HTMLElement).style.order = "";
      (el as HTMLElement).style.borderBottom = "none";
    });
    e.currentTarget.style.order = "-1";
    e.currentTarget.style.borderBottom = "1px solid white";
  };

  const onclickTimeItemHandler: MouseEventHandler<HTMLLIElement> = (e) => {
    document.querySelectorAll(".timeItem").forEach((el) => {
      (el as HTMLElement).style.order = "";
      (el as HTMLElement).style.borderBottom = "none";
    });
    e.currentTarget.style.order = "-1";
    e.currentTarget.style.borderBottom = "1px solid white";

    setTimeFunc(e.currentTarget.textContent!);
  };

  const timeListItem = (time: string, ind: number) => {
    return (
      <li className="timeItem" onClick={onclickTimeItemHandler} key={ind}>
        {time}
      </li>
    );
  };

  return (
    <div className={wrapper}>
      <div className={date} onClick={onClickDateHandler}>
        <div className={dateDisplayWrapper}>
          <div className={dateDisplay}>
            <ul>
              <li className="dateItem" onClick={onclickDateItemHandler}>
                24.01
              </li>
              <li className="dateItem" onClick={onclickDateItemHandler}>
                25.01
              </li>
              <li className="dateItem" onClick={onclickDateItemHandler}>
                26.01
              </li>
              <li className="dateItem" onClick={onclickDateItemHandler}>
                27.01
              </li>
              <li className="dateItem" onClick={onclickDateItemHandler}>
                28.01
              </li>
              <li className="dateItem" onClick={onclickDateItemHandler}>
                29.01
              </li>
            </ul>
          </div>
          <div className={svg}>
            <SvgIcon iconName="arrow-down-white" />
          </div>
        </div>
      </div>
      <div className={date} onClick={onClickDateHandler} style={{right: '0'}}>
        <div className={dateDisplayWrapper}>
          <div className={dateDisplay}>
            <ul>{timeArr.map((el, ind) => timeListItem(el, ind))}</ul>
          </div>
          <div className={svg}>
            <SvgIcon iconName="arrow-down-white" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default SelectDateTime;
