import { Image, Text } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { FaCheckCircle } from 'react-icons/fa';
import { FaBolt } from 'react-icons/fa';
import { FaRegHeart } from 'react-icons/fa';
import charger from '../charger.jpeg';
import 'swiper/css';
import 'swiper/css/pagination';
import '../styles.css';
function SpecialDealsSec() {
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
          paddingLeft: '15px',
          paddingRight: '15px',
          paddingBottom: '15px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <FaBolt color='orange' />
          <Text
            style={{
              // fontFamily: 'cursive',
              fontSize: '17px',
              fontWeight: '700',
            }}
          >
            SPECIAL OFFER
          </Text>
          <FaBolt color='orange' />
        </div>

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
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        // modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        slidesPerView={2}
      >
        <SwiperSlide style={{ backgroundColor: '#F8F8F8', height: '100%' }}>
          <div
            style={{
              width: '170px',
              // height: '100%',
              // border: '1px solid lightgray',
              backgroundColor: 'white',
              padding: '8px',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: 'red',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: 'white',
                  fontSize: '8px',
                  fontWeight: 'bold',
                }}
              >
                50% off
              </div>
              <div
                style={{
                  border: '2px dashed green',
                  display: 'flex',
                  alignItems: 'center',
                  padding: '8px',
                  borderRadius: '16px',
                  height: '20px',
                }}
              >
                <FaCheckCircle
                  color="green"
                  style={{ marginRight: '5px', fontSize: '10px' }}
                />
                <span style={{ color: 'green', fontSize: '10px' }}>
                  In Stock
                </span>
              </div>
              <FaRegHeart color="red" />
            </div>
            <div style={{ width: '100%', height: '100px', padding: '5px' }}>
              <Image
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                src={charger}
                alt="props"
              />
            </div>
            <Text fontSize="10px">
              Apple 20W USB-C Power Adapter (for iPhone, iPad & AirPods)
            </Text>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                gap: '8px',
              }}
            >
              <Text fontSize="10px" fontWeight="bold">
                &#8377;1500
              </Text>
              <Text
                fontSize="10px"
                color="gray"
                style={{ textDecoration: 'line-through' }}
              >
                &#8377;900
              </Text>
            </div>
            <Text color="green" fontSize="8px" fontWeight="bold">
              Only few left
            </Text>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ backgroundColor: '#F8F8F8' }}>
          <div
            style={{
              width: '165px',
              height: '200px',
              // border: '1px solid lightgray',
              backgroundColor: 'white',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'row' }}></div>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ backgroundColor: '#F8F8F8' }}>
          <div
            style={{
              width: '165px',
              height: '200px',
              // border: '1px solid lightgray',
              backgroundColor: 'white',
            }}
          ></div>
        </SwiperSlide>
        <SwiperSlide style={{ backgroundColor: '#F8F8F8' }}>
          <div
            style={{
              width: '165px',
              height: '200px',
              // border: '1px solid lightgray',
              backgroundColor: 'white',
            }}
          ></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default SpecialDealsSec;
