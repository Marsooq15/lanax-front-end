import { Image } from '@chakra-ui/react';
import React from 'react';
import { BiMenu } from 'react-icons/bi';
import Logo2 from '../Logo2.jpeg';
import { BiUser } from 'react-icons/bi';
import { BiCart } from 'react-icons/bi';

function FixedHeader() {
  return (
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
          <div>
            <BiMenu style={{ height: '30px', width: '30px' }} />
          </div>
          <div style={{ width: '100px', height: '34px' }}>
            <Image
              style={{ width: 'auto', height: 'auto' }}
              src={Logo2}
              alt="props"
            />
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
  );
}

export default FixedHeader;
