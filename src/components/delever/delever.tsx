import { deleverData } from "@/config/delever";
import { Box, Card, HStack, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";

const delever = () => {
  return (
    <Box
      h={{ base: "auto", lg: "535px" }}
      pt={50}
      mt={{lg:20}}
      bgImg={"url(./images/bg.jpg)"}
      bgPosition={"center"}
      bgRepeat={"no-repeat"}
      bgSize={"cover"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Box
        w={{ base: "95%", xl: "6xl" }}
        display={"flex"}
        flexDirection={{ base: "column", lg: "row" }}
        alignItems={{ base: "start", lg: "center" }}
      >
        <Stack flexDirection={"column"} display={{ base: "none", lg: "block" }}>
          <Image src={"./images/delever.png"} w={"550px"} />
        </Stack>
        <Stack direction={"column"} ml={{ base: 0, lg: 10 }}>
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
          <Image
            src={"./images/delever.png"}
            w={{base:'100%',sm:'80%'}}
            mt={5}
            display={{ base: "block", lg: "none" }}
          />
          <Text
            w={{ base: "370px", lg: "547px" }}
            fontSize={{ base: "16px", lg: "20px" }}
            mt={"35px"}
            color={"#464359"}
            lineHeight={{ base: "30px", lg: "40px" }}
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
            w={{ base: "100%", sm: "90%", lg: "547px" }}
            flexWrap={"wrap"}
            mb={"40px"}
            gap={5}
          >
            {deleverData.map((item, idx) => (
              <Card
                mt={2}
                bg={"#f4f7ff"}
                w={{ base: "105px", sm: "140px", lg: "150px" }}
                h={"118px"}
                p={{ base: "2", lg: "10px" }}
                key={idx}
              >
                <Image src={item.img} w={"56px"} />
                <Text
                  color={"black"}
                  mt={2}
                  fontSize={{ base: "14px", lg: "18px" }}
                >
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
