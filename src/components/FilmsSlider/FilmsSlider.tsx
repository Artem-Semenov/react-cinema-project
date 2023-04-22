import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import filmsData from "utils/filmsData";
import './FilmsSlider.scss'

type Props = {};
const FilmsSlider = (props: Props) => {
  return (
    <Swiper
      spaceBetween={24}
      slidesPerView={4}
      speed={800}
      loop={true}
      // touchRatio={1.5}
      // navigation={true}
      effect={"flip"}
      // pagination={{clickable: true }}
      autoplay={true}
      
      className="filmsSlider">

        {filmsData.map((el) => (
          <SwiperSlide key={el?.id}>
            <div className="swiper-slide__body">
            <img src={el?.img} alt={el?.title} />
            <h2 className="swiper-slide__title">{el?.title}</h2>
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};
export default FilmsSlider;
