import { footerMenu } from "@/config/constains";
import { Box, Card, Icon, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "react-i18next";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <Box
      h={"464px"}
      bg={"#f4f7ff"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Image src={"./images/Logo.svg"} w={"106px"} />
      <Box w={"6xl"} display={"flex"} justifyContent={"space-between"} mt={10}>
        {footerMenu.map((c, idx) => (
          <Card key={idx} bg={"#f4f7ff"} boxShadow={"0"}>
            <Text color={"black"} fontSize={"1em"} fontWeight={600}>
              {t(c.label)}
            </Text>
            {c.menuItem.map((c, idx) => (
              <Text key={idx} color={"#1b5bf7"} mt={2} cursor={"pointer"}>
                {t(c.name)}
              </Text>
            ))}
          </Card>
        ))}
      </Box>
      <Box
        w={"6xl"}
        borderTop={"1px solid rgba(27, 91, 247, .2)"}
        mt={10}
        display={"flex"}
        justifyContent={"space-between"}
        pt={5}
      >
        <Box color={"#1b5bf7"}>© 2024 Udevs. All rights reserved</Box>
        <Box display={"flex"} gap={4}>
          <Card
            h={"40px"}
            w={"40px"}
            pt={2}
            pl={2}
            bg={"rgba(27,91,247,.1)"}
            borderRadius={"50%"}
          >
            <Icon color={"#1b5bf7"} as={FaInstagram} fontSize={"25px"} />
          </Card>
          <Card
            h={"40px"}
            w={"40px"}
            pt={2}
            pl={2}
            bg={"rgba(27,91,247,.1)"}
            borderRadius={"50%"}
          >
            <Icon color={"#1b5bf7"} as={FaTwitter} fontSize={"25px"} />
          </Card>
          <Card
            h={"40px"}
            w={"40px"}
            pt={2}
            pl={2}
            bg={"rgba(27,91,247,.1)"}
            borderRadius={"50%"}
          >
            <Icon color={"#1b5bf7"} as={FaYoutube} fontSize={"25px"} />
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
