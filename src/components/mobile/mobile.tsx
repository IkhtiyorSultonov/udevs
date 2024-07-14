import { Box, Card, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import TextField from "../text-field/text-field";
import { mobileData, mobTechnologies } from "@/config/mobile";

const mobile = () => {
  return (
    <Box
      h={{ base: "1000px", md: "800px", xl: "850px" }}
      bgImg={"url(./images/bg.jpg)"}
      bgPosition={"center"}
      bgRepeat={"no-repeat"}
      bgSize={"cover"}
      ml={{ sm: "5", lg: "0" }}
      display={"flex"}
      alignItems={"center"}
      lineHeight={"64px"}
      justifyContent={{base:'center', sm: "start", md: "center" }}
    >
      <Box
        w={{ base: "95%", sm: "70%", md: "95%", xl: "6xl" }}
        mt={"50px"}
        pt={"50px"}
      >
        <TextField
          children={"Development of mobile applications"}
          fontSize={{ base: "32px", md: "50px", lg: "64px" }}
          width={{ base: "90%", lg: "800px" }}
          lineHeight={{ base: "45px", md: "60px", lg: "70px" }}
        />
        <Image
          src={"./images/mobileImg.png"}
          w={"345px"}
          display={{ base: "block", md: "none" }}
          bgImg={"url(./images/mobileBg.png)"}
          bgPosition={"center"}
          bgRepeat={"no-repeat"}
          bgSize={"cover"}
          mt={4}
        />
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          pt={{ base: "20px", md: "60px" }}
        >
          <HStack
            w={{ base: "95%", md: "50%", lg: "500px" }}
            flexDirection={"column"}
            alignItems={"start"}
            justifyContent={"center"}
          >
            <Text
              fontSize={{ base: "16px", lg: "24px" }}
              lineHeight={{ base: "30px", lg: "40px" }}
              color={"#18191f"}
              fontWeight={500}
              mb={"25px"}
            >
              In collaboration with startups, we have learned how to create a
              creative and functional user interface for mobile applications.
            </Text>
            <Box
              display={"flex"}
              w={{base:'350px', md: "400px", lg: "95%" }}
              justifyContent={"space-between"}
              mb={"40px"}
            >
              {mobileData.map((item, idx) => (
                <Card
                  bg={"#f4f7ff"}
                  w={{ base: "105px", md: "110px", lg: "150px" }}
                  h={{ base: "100px", md: "120px", lg: "118px" }}
                  p={{ base: "5px", lg: "10px" }}
                  key={idx}
                >
                  <Image src={item.img} w={{ base: "42px", md: "56px" }} />
                  <Text color={"black"} fontSize={{ base: "14px", lg: "18px" }}>
                    {item.name}
                  </Text>
                </Card>
              ))}
            </Box>
            <Text fontSize={{ base: "32px", md: "40px" }} color={"#464359"}>
              Technologies
            </Text>
            <Box
              display={"flex"}
              w={{ base: "70%", lg: "342px" }}
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
            ml={{ md: "4", lg: "0" }}
            display={{ base: "none", md: "block" }}
            h={{ md: "300px", lg: "500px" }}
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
