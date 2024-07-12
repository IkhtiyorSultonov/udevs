import { navigation } from "@/config/constains";
import {
  Box,
  Button,
  Container,
  HStack,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { PiCaretDownLight } from "react-icons/pi";
import i18n from '../../i18n/index'
import { useTranslation } from "react-i18next";
const Header = () => {
  const router = useRouter();
  const { t } = useTranslation()
  const onLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    router.replace(router.asPath).then()
  };
  return (
    <Box
      h={"72px"}
      boxShadow={"0 1px 0 #e5e9f2"}
      display={"flex"}
      justifyContent={"space-evenly"}
      pos={"fixed"}
      top={0}
      w={"full"}
    >
      <HStack>
        <Image
          src="./images/logo.svg"
          w={"96px"}
          cursor={"pointer"}
          onClick={() => router.push("/")}
        />
      </HStack>
      <HStack>
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
                      onClick={() => onLanguage(item.lng)}
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
    </Box>
  );
};

export default Header;
