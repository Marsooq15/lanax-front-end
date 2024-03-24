import { Image, SimpleGrid, Text } from '@chakra-ui/react';
import cover from '../cover.jpg';
import glass from '../glass.jpg';
import earphone from '../earphone.png';
import watches from '../watches.jpg';
import 'swiper/css';
import 'swiper/css/pagination';
import '../styles.css';
function ShopbyCategoriesSec() {
  return (
    <div
      style={{
        height: '200px',
        width: '100%',
        marginTop: '24px',
        backgroundColor: '#F8F8F8',
        paddingLeft: '15px',
        paddingRight: '15px',
        paddingBottom: '15px',
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
        >
          View All
        </Text>
      </div>
      <SimpleGrid columns={2} spacing={4} height="100%">
        <div
          style={{
            // backgroundColor: 'red',
            height: '100%',
            boxShadow: '0 0px 4px 0px #0000001A',
            padding: '10px',
            width: '100%',
          }}
        >
          <div
            style={{
              width: '100%',
              height: '60px',
              objectFit: 'cover',
            }}
          >
            <Image width="auto" height="auto" src={cover}></Image>
          </div>
        </div>
        <div
          style={{
            // backgroundColor: 'red',
            height: '100%',
            boxShadow: '0 0px 4px 0px #0000001A',
            padding: '10px',
            width: '100%',
          }}
        >
          <div
            style={{
              width: '100%',
              height: '60px',
              objectFit: 'cover',
            }}
          >
            <Image width="auto" height="auto" src={glass}></Image>
          </div>
        </div>
      </SimpleGrid>
    </div>
  );
}

export default ShopbyCategoriesSec;
