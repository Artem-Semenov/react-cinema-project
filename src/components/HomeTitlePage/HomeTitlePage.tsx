import Container from "components/Container/Container";
import Locomotive from "components/Locomotive/Locomotive";
import "./HomeTitlePage.scss";
type Props = {};
const HomeTitlePage = (props: Props) => {
  return (
    <>
      <div className="bg-wrapper">
        <Container mh100vh={true}>
          <h1 className="title__body">
            <div>CINEPLEX</div>
            <div>5th ELEMENT</div>
          </h1>
        </Container>
      </div>
      <Locomotive />
    </>
  );
};
export default HomeTitlePage;
