import { Image } from '@chakra-ui/react';
import testImg from '../testImg.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '../styles.css';
function Carosal() {
  return (
    <div
      style={{
        height: '200px',
        width: '100%',
        marginTop: '8px',
      }}
    >
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image src={testImg}></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={testImg}></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={testImg}></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={testImg}></Image>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Carosal;
