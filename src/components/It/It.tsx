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
      <Box w={"6xl"} mt={"50px"} pt={"50px"}>
        <TextField children={"IT consulting"} fontSize="64px" width="800px" />
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
          </HStack>
          <HStack mb={20}>
            <Image src={"./images/itBg.svg"} w={"500px"} />
          </HStack>
        </Box>
      </Box>
    </Box>
  );
};

export default It;
