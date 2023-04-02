import { Dispatch } from "@reduxjs/toolkit";
import "./Button.scss";
import { SetStateAction } from "react";

type Props = {
  title: string;
  clickHandler?: () => void
  trailerLink?: string;
};
const Button = ({ trailerLink, clickHandler, title }: Props) => {
  return (
    <>
      {trailerLink ? (
        <a className="clickable-button" href={trailerLink} target="_blank">
          {title}
        </a>
      ) : (
        <button className="clickable-button" onClick={clickHandler}>
          {title}
        </button>
      )}
    </>
  );
};
export default Button;
