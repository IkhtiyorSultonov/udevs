import { Box, Card, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import TextField from "../text-field/text-field";
import { erpSystemData } from "@/config/erp";

const erp = () => {
  return (
    <Box
      h={"730px"}
      mt={"50px"}
      bg={"#f4f7ff"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box w={{ base: "95%", lg: '95%', xl: "6xl" }}>
        <TextField
          children={"ERP systems"}
          fontSize={{ base: "32px", lg: "64px" }}
        />
        <Box
          display={"flex"}
          flexDirection={{ base: "column", md: 'column', lg: "row" }}
          justifyContent={"space-between"}
          mt={{ base: "20px", lg: "50px" }}
        >
          <HStack
            h={{ base: "250px", lg: "500px" }}
            bgImg={"url(./images/mobileBg.png)"}
            bgPosition={"center"}
            w={{ md: '45%' }}
            bgRepeat={"no-repeat"}
            bgSize={"cover"}
          >
            <Image
              src={"./images/erp.png"}
              w={{ base: "350px", lg: "500px" }}
            />
          </HStack>
          <HStack flexDirection={"column"} w={"500px"}>
            <Text
              mt={{ base: "4", md: '0', lg: "0" }}
              w={{ base: "350px", lg: "500px" }}
              fontWeight={500}
              alignSelf={{ base: "start", lg: "center" }}
              fontSize={{ base: "18px", lg: "24px" }}
              lineHeight={{ base: "30px" }}
              color={"#18191f"}
            >
              IT Systems of any level of complexity at a convenient time for you
            </Text>
            <HStack
              mr={{ base: "10", sm: "12", lg: "0" }}
              w={{ base: "90%", sm: "450px", lg: "500px" }}
              flexWrap={"wrap"}
              justifyContent={{ base: "start", sm: "space-between" }}
              mt={"10px"}
            >
              {erpSystemData.map((card, idx) => (
                <Card
                  p={"10px"}
                  mt={5}
                  key={idx}
                  bg={"#e0e8ff"}
                  w={{ base: "110px", sm: "130px", lg: "150px" }}
                  h={"118px"}
                >
                  <Image src={card.img} w={{ base: "42px", lg: "56px" }} />
                  <Text color={"black"} pt={2}>
                    {card.name}
                  </Text>
                </Card>
              ))}
            </HStack>
          </HStack>
        </Box>
      </Box>
    </Box>
  );
};

export default erp;
