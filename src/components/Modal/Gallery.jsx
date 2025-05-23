import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const Gallery = ({ data }) => {
  return (
    <div className="slider">
      {data?.large?.length > 1 ? (
        <Splide>
          {data?.large?.map((item) => (
            <SplideSlide>
              <img src={item.src} alt="plane-img" />
            </SplideSlide>
          ))}
        </Splide>
      ) : (
        <div className="warning">Fotoğraf içeriği bulunamadı</div>
      )}
    </div>
  );
};

export default Gallery;
