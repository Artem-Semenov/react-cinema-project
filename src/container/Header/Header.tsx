import Container from "components/Container/Container";
import "./Header.scss";
import { smoothScroll } from "utils/helpers/smoothScroll";
import { classToggle } from "utils/helpers/classtoggle";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Container>
        <div className="header__wrapper">
          <div
            onClick={() => {
              classToggle("burger-body", "show");
              classToggle("burger-button", "show");
            }}
            className="burger-menu__button"
            id="burger-button"
          >
            <span></span>
          </div>
          <a href="tel:0660000000" className="tel"> </a>
          <nav>
            <ul className="header__body">
              <li>
                <NavLink to={'/schedule'}>
                <button >
                  Розклад
                </button>
                </NavLink>
               
              </li>
              <div className="burger-menu__body" id="burger-body">
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
              </div>
              <li>
                <button onClick={() => smoothScroll("footer")}>Контакти</button>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </div>
  );
};
export default Header;
