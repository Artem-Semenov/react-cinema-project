import "./Header.scss";
import { classToggle } from "utils/helpers/classtoggle";
import { NavLink } from "react-router-dom";

const Header = () => {
  const handleBurgerClick = () => {
    classToggle("body", "lock");
    classToggle("burger-body", "show");
    classToggle("burger-button", "show");
  };

  const closeBurgerOnLinkiClick = () => {
    if (document.getElementById("body")?.classList.contains("lock")) {
      handleBurgerClick();
    }
  };
  return (
    <div className="header">
      <div className="container">
        <h1 className="center-logo">
          <NavLink to={"/"}>CINEPLEX</NavLink>
        </h1>
      </div>
      <div className="header__wrapper schedule__header-wrapper">
        <div className="container">
          <div
            onClick={handleBurgerClick}
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
                <NavLink to={"/schedule"} onClick={closeBurgerOnLinkiClick}>
                  Розклад
                </NavLink>
              </li>
              <div className="burger-menu__body" id="burger-body">
                <li>
                  <NavLink to={"/for-kids"} onClick={closeBurgerOnLinkiClick}>
                    Дітям
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/3d"} onClick={closeBurgerOnLinkiClick}>
                    3D Панорама
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/game-center"}
                    onClick={closeBurgerOnLinkiClick}>
                    Ігротека
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/burger-city"}
                    onClick={closeBurgerOnLinkiClick}>
                    Burger CIty
                  </NavLink>
                </li>
              </div>
              <li>
                <NavLink to={"/contacts"} onClick={closeBurgerOnLinkiClick}>
                  Контакти
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};
export default Header;
