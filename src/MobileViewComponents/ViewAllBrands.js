import { Image, Skeleton, Spinner } from '@chakra-ui/react';
import { BiArrowBack, BiCart, BiUser } from 'react-icons/bi';
import backIcon from '../backIcon1.jpeg';
import Footer from './Footer';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function ViewAllBrands() {
  const [fullLoading, setFullLoading] = useState(true);
  const [brandImages, setBrandImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [brandData, setBrandData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const timeout = setTimeout(() => {
      setFullLoading(false); // Set loading to false after timeout
    }, 2000); // Adjust the timeout duration as needed

    fetch(
      'https://desolate-sea-92343-a8a85255a35c.herokuapp.com/api/brands?populate=*'
    )
      .then(response => response.json())
      .then(data => {
        setBrandData(data.data);
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
  const gotoBrandwiseProducts = brand => {
    navigate(`/view-all/${brand.id}`);
  };
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
                  All Brands
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
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'flex-start',
              padding: '8px',
              width: '100%',
              height: '100%',
              // backgroundColor: 'red',
              marginTop: '20%',
              columnGap: '20px',
            }}
          >
            {brandImages.map((imageUrl, index) => (
              <Skeleton
                marginBottom={loading ? '20px' : '0px'}
                isLoaded={!loading}
              >
                <div
                  key={index}
                  style={{
                    width: '100px',
                    minHeight: '100px',
                    border: '1px solid lightgray',
                    backgroundColor: 'white',
                    marginBottom: '20px',
                    display: 'flex', // Use flexbox
                    justifyContent: 'center', // Center the content horizontally
                    alignItems: 'center', // Center the content vertically
                  }}
                  onClick={() => gotoBrandwiseProducts(brandData[index])}
                >
                  <Image
                    objectFit="contain"
                    src={imageUrl}
                    alt={`Brand ${index}`}
                    style={{ maxWidth: '100%', maxHeight: '100%' }}
                  />
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

export default ViewAllBrands;
