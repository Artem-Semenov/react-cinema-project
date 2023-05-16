import "./Button.scss";

type Props = {
  title: string;
  clickHandler?: () => void
  trailerLink?: string;
  type?: "button" | "submit" | "reset" | undefined
};
const Button = ({ trailerLink, clickHandler, title, type }: Props) => {
  return (
    <>
      {trailerLink ? (
        <a className="clickable-button" href={trailerLink} target="_blank" rel="noreferrer">
          {title}
        </a>
      ) : (
        <button type={type} className="clickable-button" onClick={clickHandler}>
          {title}
        </button>
      )}
    </>
  );
};
export default Button;
