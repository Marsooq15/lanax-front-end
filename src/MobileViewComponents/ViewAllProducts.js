import { Button, Image, Skeleton, Spinner, Text } from '@chakra-ui/react';
import { BiArrowBack, BiCart, BiUser } from 'react-icons/bi';
import { Link, useParams } from 'react-router-dom';
import charger from '../earphone.png';
import { FaCheckCircle, FaRegHeart, FaWhatsapp } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import Footer from './Footer';
import backIcon from '../backIcon1.jpeg';

function ViewAllProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fullLoading, setFullLoading] = useState(true);
  const { parameter } = useParams();
  const openWhatsApp = product => {
    const whatsAppMsg = encodeURIComponent(
      'Hi' + 'I just seen' + product?.attributes?.productName
    );
    const mobileNumber = '8943493896'; // Replace with the recipient's phone number
    const url = `whatsapp://send?text=${whatsAppMsg}&phone=91${mobileNumber}`;
    // Attempt to open WhatsApp app
    window.location.href = url;
  };
  useEffect(() => {
    const timeout = setTimeout(() => {
      setFullLoading(false); // Set loading to false after timeout
    }, 2000); // Adjust the timeout duration as needed

    // Fetch data from the API
    // fetch(
    //   'https://desolate-sea-92343-a8a85255a35c.herokuapp.com/api/products?populate=*'
    // )
    //   .then(response => response.json())
    //   .then(data => setProducts(data.data));
    // setTimeout(() => {
    //   setLoading(false);
    // }, 3000);
    // // .catch(error => console.error('Error fetching data:', error));
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://desolate-sea-92343-a8a85255a35c.herokuapp.com/api/products?populate=*'
        );
        if (parameter === 'all') {
          const data = await response.json();
          const products = data.data.filter(product => product);

          setProducts(products);
        }
        if (parameter === 'special') {
          const data = await response.json();
          // Filter products where isSpecial is true
          const specialProducts = data.data.filter(
            product => product.attributes.isSpecial
          );
          setProducts(specialProducts);
        }
        if (parameter !== 'special' && parameter !== 'all') {
          const data = await response.json();
          console.log(parameter);
          console.log(data);
          // Filter products where isSpecial is true
          const filteredProducts = data.data.filter(
            product => product.attributes.brand.data.id === parseInt(parameter)
          );

          setProducts(filteredProducts);
        }
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [parameter]);
  console.log(parameter);
  return (
    <>
      {/* Conditionally render the spinner while loading */}
      {fullLoading ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
          }}
        >
          <Spinner color="blue" size="xl" />
        </div>
      ) : (
        // Render the content when loading is false
        <>
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              backgroundColor: 'white',
              zIndex: 999, // Ensure the header is above other content
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Add shadow for visual effect
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
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
                <Link to="/">
                  <BiArrowBack style={{ height: '30px', width: '30px' }} />
                </Link>
                <div
                  style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%', // Make the div circular
                    overflow: 'hidden', // Hide any content that exceeds the circular boundary
                    backgroundColor: 'lightgray', // Optional: Add background color to the circular div
                  }}
                >
                  <Image
                    src={backIcon}
                    objectFit="cover"
                    style={{ width: '100%', height: '100%' }}
                  ></Image>
                </div>
                <div
                  style={{
                    fontWeight: 'bold',
                    fontSize: '18px',
                    marginLeft: '4px',
                  }}
                >
                  All Products
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <BiUser
                  style={{ height: '30px', width: '30px', marginRight: '4px' }}
                />
                <BiCart style={{ height: '30px', width: '30px' }} />
              </div>
            </div>
          </div>
          <div
            style={{
              width: '100%',
              // height: '100vh',
              backgroundColor: '#F2F2F2',
              paddingTop: '50px',
              // paddingBottom: '8px',
            }}
          >
            {products.map(product => (
              <Skeleton isLoaded={!loading}>
                <div
                  style={{
                    marginTop: '10%',
                    display: 'flex',
                    flexDirection: 'column',
                    marginTop: '3%',
                  }}
                >
                  <div
                    style={{
                      width: '100%',
                      height: 'auto',
                      backgroundColor: 'white',
                      // marginTop: '1%',
                      padding: '15px',
                    }}
                  >
                    <>
                      <div
                        key={product.id}
                        style={{
                          width: '100%',
                          height: '150px',
                          display: 'flex',
                          flexDirection: 'row',
                          marginBottom: '20px',
                        }}
                      >
                        {/* Product Image */}
                        <div style={{ width: '30%', position: 'relative' }}>
                          <div
                            style={{
                              position: 'absolute',
                              top: 0,
                              right: 0,
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
                          <Image
                            objectFit="contain"
                            marginTop="40%"
                            src={
                              product.attributes.prodImage.data[0].attributes
                                .url
                            }
                          ></Image>
                        </div>
                        {/* Product Details */}
                        <div
                          style={{
                            width: '60%',
                            display: 'flex',
                            flexDirection: 'column',
                            padding: '15px',
                            gap: '4px',
                          }}
                        >
                          {/* In Stock */}
                          {product.attributes.isInStock && (
                            <div
                              style={{
                                border: '2px dashed green',
                                display: 'flex',
                                alignItems: 'center',
                                width: '45%',
                                padding: '8px',
                                borderRadius: '16px',
                                height: '20px',
                              }}
                            >
                              <FaCheckCircle
                                color="green"
                                style={{ marginRight: '5px', fontSize: '10px' }}
                              />
                              <span
                                style={{ color: 'green', fontSize: '10px' }}
                              >
                                In Stock
                              </span>
                            </div>
                          )}
                          {/* Product Name */}
                          <Text fontSize="11px">
                            {product.attributes.productName.length > 10
                              ? product.attributes.productName.substring(
                                  0,
                                  60
                                ) + '...'
                              : product.attributes.productName}
                          </Text>
                          {/* Offer Price */}
                          <Text fontSize="10px" fontWeight="bold">
                            ₹{product.attributes.offerPrice}
                          </Text>
                          {/* Original Price */}
                          <Text
                            fontSize="10px"
                            color="gray"
                            style={{ textDecoration: 'line-through' }}
                          >
                            ₹{product.attributes.originalPrice}
                          </Text>
                        </div>
                        {/* Heart Icon */}
                        <FaRegHeart color="red" />
                      </div>
                      <div key={product.id}>
                        {product.attributes.specification && (
                          <div
                            style={{
                              width: '100%',
                              height: 'auto',
                              display: 'flex',
                              flexWrap: 'wrap',
                              flexDirection: 'row',
                              columnGap: '20px',
                              marginTop: '2%',
                              rowGap: '8px',
                            }}
                          >
                            {product.attributes.specification.data.map(
                              (spec, index) => (
                                <div
                                  key={index}
                                  style={{
                                    border: '1px solid #CACBD0',
                                    padding: '0px 5px',
                                    marginBottom: '8px',
                                  }}
                                >
                                  <p style={{ fontSize: '12px', margin: '0' }}>
                                    {spec.specName}
                                  </p>
                                </div>
                              )
                            )}
                          </div>
                        )}
                      </div>
                      <div style={{ marginTop: '2%' }}>
                        <Button
                          bg="darkslategrey"
                          onClick={() => openWhatsApp(product)}
                          color="white"
                          width="100%"
                        >
                          <FaWhatsapp
                            color="green"
                            style={{ marginRight: '5px' }}
                          />
                          Order Now
                        </Button>
                      </div>
                    </>

                    {/* Order Button */}
                  </div>
                </div>
              </Skeleton>
            ))}
          </div>
          <Footer></Footer>
        </>
      )}
    </>
  );
}

export default ViewAllProducts;
