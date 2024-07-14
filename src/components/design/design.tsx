import { Box, Card, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import TextField from "../text-field/text-field";
import { designData, designTech } from "@/config/design";

const design = () => {
  return (
    <Box
      h={"850px"}
      bgImg={"url(./images/bg.jpg)"}
      bgPosition={"center"}
      bgRepeat={"no-repeat"}
      bgSize={"cover"}
      mt={"50px"}
      display={"flex"}
      alignItems={"center"}
      lineHeight={"64px"}
      justifyContent={"center"}
      mb={{base:'200px',lg:'0'}}
    >
      <Box
        w={{ base: "95%", xl: "6xl" }}
        mt={{ base: "180px", lg: "50px" }}
        pt={"50px"}
      >
        <TextField
          children={"UI / UX design"}
          fontSize={{ base: "32px", lg: "64px" }}
          width="800px"
        />
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          pt={{ base: "5", lg: "60px" }}
        >
          <HStack
            w={{ base: "500px", lg: "50%", xl: "500px" }}
            flexDirection={"column"}
            alignItems={"start"}
            justifyContent={"center"}
          >
            <Image
              src={"./images/mobileImg.png"}
              w={"345px"}
              display={{ base: "block", lg: "none" }}
              bgImg={"url(./images/mobileBg.png)"}
              bgPosition={"center"}
              bgRepeat={"no-repeat"}
              bgSize={"cover"}
            />
            <Text
              fontSize={{ base: "16px", lg: "24px" }}
              lineHeight={{ base: "30px", lg: "40px" }}
              color={"#18191f"}
              w={{ base: "345px", lg: "" }}
              fontWeight={500}
              mb={"25px"}
            >
              Our company takes a human-centered approach to design
            </Text>
            <Box
              display={"flex"}
              w={"full"}
              flexWrap={"wrap"}
              justifyContent={"space-between"}
              mb={"40px"}
            >
              {designData.map((item, idx) => (
                <Card
                  mt={5}
                  bg={"#f4f7ff"}
                  w={{ base: "110px", sm: "140px", lg: "150px" }}
                  h={"118px"}
                  p={{ base: "2", lg: "10px" }}
                  key={idx}
                >
                  <Image src={item.img} w={"56px"} />
                  <Text color={"black"} fontSize={{ base: "14px", lg: "18px" }}>
                    {item.name}
                  </Text>
                </Card>
              ))}
            </Box>
            <Text fontSize={{ base: "32px", lg: "42px" }} color={"#464359"}>
              Technologies
            </Text>
            <Box
              display={"flex"}
              w={{ base: "345px", lg: "500px" }}
              mt={"20px"}
              mb={"40px"}
              justifyContent={"space-between"}
            >
              {designTech.map((item, idx) => (
                <Card
                  w={{ base: "80px", lg: "100px" }}
                  key={idx}
                  bg={"#fff"}
                  boxShadow={"0"}
                >
                  <Image src={item.img} w={{ base: "40px", lg: "56px" }} />
                  <Text pl={{ base: "0", lg: "10px" }} color={"black"}>
                    {item.name}
                  </Text>
                </Card>
              ))}
            </Box>
          </HStack>
          <HStack
            h={"700px"}
            bgImg={"url(./images/mobileBg.png)"}
            bgPosition={"center"}
            bgRepeat={"no-repeat"}
            bgSize={"cover"}
          >
            <Image
              src={"./images/mobileImg.png"}
              w={{ lg: "450px", xl: "500px" }}
              display={{ base: "none", lg: "block" }}
            />
          </HStack>
        </Box>
      </Box>
    </Box>
  );
};

export default design;
