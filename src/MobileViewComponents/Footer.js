import {
  Box,
  Button,
  Divider,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from '@chakra-ui/react';
import '../styles.css';
import SearchBar from './searchBar';
function Footer() {
  return (
    <div
      style={{
        width: '100%',
        backgroundColor: '#45464b',
        height: '100%',
        marginTop: '20%',
        padding: '12px',
      }}
    >
      <Text color="white" fontSize="18px">
        Fear Of missing Out?
      </Text>
      <Text color="white" fontSize="12px">
        Get THE LATEST DEALS, UPDATES & MORE
      </Text>
      <Box marginTop={4}>
        <InputGroup className="search-input-group">
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
            }}
          >
            <div>
              <Input
                style={{ borderColor: 'lightgray' }}
                type="text"
                placeholder="Enter your email"
                borderRadius="none"
                color="white"
              />
              <style jsx>{`
                input::placeholder {
                  color: white;
                }
              `}</style>
            </div>
            <div>
              <InputRightElement
                cursor="pointer"
                color="lightgray"
                borderRight="1px solid"
                borderTop="1px solid"
                borderBottom="1px solid"
                backgroundColor="#EDF2F7"
                children={<Button height="full">Subscribe</Button>}
                width="fit-content"
              />
            </div>
          </div>
        </InputGroup>
      </Box>
      <Divider color="grey" marginTop={4}></Divider>
      <div style={{ display: 'column', marginTop: '8px' }}>
        <Text color="white" marginTop={2} fontWeight="bold">
          About Us
        </Text>
        <Text color="white" marginTop={2} fontWeight="bold">
          Contact Us
        </Text>
        <Text color="white" marginTop={2} fontWeight="bold">
          Shop
        </Text>
      </div>
      <Divider color="grey" marginTop={4}></Divider>
      <div style={{ display: 'column', marginTop: '8px' }}>
        <Text color="white" marginTop={2} fontWeight="bold">
          Ecommerce support
        </Text>
        <Text color="white" marginTop={1}>
          +91 9846984301
        </Text>
        <Divider color="grey" marginTop={4}></Divider>
        <Text color="white" marginTop={2} fontWeight="bold">
          Service support
        </Text>
        <Text color="white" marginTop={1}>
          +91 85905 20152
        </Text>
        <Divider color="grey" marginTop={4}></Divider>
        <div style={{ display: 'flex', alignContent: 'center',justifyContent:"center" }}>
          <Text color="grey" fontSize="14px">
            All rights reserved.Copyright 2024
          </Text>
        </div>
      </div>
    </div>
  );
}

export default Footer;
