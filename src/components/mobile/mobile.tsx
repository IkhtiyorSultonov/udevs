import { Box, Card, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import TextField from "../text-field/text-field";
import { mobileData, mobTechnologies } from "@/config/mobile";

const mobile = () => {
  return (
    <Box
      h={"850px"}
      bgImg={"url(./images/bg.jpg)"}
      bgPosition={"center"}
      bgRepeat={"no-repeat"}
      bgSize={"cover"}
      display={"flex"}
      alignItems={"center"}
      lineHeight={"64px"}
      justifyContent={"center"}
    >
      <Box w={"6xl"} mt={"50px"} pt={"50px"}>
        <TextField
          children={"Development of mobile applications"}
          fontSize="64px"
          width="800px"
        />
        <Box display={"flex"} justifyContent={"space-between"} pt={"60px"}>
          <HStack
            w={"500px"}
            flexDirection={"column"}
            alignItems={"start"}
            justifyContent={"center"}
          >
            <Text
              fontSize={"24px"}
              lineHeight={"40px"}
              color={"#18191f"}
              fontWeight={500}
              mb={"25px"}
            >
              In collaboration with startups, we have learned how to create a
              creative and functional user interface for mobile applications.
            </Text>
            <Box
              display={"flex"}
              w={"full"}
              justifyContent={"space-between"}
              mb={"40px"}
            >
              {mobileData.map((item, idx) => (
                <Card
                  bg={"#f4f7ff"}
                  w={"150px"}
                  h={"118px"}
                  p={"10px"}
                  key={idx}
                >
                  <Image src={item.img} w={"56px"} />
                  <Text color={"black"}>{item.name}</Text>
                </Card>
              ))}
            </Box>
            <Text fontSize={"42px"} color={"#464359"}>
              Technologies
            </Text>
            <Box
              display={"flex"}
              w={"350px"}
              mb={"40px"}
              justifyContent={"space-between"}
            >
              {mobTechnologies.map((item, idx) => (
                <Card w={"70px"} key={idx} bg={"#fff"} boxShadow={"0"}>
                  <Image src={item.img} w={"56px"} />
                  <Text pl={"10px"} color={"black"}>
                    {item.name}
                  </Text>
                </Card>
              ))}
            </Box>
          </HStack>
          <HStack
            h={"500px"}
            bgImg={"url(./images/mobileBg.png)"}
            bgPosition={"center"}
            bgRepeat={"no-repeat"}
            bgSize={"cover"}
          >
            <Image src={"./images/mobileImg.png"} w={"500px"} />
          </HStack>
        </Box>
      </Box>
    </Box>
  );
};

export default mobile;
