import Container from "components/Container/Container";
import "./Header.css";

type Props = {};
const Header = (props: Props) => {
  return (
    <div className="header">
      <Container>
        <nav className="header__wrapper">
          <ul className="header__body">
            <li>
              <a href="#">Головна</a>
            </li>
            <li>
              <a href="#">Розклад</a>
            </li>
            <li>
              <a href="#">Дітям</a>
            </li>
            <li>
              <a href="#">3D Панорама</a>
            </li>
            <li>
              <a href="#">Ігротека</a>
            </li>
            <li>
              <a href="#">Burger CIty</a>
            </li>
            <li>
              <a href="#">Контакти</a>
            </li>
          </ul>
        </nav>
      </Container>
    </div>
  );
};
export default Header;
