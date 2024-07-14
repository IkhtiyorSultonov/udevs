import { Box, Card, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import TextField from "../text-field/text-field";
import { ItData } from "@/config/It";

const It = () => {
  return (
    <Box
      h={"770px"}
      bgImg={"url(./images/bg.jpg)"}
      bgPosition={"center"}
      bgRepeat={"no-repeat"}
      bgSize={"cover"}
      mt={"50px"}
      display={"flex"}
      alignItems={"center"}
      lineHeight={"64px"}
     
      justifyContent={"center"}
    >
      <Box w={{ base: "95%", xl: "6xl" }} mt={{ base: "0px", lg: "50px" }} pt={{ base: '0', lg: "50px" }}>
        <TextField
          children={"IT consulting"}
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
              mt={2}
              src={"./images/itBg.svg"}
              display={{ base: "block", lg: "none" }}
              w={{ lg: "450px", xl: "500px" }}
              mb={4}
            />
            <Text

              fontSize={{ base: "16px", lg: "24px" }}
              lineHeight={{ base: "30px", lg: "40px" }}
              color={"#18191f"}
              w={{ base: "345px", lg: "" }}
              fontWeight={500}
              mb={"25px"}
            >
              We can improve the qualifications of your employees thereby
              increasing the efficiency of your company
            </Text>
            <Box
              display={"flex"}
              w={"full"}
              flexWrap={"wrap"}
              justifyContent={"space-between"}
              mb={"40px"}
            >
              {ItData.map((item, idx) => (
                <Card
                  mt={5}
                  bg={"#f4f7ff"}
                  w={{ base: "110px", sm: "140px", lg: "150px" }}
                  h={"118px"}
                  p={{ base: "2", lg: "10px" }}
                  key={idx}
                >
                  <Image src={item.img} w={"56px"} />
                  <Text color={"black"}>{item.name}</Text>
                </Card>
              ))}
            </Box>
          </HStack>
          <HStack mb={20}>
            <Image
              src={"./images/itBg.svg"}
              display={{ base: "none", lg: "block" }}
              w={{ lg: "450px", xl: "500px" }}
            />
          </HStack>
        </Box>
      </Box>
    </Box>
  );
};

export default It;
