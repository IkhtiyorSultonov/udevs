import { navigation } from "@/config/constains";
import {
  Box,
  Button,
  Card,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  HStack,
  Icon,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { PiCaretDownLight } from "react-icons/pi";
import i18n from "../../i18n/index";
import { useTranslation } from "react-i18next";
import { IoIosMenu } from "react-icons/io";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
const Header = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const onLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    router.replace(router.asPath).then();
  };
  
  return (
    <Box
      h={"72px"}
      boxShadow={"0 1px 0 #e5e9f2"}
      display={"flex"}
      justifyContent={"space-evenly"}
      pos={"fixed"}
      top={0}
      zIndex={999}
      bg={"white"}
      w={"full"}
    >
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        w={{ base: "95%", xl: "6xl" }}
      >
        <HStack>
          <Image
            src="./images/logo.svg"
            w={"96px"}
            cursor={"pointer"}
            onClick={() => router.push("/")}
          />
        </HStack>
        <HStack display={{ base: "none", xl: "flex" }}>
          {navigation.map((c, idx) => (
            <Stack key={idx}>
              {c.menu ? (
                <Menu matchWidth>
                  <MenuButton
                    w={"auto"}
                    as={Button}
                    rightIcon={<PiCaretDownLight />}
                    color={"#18191f"}
                    fontSize={"14px"}
                    p={0}
                    ml={5}
                    _hover={{
                      borderBottom: "2px solid #1b5bf7",
                      borderRadius: 0,
                    }}
                  >
                    {t(c.label)}
                  </MenuButton>
                  <MenuList bg={"#fff"} w={"280px"}>
                    {c.menuItem?.map((item, idx) => (
                      <MenuItem
                        key={idx}
                        _hover={{ bg: "#1b5bf7", color: "#fff" }}
                        fontSize={"13px"}
                        bg={"#fff"}
                        // onClick={() => onLanguage()}
                      >
                        <Image w={"50px"} src={item.img} p={2} />
                        {t(item.name)}
                      </MenuItem>
                    ))}
                  </MenuList>
                </Menu>
              ) : (
                <Box
                  color={c.button ? "#fff" : "#18191f"}
                  w={c.button ? "112px" : "auto"}
                  ml={c.ml ? "0px" : 6}
                  textAlign={"center"}
                  height={c.button ? "40px" : "45px"}
                  fontSize={"14px"}
                  lineHeight={c.button ? "40px" : "45px"}
                  _hover={
                    c.button
                      ? { transform: "scale(1.05)" }
                      : { borderBottom: "2px solid #1b5bf7" }
                  }
                  fontWeight={700}
                  transition={"all .1s ease-in-out"}
                  cursor={"pointer"}
                  bg={c.button ? "#1b5bf7" : ""}
                  borderRadius={c.button ? "8px" : "0"}
                >
                  {t(c.label)}
                </Box>
              )}
            </Stack>
          ))}
        </HStack>
        <HStack display={{ base: "flex", xl: "none" }}>
          <Icon
            as={IoIosMenu}
            fontSize={"25px"}
            color={"#1b5bf7"}
            onClick={onOpen}
            cursor={"pointer"}
          />
          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            size={"full"}
          >
            <DrawerContent bg={"#f4f7ff"}>
              <DrawerCloseButton color={"#1b5bf7"} fontSize={"20px"} m={2} />
              <DrawerHeader>
                <Image src={"./images/Logo.svg"} w={"100px"} />
              </DrawerHeader>
              <DrawerBody
                color={"#18191"}
                fontWeight={800}
                gap={4}
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Text fontSize={"32px"}>Services</Text>
                <Text fontSize={"32px"}>Clients</Text>
                <Text fontSize={"32px"}>Command</Text>
              </DrawerBody>

              <DrawerFooter flexDirection={"column"}>
                <Button
                  colorScheme="blue"
                  w={"full"}
                  h={"65px"}
                  bg={"#1b5bf7"}
                  color={"#fff"}
                >
                  Contact
                </Button>
                <Box display={"flex"} gap={4} mt={10} mb={10}>
                  <Card
                    h={"40px"}
                    w={"40px"}
                    pt={2}
                    pl={2}
                    bg={"#1b5bf7"}
                    borderRadius={"50%"}
                  >
                    <Icon color={"white"} as={FaInstagram} fontSize={"25px"} />
                  </Card>
                  <Card
                    h={"40px"}
                    w={"40px"}
                    pt={2}
                    pl={2}
                    bg={"#1b5bf7"}
                    borderRadius={"50%"}
                  >
                    <Icon color={"white"} as={FaTwitter} fontSize={"25px"} />
                  </Card>
                  <Card
                    h={"40px"}
                    w={"40px"}
                    pt={2}
                    pl={2}
                    bg={"#1b5bf7"}
                    borderRadius={"50%"}
                  >
                    <Icon color={"white"} as={FaYoutube} fontSize={"25px"} />
                  </Card>
                </Box>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;
