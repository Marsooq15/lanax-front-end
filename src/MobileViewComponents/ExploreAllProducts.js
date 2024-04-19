import { Button, Image, Skeleton, Text } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { FaCheckCircle, FaWhatsapp } from 'react-icons/fa';
import { FaBolt } from 'react-icons/fa';
import { FaRegHeart } from 'react-icons/fa';
import charger from '../charger.jpeg';
import 'swiper/css';
import 'swiper/css/pagination';
import '../styles.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
function ExploreAllProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    // Fetch product data from the API and update state
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://desolate-sea-92343-a8a85255a35c.herokuapp.com/api/products?populate=*'
        );
        const data = await response.json();
        const firstSixProducts = data.data.slice(0, 6);
        setProducts(firstSixProducts);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  const openWhatsApp = product => {
    const whatsAppMsg = encodeURIComponent(
      'Hi there!\n would like to place an order for the following item:\n' +
        'Product Name: ' +
        product?.attributes?.productName +
        '\n' +
        'Price: ' +
        product?.attributes?.offerPrice +
        '\n' +
        'Looking forward to your response. Thank you!'
    );

    const mobileNumber = '8943493896'; // Replace with the recipient's phone number
    const url = `whatsapp://send?text=${whatsAppMsg}&phone=91${mobileNumber}`;

    // Attempt to open WhatsApp app
    window.location.href = url;

    // Check if WhatsApp app was opened
    // setTimeout(() => {
    //   if (document.hidden) {
    //     // WhatsApp app was not opened, show an alert
    //     alert('Make sure WhatsApp is installed on your device');
    //   }
    // }, 2000); // Wait for 2 seconds
  };
  const gotoViewPage = () => {
    // Navigate to the "/view-all" page with a parameter
    navigate('/view-all/all');
  };
  return (
    <div
      style={{
        height: '200px',
        width: '100%',
        marginTop: '24px',
        backgroundColor: '#F8F8F8',
        marginBottom: '20%',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingLeft: '10px',
          paddingRight: '10px',
          paddingBottom: '15px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <Text
            style={{
              // fontFamily: 'cursive',
              fontSize: '17px',
              fontWeight: '700',
            }}
          >
            EXPLORE ALL PRODUCTS
          </Text>
        </div>

        <Text
          style={{
            // fontFamily: 'cursive',
            color: 'red',
          }}
          onClick={gotoViewPage}
        >
          View All
        </Text>
      </div>

      <Swiper
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        slidesPerView={2}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        style={{ height: '260px' }}
      >
        {products.map(product => (
          <SwiperSlide
            key={product.id}
            style={{ backgroundColor: '#F8F8F8', height: '100%' }}
          >
            <Skeleton isLoaded={!loading}>
              <div
                style={{
                  width: '170px',
                  backgroundColor: 'white',
                  // padding: '8px',
                  // paddingLeft: '8px',
                  // paddingRight: '8px',
                  paddingTop: '8px',
                  paddingBottom: '8px',
                  // height: '100%',
                  minHeight: '260px',
                  border: '1px solid lightgrey',
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
                    {product.attributes.discountPercentage}% off
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
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                    }}
                    src={product.attributes.prodImage.data[0].attributes.url}
                    alt="Product"
                  />
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    // justifyContent: 'space-between',
                    // gap: '20px',
                    alignItems: 'center',
                  }}
                >
                  <div>
                    <Text fontSize="10px">
                      {product.attributes.productName.length > 10
                        ? product.attributes.productName.substring(0, 40) +
                          '...'
                        : product.attributes.productName}
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
                        &#8377;{product.attributes.originalPrice}
                      </Text>
                      <Text
                        fontSize="10px"
                        color="gray"
                        style={{ textDecoration: 'line-through' }}
                      >
                        &#8377;{product.attributes.offerPrice}
                      </Text>
                    </div>
                    {product.attributes.isFewLeft && (
                      <Text color="green" fontSize="8px" fontWeight="bold">
                        Only few left
                      </Text>
                    )}
                  </div>
                  <div style={{ position: 'absolute', bottom: 5 }}>
                    <Button
                      bg="darkslategrey"
                      onClick={() => openWhatsApp(product)}
                      color="white"
                    >
                      <FaWhatsapp
                        color="green"
                        style={{ marginRight: '5px' }}
                      />
                      Order Now
                    </Button>
                  </div>
                </div>
              </div>
            </Skeleton>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ExploreAllProducts;
