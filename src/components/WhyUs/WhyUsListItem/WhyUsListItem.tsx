import "./WhyUsListItem.css";

type Props = {
  icon: string;
  text: string;
  title: string;
};
const WhyUsListItem = ({ icon, title, text }: Props) => {
  return (
    <div className="why-us-list-item__wrapper">
      <div className="body">
        <div
          className="img"
          style={{
            background: `url("${icon}") center no-repeat`,
          }}
        ></div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};
export default WhyUsListItem;
