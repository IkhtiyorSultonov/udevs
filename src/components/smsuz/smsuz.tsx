import { deleverData } from "@/config/delever";
import { Box, Card, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import TextField from "../text-field/text-field";

const smsuz = () => {
  return (
    <Box
      h={{ base: "auto", lg: "535px" }}
      bgImg={"url(./images/bg.jpg)"}
      bgPosition={"center"}
      bgRepeat={"no-repeat"}
      bgSize={"cover"}
      mt={{lg:20}}
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
        <Stack direction={"column"}  ml={{base:'0',lg:"10"}}>
          <TextField fontSize={{base:'52px',lg:"64px"}} children={"Smsuz.uz"} />
          <Box
            w={"142px"}
            justifyContent={"center"}
            h={"36px"}
            display={"flex"}
            alignItems={"center"}
            bg={"rgba(68,115,229,0.2)"}
            borderRadius={"100px"}
          >
            <Image src={"./images/Mail.svg"} />
            <Text pl={2} fontSize={"14px"} color={"#4473E5"}>
              Notification
            </Text>
          </Box>
          <Image
            mt={5}
            src={"./images/smsuz.png"}
            w={{base:'100%',sm:'80%'}}
            display={{ base: "block", lg: "none" }}
          />
          <Text
              w={{ base: "345px", lg: "547px" }}
              fontSize={{ base: "16px", lg: "20px" }}
              mt={"35px"}
              color={"#464359"}
              lineHeight={{ base: "30px", lg: "40px" }}
          >
            Smsuz.uz - It is a platform for bulk SMS messaging.
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
            justifyContent={{base:'space-between',lg:'start'}}
            mb={"40px"}
            gap={{base:3,lg:5}}
          >
            {deleverData.slice(0, 3).map((item, idx) => (
              <Card
              mt={2}
              bg={"#f4f7ff"}
              w={{ base: "110px", sm: "140px", lg: "150px" }}
              h={"118px"}
              p={{ base: "2", lg: "10px" }}
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
        <Stack flexDirection={"column"}>
          <Image
            src={"./images/smsuz.png"}
            w={"550px"}
            display={{ base: "none", lg: "block" }}
          />
        </Stack>
      </Box>
    </Box>
  );
};

export default smsuz;
