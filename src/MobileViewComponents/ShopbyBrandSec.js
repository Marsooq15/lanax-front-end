import { Image, Skeleton, Text } from '@chakra-ui/react';
import redmi from '../redmi.jpg';
import sam from '../sam.png';
import iphone from '../iphone.jpg';
import lg1 from '../lg1.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '../styles.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// const slides = [{ src: redmi }, { src: iphone }, { src: sam }, { src: lg1 }];
function ShopbyBrandSec() {
  const [brandImages, setBrandImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [brandData, setBrandData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(
      'https://desolate-sea-92343-a8a85255a35c.herokuapp.com/api/brands?populate=*'
    )
      .then(response => response.json())
      .then(data => {
        // Store the entire brand data response
        setBrandData(data.data);
        // Extract the image URLs from the brand data
        const images = data.data.map(item => {
          return item.attributes.brandLogo.data[0].attributes.url;
        });
        setBrandImages(images);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      })
      .catch(error => {
        console.error('Error fetching brand images:', error);
      });
  }, []);

  const gotoViewPage = () => {
    // Navigate to the "/view-all" page with a parameter
    navigate('/all-brands');
  };
  const gotoBrandwiseProducts = brand => {
    console.log(brand);
    navigate(`/view-all/${brand.id}`);
  };
  return (
    <div
      style={{
        height: '200px',
        width: '100%',
        marginTop: '80px',
        backgroundColor: '#F8F8F8',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: '10px',
          marginTop: '20px',
        }}
      >
        <Text
          style={{
            fontSize: '17px',
            fontWeight: '700',
          }}
        >
          SHOP BY BRANDS
        </Text>
        <Text style={{ color: 'red' }} onClick={gotoViewPage}>
          View All
        </Text>
      </div>
      <Swiper
        loop
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        slidesPerView={3}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {brandImages.map((imageUrl, index) => (
          <SwiperSlide
            key={index}
            style={{ height: '50%', backgroundColor: '#F8F8F8' }}
          >
            <Skeleton isLoaded={!loading}>
              <div
                style={{
                  width: '100px',
                  height: '80px',
                  border: '1px solid lightgray',
                  backgroundColor: 'white',
                }}
                onClick={() => gotoBrandwiseProducts(brandData[index])}
              >
                <Image src={imageUrl} alt={`Brand ${index}`} />
              </div>
            </Skeleton>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ShopbyBrandSec;
