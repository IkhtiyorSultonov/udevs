import { Box, Button, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const direction = () => {
  return (
    <Box
      h={"641px"}
      bgImg={"url(./images/bg.jpg)"}
      bgPosition={"center"}
      bgRepeat={"no-repeat"}
      bgSize={"cover"}
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={"center"}
      >
     <Box
       display={"flex"}
       flexDirection={"row"}
       w={'6xl'}
       justifyContent={"space-between"}
     >
     <HStack display={"block"} w={"550px"}>
        <Image src="./images/logo.svg" w={"267px"} />
        <Text
          fontSize={"40px"}
          mr={"20px"}
          color={"#464359"}
          fontWeight={800}
          mt={8}
          mb={"20px"}
        >
          IT-Outsourcing Company
        </Text>
        <TypeAnimation
          sequence={[
            "Development of mobile applications",
            1000,
            "Development and implementation ERP systems",
            1000,
            "User interface, User experience",
            1000,
          ]}
          style={{
            fontSize: "40px",
            color: "#1b5bf7",
            width: "548px",
            lineHeight: "50px",
            fontWeight: "bold",
          }}
        />
        <Button
          variant={"solid"}
          mt={6}
          bg={"#1b5bf7"}
          colorScheme="blue"
          w={"248px"}
          display={"block"}
          h={"56px"}
          fontSize={"20px"}
          color={"#fff"}
        >
          Contact
        </Button>
      </HStack>
      <HStack>
        <Image src="./images/heroImg.svg" w={"548px"} />
      </HStack>
     </Box>
    </Box>
  );
};

export default direction;
