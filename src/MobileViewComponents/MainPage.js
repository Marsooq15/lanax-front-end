import React from 'react';
import FixedHeader from './FixedHeader';
import SearchBar from './searchBar';
import Carosal from './Carosal';
import SpecialDealsSec from './SpecialDealsSec';
import ShopbyBrandSec from './ShopbyBrandSec';
import ShopbyCategoriesSec from './ShopbyCategoriesSec';

function MainPage() {
  return (
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
            backgroundColor: 'rgb(248, 248, 248',
          }}
        >
          <ShopbyBrandSec></ShopbyBrandSec>
          <ShopbyCategoriesSec></ShopbyCategoriesSec>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
