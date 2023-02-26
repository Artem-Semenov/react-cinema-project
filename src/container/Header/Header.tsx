import Container from "components/Container/Container";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <Container>
        <nav className="header__wrapper">
          <ul className="header__body">
            <li>
              <button>Розклад</button>
            </li>
            <li>
              <button>Дітям</button>
            </li>
            <li>
              <button>3D Панорама</button>
            </li>
            <li>
              <button>Ігротека</button>
            </li>
            <li>
              <button>Burger CIty</button>
            </li>
            <li>
              <button>Контакти</button>
            </li>
          </ul>
        </nav>
      </Container>
    </div>
  );
};
export default Header;
