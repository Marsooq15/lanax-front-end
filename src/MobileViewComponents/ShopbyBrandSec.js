import { Image, Text } from '@chakra-ui/react';
import redmi from '../redmi.jpg';
import sam from '../sam.png';
import iphone from '../iphone.jpg';
import lg1 from '../lg1.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '../styles.css';
const slides = [{ src: redmi }, { src: iphone }, { src: sam }, { src: lg1 }];
function ShopbyBrandSec() {
  return (
    <div
      style={{
        height: '200px',
        width: '100%',
        marginTop: '24px',
        backgroundColor: '#F8F8F8',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: '15px',
          marginTop: '10px',
        }}
      >
        <Text
          style={{
            // fontFamily: 'cursive',
            fontSize: '17px',
            fontWeight: '700',
          }}
        >
          SHOP BY BRANDS
        </Text>

        <Text
          style={{
            // fontFamily: 'cursive',
            color: 'red',
          }}
        >
          View All
        </Text>
      </div>
      <Swiper
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        slidesPerView={3}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            style={{ height: '50%', backgroundColor: '#F8F8F8' }}
          >
            <div
              style={{
                width: '100px',
                height: '80px',
                border: '1px solid lightgray',
                backgroundColor: 'white',
              }}
            >
              <Image src={slide.src}></Image>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      ;
    </div>
  );
}

export default ShopbyBrandSec;
