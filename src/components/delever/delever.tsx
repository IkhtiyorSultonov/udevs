import { deleverData } from "@/config/delever";
import { Box, Card, HStack, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";

const delever = () => {
  return (
    <Box
      h={"780px"}
      pt={50}
      bgImg={"url(./images/bg.jpg)"}
      bgPosition={"center"}
      bgRepeat={"no-repeat"}
      bgSize={"cover"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Box w={"6xl"} display={"flex"} alignItems={"center"}>
        <Stack flexDirection={"column"}>
          <Image src={"./images/delever.png"} w={"550px"} />
        </Stack>
        <Stack direction={"column"} ml={10}>
          <Image src={"./images/deleverLogo.svg"} w={"252px"} mb={"30px"} />
          <Box
            w={"120px"}
            justifyContent={"center"}
            h={"36px"}
            display={"flex"}
            alignItems={"center"}
            bg={"rgba(255,87,34,0.2)"}
            borderRadius={"100px"}
          >
            <Image src="./images/deleverIco.svg" w={"25px"} />
            <Text fontSize={"14px"} color={"#FF5722"}>
              Delivery
            </Text>
          </Box>
          <Text
            w={"547px"}
            fontSize={"20px"}
            mt={"35px"}
            color={"#464359"}
            lineHeight={"40px"}
          >
            Delever - Delivery service automation targeted at both consumers and
            restaurants.
          </Text>
          <Text
            fontSize={"20px"}
            mt={"30px"}
            color={"#464359"}
            fontWeight={700}
          >
            What we did?
          </Text>
          <Box
            display={"flex"}
            w={"547px"}
            flexWrap={"wrap"}
            mb={"40px"}
            gap={5}
          >
            {deleverData.map((item, idx) => (
              <Card
                mt={2}
                bg={"#f4f7ff"}
                w={"160px"}
                h={"130px"}
                p={"20px"}
                key={idx}
              >
                <Image src={item.img} w={"56px"} />
                <Text color={"black"} mt={2}>
                  {item.name}
                </Text>
              </Card>
            ))}
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default delever;
