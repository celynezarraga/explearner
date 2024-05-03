import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightAddon
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";

// NOTE: This is for visualization purposes
// TO DO: Search bar behavior

const SearchBar = () => {
  return (
    <InputGroup borderRadius={4} size="sm">
      <InputLeftElement
        pointerEvents="none"
      >
        <Search2Icon color="gray.600" />
      </InputLeftElement>
      <Input
        type="text"
        placeholder="Search..."
        border="1px solid #008080"
        colorScheme="teal"
      />
      <InputRightAddon
        p={0}
        border="none"
      >
        <Button
          size="sm"
          borderLeftRadius={0}
          borderRightRadius={3.3}
          border="1px solid #008080"
        >
          Search
        </Button>
      </InputRightAddon>
    </InputGroup>
  );
};

export default SearchBar;