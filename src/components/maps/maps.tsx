import {
  Box,
  Button,
  Card,
  HStack,
  Icon,
  Image,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import TextField from "../text-field/text-field";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaTelegram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const maps = () => {
  return (
    <Box
      h={{ base: "1200px", lg: "980px" }}
      w={"full"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      bgImg={"url(./images/bg.jpg)"}
      bgPosition={"center"}
      bgRepeat={"no-repeat"}
      bgSize={"cover"}
    >
      <Box w={{ base: "95%", lg: "6xl" }}>
        <TextField
          children={"Contact us"}
          fontSize={{ base: "32px", lg: "64px" }}
        />
        <Box
          w={"100%"}
          h={"680px"}
          bg={"#fff"}
          mt={{ base: "40px", lg: "80px" }}
          display={"flex"}
          flexDirection={{ base: "column", lg: "row" }}
          boxShadow={{ base: "0", lg: "0 0 12px #B4BEC8" }}
        >
          <Box
            p={{ base: 0, lg: "40px 98px 88px" }}
            w={{ base: "100%", lg: "50%" }}
            color={"#B4BEC8"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={{ base: "center", lg: "start" }}
          >
            <Text
              fontSize={"20px"}
              color={"#0f001a"}
              fontWeight={700}
              mb={"20px"}
              mt={{ base: -10, lg: 0 }}
              alignSelf={'start'}
            >
              Leave us a message
            </Text>
            <Input
              h={"60px"}
              placeholder={"Name"}
              w={"full"}
              border={"1px solid #B4BEC8"}
              type="text"
              name="name"
              _hover={{ border: "1px solid #B4BEC8" }}
            />
            <Input
              h={"60px"}
              placeholder={"Your email"}
              w={"full"}
              mt={"20px"}
              border={"1px solid #B4BEC8"}
              type="email"
              name="name"
              _hover={{ border: "1px solid #B4BEC8" }}
            />
            <Textarea
              placeholder="Briefly describe your project"
              name="text"
              h={"122px"}
              mt={"20px"}
              border={"1px solid #B4BEC8"}
              resize={"none"}
              _hover={{ border: "1px solid #B4BEC8" }}
            />
            <Button
              w={"250px"}
              h={"44px"}
              colorScheme="facebook"
              lineHeight={"44px"}
              bg={"#1b5bf7"}
              fontSize={"20px"}
              mt={"25px"}
              color={"#fff"}
            >
              Send
            </Button>
          </Box>
          <Box mt={{base:'20px',lg:"80px"}} color={"#0f001a"}>
            <HStack h={"50px"} pt={5} w={"450px"}>
              <Image src="./images/loaction.svg" w={"25px"} />
              <Text>
                Ташкент, Мирзо-Улугбекский район, 5-й пр. Курган, 32 адрес
              </Text>
            </HStack>
            <HStack h={"50px"} pt={5}>
              <Image src="./images/call.svg" w={"25px"} />
              <Text>+998336600999</Text>
            </HStack>
            <HStack h={"50px"} pt={5}>
              <Image src="./images/maill.svg" w={"25px"} />
              <Text>azizbek.b@udevs.iox`</Text>
            </HStack>
            <HStack pt={5}>
              <Icon as={FaTelegram} fontSize={"25px"} color={"blue"} />
              <Link
                href={"https://t.me/azizbekbakhodirov"}
                style={{ color: "blue" }}
              >
                https://t.me/azizbekbakhodirov
              </Link>
            </HStack>
            <HStack gap={6} mt={5}>
              <Icon as={FaYoutube} fontSize={"25px"} color={"blue"} />
              <Icon as={FaInstagram} fontSize={"25px"} color={"blue"} />
              <Icon as={FaFacebook} fontSize={"25px"} color={"blue"} />
              <Icon as={FaTwitter} fontSize={"25px"} color={"blue"} />
            </HStack>
            <Box width={"300px"} h={"300px"} mt={5}>
              <iframe
                src="https://yandex.com/map-widget/v1/?from=mapframe&ll=69.329424%2C41.337761&mode=usermaps&source=mapframe&um=constructor%3A3d9eefa927bd54bcc9e8fa398a73c8cafb60622737263c96ad9341c32c21fa69&utm_source=mapframe&z=14"
                width="350"
                height="200"
                style={{ position: "relative" }}
              ></iframe>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default maps;
