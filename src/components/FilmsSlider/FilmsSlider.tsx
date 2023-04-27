import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";
import filmsData from "utils/filmsData";
import "./FilmsSlider.scss";
import { NavLink } from "react-router-dom";

type Props = {};
const FilmsSlider = (props: Props) => {
  return (
    <Swiper
      className="filmsSlider"
      modules={[Autoplay]}
      speed={800}
      loop={true}
      effect={"flip"}
      // pagination={{clickable: true }}
      grabCursor={true}
      autoplay={{ delay: 3000 }}
      breakpoints={{
        320: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 24,
        },
      }}>
      {filmsData.map((el) => (
        <SwiperSlide key={el?.id}>
          <div className="swiper-slide__body">
            <NavLink to={`/schedule/${el?.titleForDomain}`} state={{ time: -1, id: el?.id}}>
              <img src={el?.img} alt={el?.title} />
              <h2 className="swiper-slide__title">{el?.title}</h2>
            </NavLink>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default FilmsSlider;
