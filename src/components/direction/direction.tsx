import { Box, Button, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const direction = () => {
  return (
    <Box
      h={{ base:'500px',sm: "680px", lg: "641px" }}
      bgImg={"url(./images/bg.jpg)"}
      bgPosition={"center"}
      bgRepeat={"no-repeat"}
      bgSize={"cover"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box
        display={"flex"}
        flexDirection={{ base: "column", md: "column", lg: "row" }}
        w={{ sm: "95%", lg: "95%", xl: "6xl" }}
        justifyContent={{ sm: "center", lg: "space-between" }}
        alignItems={{ sm: "center", lg: "start" }}
      >
        <HStack
          flexDirection={"column"}
          h={{ base: "160px", sm: "160px", md: "auto" }}
          w={{ sm: "450px", md: "550px" }}
          alignItems={{ base: "center", sm: "center", lg: "start" }}
        >
          <Image
            src="./images/logo.svg"
            w={{ base: "125px", sm: "125px", lg: "267px" }}
          />
          <Text
            fontSize={{ md: "24px", lg: "40px" }}
            mr={{ sm: "0", md: "20px" }}
            color={"#464359"}
            fontWeight={800}
            mt={{ base: "2", md: "8" }}
            mb={{ sm: "0", md: "20px" }}
          >
            IT-Outsourcing Company
          </Text>
          <Text
            fontSize={{ md: "24px", lg: "40px" }}
            color={"#1b5bf7"}
            w={{ sm: "450px", lg: "548px" }}
            fontWeight={"bold"}
            lineHeight={"50px"}
            textAlign={{ sm: "center", lg: "start" }}
          >
            <TypeAnimation
              sequence={[
                "Development of mobile applications",
                1000,
                "Development and implementation ERP systems",
                1000,
                "User interface, User experience",
                1000,
              ]}
            />
          </Text>
          <Button
            variant={"solid"}
            mt={6}
            bg={"#1b5bf7"}
            colorScheme="blue"
            w={"248px"}
            display={{ base: "none", lg: "block" }}
            h={"56px"}
            fontSize={"20px"}
            color={"#fff"}
          >
            Contact
          </Button>
        </HStack>
        <HStack>
          <Image
            src="./images/heroImg.svg"
            w={{ base:'345px',sm: "450px", md: "548px" }}
            mt={{ sm: "10", lg: "" }}
          />
        </HStack>
      </Box>
    </Box>
  );
};

export default direction;
