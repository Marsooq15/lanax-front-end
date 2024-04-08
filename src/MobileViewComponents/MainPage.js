import React, { useEffect, useState } from 'react';
import FixedHeader from './FixedHeader';
import SearchBar from './searchBar';
import Carosal from './Carosal';
import SpecialDealsSec from './SpecialDealsSec';
import ShopbyBrandSec from './ShopbyBrandSec';
import ShopbyCategoriesSec from './ShopbyCategoriesSec';
import ExploreAllProducts from './ExploreAllProducts';
import Footer from './Footer';
import { Spinner } from '@chakra-ui/react';

function MainPage() {
  const [fullLoading, setFullLoading] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setFullLoading(false); // Set loading to false after timeout
    }, 2000); // Adjust the timeout duration as needed
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
              display: 'flex',
              flexDirection: 'column',
              height: '100vh',
              overflowY: 'auto',
              paddingTop: '50px',
              marginTop: '6%',
            }}
          >
            <FixedHeader></FixedHeader>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100vh',
                zIndex: 100,
              }}
            >
              <SearchBar></SearchBar>
              <Carosal></Carosal>
              <SpecialDealsSec></SpecialDealsSec>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  // backgroundColor: 'rgb(248, 248, 248',
                  height: '100%',
                }}
              >
                <ShopbyBrandSec></ShopbyBrandSec>
                <ShopbyCategoriesSec></ShopbyCategoriesSec>
                <ExploreAllProducts></ExploreAllProducts>
                <Footer></Footer>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default MainPage;
