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
import { FaWhatsapp } from 'react-icons/fa';

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
                <div
                  style={{
                    position: 'fixed',
                    bottom: '20px',
                    right: '20px',
                    borderRadius: '50%',
                    backgroundColor: '#25D366',
                    width: '50px',
                    height: '50px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    cursor: 'pointer',
                    zIndex: 10,
                  }}
                >
                  <a
                    href="https://wa.me/+919846984301"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'white', textDecoration: 'none' }}
                  >
                    <FaWhatsapp size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default MainPage;
