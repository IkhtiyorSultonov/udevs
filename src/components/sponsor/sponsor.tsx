import { Box, HStack, Image } from "@chakra-ui/react";
import React from "react";
import TextField from "../text-field/text-field";
import { sponsrsData, sponsrsData2 } from "@/config/sponsor";
import Marquee from "react-fast-marquee";
const sponsor = () => {
  return (
    <Box
      h={{ base: '400px', lg: "535px" }}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={'center'}
      id="clients"
    >
      <Box w={{ base: '95%', xl: "6xl" }}>
        <TextField children={"Our clients"} fontSize={{ base: "32px", lg: "64px" }} />
      </Box>
      <HStack h={"auto"} w={"full"} mt={10} >
        <Marquee direction="left" speed={20} >
          {sponsrsData.map((item, idx) => (
            <Image
              key={idx}
              src={item.img}
              w={{ base: '130px', lg: "213px" }}
              h={{ base: '78px', lg: "113px" }}
              borderRadius={15}
              bg={'#fff'}
              ml={{ base: 5, lg: 0 }}
            />
          ))}
        </Marquee>
      </HStack>
      <HStack mt={10}>
        <Marquee direction="right" speed={20}>
          {sponsrsData2.map((item, idx) => (
            <Image
              key={idx}
              src={item.img}
              w={{ base: '130px', lg: "213px" }}
              h={{ base: '78px', lg: "113px" }}
              ml={{ base: 5, lg: 0 }}
            />
          ))}
        </Marquee>
      </HStack>
    </Box>
  );
};

export default sponsor;
