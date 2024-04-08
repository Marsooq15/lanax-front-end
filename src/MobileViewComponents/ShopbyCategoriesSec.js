import { Image, SimpleGrid, Skeleton, Text } from '@chakra-ui/react';
import cover from '../cover.jpg';
import glass from '../glass.jpg';
import earphone from '../earphone.png';
import watches from '../watches.jpg';
import 'swiper/css';
import 'swiper/css/pagination';
import '../styles.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
function ShopbyCategoriesSec() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    // Fetch data from API
    fetch(
      'https://desolate-sea-92343-a8a85255a35c.herokuapp.com/api/sub-categories?populate=*'
    )
      .then(response => response.json())
      .then(data => {
        // Slice the array to get the first 4 categories only
        const firstFourCategories = data.data.slice(0, 4);
        setCategories(firstFourCategories);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  const gotoViewPage = () => {
    // Navigate to the "/view-all" page with a parameter
    navigate('/all-categories');
  };
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingLeft: '10px',
          paddingRight: '10px',
          marginTop: '8px',
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
            Shop By Categories
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
      <div>
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
                    src={category.attributes.subCatImage.data[0].attributes.url}
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
    </>
  );
}

export default ShopbyCategoriesSec;
