import "./Button.scss";

type Props = {
  title: string;
  clickHandler?: React.MouseEventHandler<HTMLButtonElement>;
  trailerLink?: string;
};
const Button = ({ trailerLink, clickHandler, title }: Props) => {
  return (
    <>
      {trailerLink ? (
        <button className="clickable-button" onClick={clickHandler}>{title}</button>
      ) : (
        <a className="clickable-button" href={trailerLink}>{title}</a>
      )}
    </>
  );
};
export default Button;
