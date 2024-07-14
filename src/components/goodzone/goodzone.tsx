import { deleverData } from "@/config/delever";
import { Box, Card, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";

const goodzone = () => {
  return (
    <Box
      h={{ base: "auto", lg: "780px" }}
      bgImg={"url(./images/bg.jpg)"}
      bgPosition={"center"}
      bgRepeat={"no-repeat"}
      bgSize={"cover"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      mt={{ base: '10' }}
    >
      <Box
        w={{ base: "95%", xl: "6xl" }}
        display={"flex"}
        flexDirection={{ base: "column", lg: "row" }}
        alignItems={{ base: "start", lg: "center" }}
      >
        <Stack flexDirection={"column"} display={{ base: "none", lg: "block" }}>
          <Image src={"./images/goodzone.png"} w={"550px"} />
        </Stack>
        <Stack direction={"column"} ml={{ base: 0, lg: 10 }} w={{ base: '95%', lg: 'auto' }}>
          <Image src={"./images/gzLogo.png"} w={"292px"} mb={{ base: "0px", lg: '30px' }} />
          <Box
            w={"150px"}
            justifyContent={"center"}
            h={"36px"}
            display={"flex"}
            alignItems={"center"}
            bg={"rgba(245,0,0,0.2)"}
            borderRadius={"100px"}
          >
            <Image src="./images/bag.svg" w={"25px"} />
            <Text ml={2} fontSize={"14px"} color={"#FF5722"}>
              E-Commerce
            </Text>
          </Box>
          <Image src={"./images/goodzone.png"}   w={{base:'100%',sm:'80%'}}
            mt={5}
            display={{ base: "block", lg: "none" }} />
          <Text
            w={{ base: "370px", lg: "547px" }}
            fontSize={{ base: "16px", lg: "20px" }}
            mt={"35px"}
            color={"#464359"}
            lineHeight={{ base: "30px", lg: "40px" }}
          >
            Goodzone - Internet shop of household appliances in Uzbekistan.
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
            gap={{ base: 3, lg: 5 }}
          >
            {deleverData.map((item, idx) => (
              <Card
                mt={2}
                bg={"#f4f7ff"}
                w={{ base: "104px", sm: "140px", lg: "150px" }}
                h={"118px"}
                p={{ base: "2", lg: "10px" }}
                key={idx}
              >
                <Image src={item.img} w={{ base: '42px', lg: "56px" }} />
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

export default goodzone;
