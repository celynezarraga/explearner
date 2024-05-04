import React, { FC, ReactElement } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import SearchBar from "./SearchBar";
import { logout } from "@/modules/user/store/userSlice";
import { AppDispatch, RootState } from "@/store/store";
import { URLS } from "../utils/urls";
import { LinkProps, NAV_BAR_LINKS } from "../utils/navBar";

interface NavigationBarProps {
  withDrawer?: boolean;
}

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

const NavigationBar: FC<NavigationBarProps> = ({withDrawer}) => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { info } = useSelector(
    (state: RootState) => state.user
  );

  const handleLogout =  () => {
    dispatch(logout());
    router.push(URLS.LOGIN);
  };

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4} w={withDrawer ? "calc(100% - 320px)" : "full"}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          {
            info
              ? null
              : <IconButton
                size={"md"}
                icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                aria-label={"Open Menu"}
                display={{ md: "none" }}
                onClick={isOpen ? onClose : onOpen}
              />
          }
          <HStack spacing={8} alignItems={"center"} onClick={() => router.push(URLS.HOMEPAGE)} cursor={"pointer"}>
            <Box>
              <AppLogo />
              <Box ml={2} as={"span"} fontWeight={"bold"}>
                Explearner
              </Box>
            </Box>
          </HStack>
          <Flex alignItems={"center"} w={"50%"}>
            <SearchBar />
          </Flex>
          <Flex alignItems={"center"}>
            {
              info
                ? <Menu>
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
                    onClick={handleLogout}
                  >
                    Logout
                  </MenuItem>
                </MenuList>
              </Menu>
                : <HStack
                  as={"nav"}
                  spacing={4}
                  display={{ base: "none", md: "flex" }}>
                  {NAV_BAR_LINKS.map((link, index) => (
                    <NavLink key={`nav-${index}`} item={link}/>
                  ))}
                </HStack>
            }
          </Flex>
        </Flex>

        {isOpen && info !== undefined ? (
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