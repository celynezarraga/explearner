import React, { ReactElement } from "react";
import { useRouter } from "next/router";
import {
  CloseIcon,
  DragHandleIcon,
  HamburgerIcon
} from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  useColorModeValue,
  useDisclosure
} from "@chakra-ui/react";
import AppLogo from "./AppLogo";
import { URLS } from "../utils/urls";
import SearchBar from "./SearchBar";
import { LinkProps, NAV_BAR_LINKS } from "../utils/navBar";

const NavLink = ({ item }: { item: LinkProps }): ReactElement => (
  <Link
    id={`nav-item-${item.id}`}
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={item.url}>
    {item.label}
  </Link>
);

const NavigationBar = () => {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"} onClick={() => router.push(URLS.HOMEPAGE)}>
            <Box>
              <AppLogo />
              <Box ml={2} as={"span"}>
                Explearner
              </Box>
            </Box>
          </HStack>
          <Flex alignItems={"center"} w={"50%"}>
            <SearchBar />
          </Flex>
          <Flex alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}>
              {NAV_BAR_LINKS.map((link, index) => (
                <NavLink key={`nav-${index}`} item={link}/>
              ))}
            </HStack>
            {/* <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}>
                <DragHandleIcon color={"#008080"}/>
              </MenuButton>
              <MenuList>
                <MenuItem
                  color={"#008080"}
                  // onClick={userLogout}
                >
                  Logout
                </MenuItem>
              </MenuList>
            </Menu> */}
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {NAV_BAR_LINKS.map((link, index) => (
                <NavLink key={`nav-${index}`} item={link}/>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

export default NavigationBar;