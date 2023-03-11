import "./Header.scss";
import { classToggle } from "utils/helpers/classtoggle";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      
        <h1 className="center-logo">
          <NavLink to={"/"}>CINEPLEX</NavLink>
        </h1>
        <div className="header__wrapper schedule__header-wrapper">
          <div
            onClick={() => {
              classToggle("burger-body", "show");
              classToggle("burger-button", "show");
            }}
            className="burger-menu__button"
            id="burger-button">
            <span></span>
          </div>
          <a href="tel:0660000000" className="tel">
            {" "}
          </a>
          <nav>
            <ul className="header__body">
              <li>
                <NavLink to={"/schedule"}>
                  Розклад
                </NavLink>
              </li>
              <div className="burger-menu__body" id="burger-body">
                <li>
                  <NavLink to={"/for-kids"}>Дітям</NavLink>
                </li>
                <li>
                  <NavLink to={"/3d"}>3D Панорама</NavLink>
                </li>
                <li>
                  <NavLink to={"/game-center"}>Ігротека</NavLink>
                </li>
                <li>
                  <NavLink to={"/burger-city"}>Burger CIty</NavLink>
                </li>
              </div>
              <li>
                <NavLink to={"/contacts"}>Контакти</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      
    </div>
  );
};
export default Header;
