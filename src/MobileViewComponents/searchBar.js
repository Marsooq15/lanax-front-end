import {
  Box,
  Button,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons';

function SearchBar() {
  return (
    <Box paddingLeft={2} paddingRight={2}>
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
              style={{ borderColor: 'lightgray', fontFamily: 'sans-serif' }}
              // type="text"
              placeholder="Search"
            />
          </div>
          <div>
            <InputRightElement
              cursor="pointer"
              color="lightgray"
              borderRight="1px solid"
              borderTop="1px solid"
              borderBottom="1px solid"
              backgroundColor="#EDF2F7"
              children={
                <Button height="full">
                  <Search2Icon />
                </Button>
              }
            />
          </div>
        </div>
      </InputGroup>
    </Box>
  );
}

export default SearchBar;
