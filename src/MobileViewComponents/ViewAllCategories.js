import { Image, SimpleGrid, Skeleton, Spinner, Text } from '@chakra-ui/react';
import { BiArrowBack, BiCart, BiUser } from 'react-icons/bi';
import backIcon from '../backIcon1.jpeg';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function ViewAllCategories() {
  const [fullLoading, setFullLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setFullLoading(false); // Set loading to false after timeout
    }, 2000); // Adjust the timeout duration as needed

    // Fetch data from API
    fetch(
      'https://desolate-sea-92343-a8a85255a35c.herokuapp.com/api/sub-categories?populate=*'
    )
      .then(response => response.json())
      .then(data => {
        // Slice the array to get the first 4 categories only
        const firstFourCategories = data.data;
        setCategories(firstFourCategories);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);
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
                  All Categories
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
          <div style={{ marginTop: '16%' }}>
            <SimpleGrid
              columns={2}
              spacing={4}
              height="100%"
              marginBottom="16px"
              padding="12px"
            >
              {categories.map(category => (
                <Skeleton isLoaded={!loading}>
                  <div
                    key={category.id}
                    style={{
                      height: '100%',
                      border: '1px solid lightgray',
                      padding: '10px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <div style={{ width: '100%', textAlign: 'center' }}>
                      <Image
                        width="auto"
                        height="90px"
                        margin="auto"
                        src={
                          category.attributes.subCatImage.data[0].attributes.url
                        }
                      ></Image>
                      <Text fontSize="14px" fontWeight={500}>
                        {category.attributes.subCategoryName}
                      </Text>
                      <Text color="#E50019">
                        {category.attributes.discountPercentage}
                      </Text>
                    </div>
                  </div>
                </Skeleton>
              ))}
            </SimpleGrid>
          </div>

          <Footer></Footer>
        </>
      )}
    </>
  );
}

export default ViewAllCategories;
