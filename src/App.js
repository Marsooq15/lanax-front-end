import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Switch,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import { isMobile } from 'react-device-detect';
import MainPage from './MobileViewComponents/MainPage';
import { Route, Routes } from 'react-router-dom';
import ViewAllProducts from './MobileViewComponents/ViewAllProducts';
import ViewAllBrands from './MobileViewComponents/ViewAllBrands';
import ViewAllCategories from './MobileViewComponents/ViewAllCategories';

function App() {
  return (
    <>
      {!isMobile ? (
        <ChakraProvider theme={theme}>
          <Box textAlign="center" fontSize="xl">
            <Grid minH="100vh" p={3}>
              <ColorModeSwitcher justifySelf="flex-end" />
              <VStack spacing={8}>
                <Logo h="40vmin" pointerEvents="none" />
                <Text>
                  Edit <Code fontSize="xl">src/App.js</Code> and save to reload.
                </Text>
                <Link
                  color="teal.500"
                  href="https://chakra-ui.com"
                  fontSize="2xl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn Chakra
                </Link>
              </VStack>
            </Grid>
          </Box>
        </ChakraProvider>
      ) : (
        // mobile view
        <ChakraProvider disableGlobalStyle theme={theme}>
          {/* <MainPage></MainPage> */}
          <Routes>
            {/* Define the route for the "view-all" page */}
            <Route path="/" element={<MainPage />} />
            {/* <Route path="/view-all" element={<ViewAllProducts />} /> */}
            <Route path="/view-all/:parameter" element={<ViewAllProducts />} />
            <Route path="/all-brands" element={<ViewAllBrands />} />
            <Route path="/all-categories" element={<ViewAllCategories />} />
          </Routes>
        </ChakraProvider>
      )}
    </>
  );
}

export default App;
