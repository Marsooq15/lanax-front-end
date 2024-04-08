import { Image, Skeleton } from '@chakra-ui/react';
import testImg from '../testImg.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '../styles.css';
import { useEffect, useState } from 'react';
function Carosal() {
  const [bannerImages, setBannerImages] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Fetch banner image URLs from the API
    fetch(
      'https://desolate-sea-92343-a8a85255a35c.herokuapp.com/api/banner-images?populate=*'
    )
      .then(response => response.json())
      .then(data => {
        // Extract image URLs from the response and set them in state
        const images = data.data.map(item => {
          return item.attributes.bannerImage.data[0].attributes.url;
        });
        setBannerImages(images);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      })
      .catch(error => {
        console.error('Error fetching banner images:', error);
      });
  }, []);
  return (
    <Skeleton isLoaded={!loading}>
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
          {bannerImages.map((imageUrl, index) => (
            <SwiperSlide key={index}>
              <Image src={imageUrl}></Image>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Skeleton>
  );
}

export default Carosal;
