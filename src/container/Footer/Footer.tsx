import Container from "components/Container/Container";
import "./Footer.scss";
import { NavLink } from "react-router-dom";
import { smoothScroll } from "utils/helpers/smoothScroll";
type Props = {};
const Footer = (props: Props) => {
  return (
    <div className="footer__bg">
      <Container>
        <div className="footer__content" id="footer">
          <div className="logo" onClick={() => smoothScroll("pageTop") }>
            <div>CINEPLEX</div>
            <div>5th ELEMENT</div>
          </div>
          <nav className="footer__navigation">
            <ul>
              <li>
              <NavLink to={"/"}>Головна</NavLink>
              </li>
              <li>
              <NavLink to={"/schedule"}>
                  Розклад
                </NavLink>
              </li>
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
            </ul>
          </nav>
          <div className="footer__contacts">
            <h3 className="s-d-none">Контакти</h3>
            <ul>
              <li className="s-d-none">
                <a href="tel:+38 (066) 591 69 27">+38 (066) 591 69 27</a>
              </li>
              <li className="s-d-none">
                <a href="mailto:support@5element.uz.ua">
                  support@5element.uz.ua
                </a>
              </li>
              <li>
                <a href="https://goo.gl/maps/qZFtA9VHWVaCiuQv6" target="_blank" rel="noreferrer">
                  Адрес: вулиця Легоцького, 19а, Ужгород
                </a>
              </li>
              <li>ТРЦ "TOKYO", 3й поверх</li>
            </ul>
          </div>
          <div className="tel__text">
            <a href="tel:+38 (066) 591 69 27">+38 (066) 591 69 27</a>
          </div>
          <div className="footer__socials">
            <button className="fb-icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M22.68 0H1.32C0.969914 0 0.634167 0.139071 0.386619 0.386619C0.139071 0.634167 0 0.969914 0 1.32V22.68C0 23.0301 0.139071 23.3658 0.386619 23.6134C0.634167 23.8609 0.969914 24 1.32 24H12.816V14.7H9.696V11.1H12.816V8.4C12.7514 7.76611 12.8262 7.12575 13.0353 6.52385C13.2443 5.92194 13.5825 5.37305 14.0262 4.91569C14.4698 4.45833 15.0081 4.10357 15.6034 3.87629C16.1987 3.649 16.8364 3.5547 17.472 3.6C18.406 3.59425 19.3395 3.64233 20.268 3.744V6.984H18.36C16.848 6.984 16.56 7.704 16.56 8.748V11.064H20.16L19.692 14.664H16.56V24H22.68C22.8533 24 23.025 23.9659 23.1851 23.8995C23.3453 23.8332 23.4908 23.736 23.6134 23.6134C23.736 23.4908 23.8332 23.3453 23.8995 23.1851C23.9659 23.025 24 22.8533 24 22.68V1.32C24 1.14666 23.9659 0.975008 23.8995 0.814858C23.8332 0.654708 23.736 0.509193 23.6134 0.386619C23.4908 0.264046 23.3453 0.166815 23.1851 0.100479C23.025 0.0341429 22.8533 0 22.68 0Z" />
              </svg>
            </button>
            <button className="insta-icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M21.75 0H2.25C1.0125 0 0 1.0125 0 2.25V21.75C0 22.9875 1.0125 24 2.25 24H21.75C22.9875 24 24 22.9875 24 21.75V2.25C24 1.0125 22.9875 0 21.75 0ZM16.5 3.75C16.5 3.3375 16.8375 3 17.25 3H20.25C20.6625 3 21 3.3375 21 3.75V6.75C21 7.1625 20.6625 7.5 20.25 7.5H17.25C17.0512 7.4996 16.8607 7.42046 16.7201 7.27989C16.5795 7.13933 16.5004 6.94879 16.5 6.75V3.75ZM12 7.5C13.1734 7.5303 14.2885 8.0177 15.1077 8.85831C15.9268 9.69892 16.3853 10.8263 16.3853 12C16.3853 13.1737 15.9268 14.3011 15.1077 15.1417C14.2885 15.9823 13.1734 16.4697 12 16.5C10.8266 16.4697 9.71152 15.9823 8.89234 15.1417C8.07315 14.3011 7.6147 13.1737 7.6147 12C7.6147 10.8263 8.07315 9.69892 8.89234 8.85831C9.71152 8.0177 10.8266 7.5303 12 7.5ZM21 20.25C21 20.6625 20.6625 21 20.25 21H3.75C3.55121 20.9996 3.36067 20.9205 3.22011 20.7799C3.07954 20.6393 3.0004 20.4488 3 20.25V10.5H4.65C4.42726 11.5898 4.44978 12.7156 4.71593 13.7956C4.98208 14.8757 5.48519 15.883 6.1888 16.7446C6.89241 17.6061 7.77889 18.3004 8.78399 18.7769C9.78909 19.2535 10.8876 19.5005 12 19.5C13.1124 19.5005 14.2109 19.2535 15.216 18.7769C16.2211 18.3004 17.1076 17.6061 17.8112 16.7446C18.5148 15.883 19.0179 14.8757 19.2841 13.7956C19.5502 12.7156 19.5727 11.5898 19.35 10.5H21V20.25Z" />
              </svg>
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default Footer;
