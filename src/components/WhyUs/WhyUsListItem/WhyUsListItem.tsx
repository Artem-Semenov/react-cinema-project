import "./WhyUsListItem.css";

type Props = {
  icon: string;
  text: string;
  title: string;
};
const WhyUsListItem = ({ icon, title, text }: Props) => {

  const onAccordBtnClick = (e:React.MouseEvent<HTMLDivElement>) => {
    let innerP = e.currentTarget.querySelector('p');
    if (!innerP) return;
    console.log(window.innerWidth)
    if (window.innerWidth > 768) return;
    if (e.currentTarget.classList.contains('acc-show')) {
      innerP.style.maxHeight = '0px';
      e.currentTarget.classList.remove('acc-show')
    } else {
      innerP.style.maxHeight = innerP.scrollHeight + 'px';
      e.currentTarget.classList.add('acc-show')
    }
  }

  return (
    <div className="why-us-list-item__wrapper" onClick={(e) => onAccordBtnClick(e) }>
      <div className="body">
        <div
          className="img"
          style={{
            background: `url("${icon}") center no-repeat`,
            backgroundSize: 'contain',
          }}
        ></div>
        <span className="arrow-down"></span>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};
export default WhyUsListItem;
