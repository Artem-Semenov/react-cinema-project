import "./Locomotive.css";

type Props = {};
const Locomotive = (props: Props) => {
  return (
    <div className="locomotive" style={{ marginTop: "-70px" }}>
      <div className="locomotive__body">
        <div className="locomotive__body_bg"></div>
        <div className="locomotive__content">
          <div className="locomotive__item">Працюємо з генератором!</div>
          <div className="locomotive__item">Кино без перерв!</div>
          <div className="locomotive__item">Працюємо з генератором!</div>
          <div className="locomotive__item">Кино без перерв!</div>
          <div className="locomotive__item">Працюємо з генератором!</div>
          </div>
      </div>
    </div>
  );
};
export default Locomotive;
