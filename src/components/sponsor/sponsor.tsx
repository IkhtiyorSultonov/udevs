import { Box,  HStack, Image } from "@chakra-ui/react";
import React from "react";
import TextField from "../text-field/text-field";
import { sponsorCarousel } from "@/config/carousel";
import { sponsrsData, sponsrsData2 } from "@/config/sponsor";
import Marquee from "react-fast-marquee";
const sponsor = () => {
  return (
    <Box
      h={"535px"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={'center'}
    >
      <Box w={"6xl"}>
        <TextField children={"Our clients"} fontSize="64px" />
      </Box>
      <HStack h={"auto"} w={"full"} mt={10} >
        <Marquee direction="left" speed={20} >
          {sponsrsData.map((item, idx) => (
                <Image
                key={idx}
                src={item.img}
                w={"213px"}
                h={"113px"} 
                borderRadius={15}
                bg={'#fff'}
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
                w={"223px"}
                h={"113px"}    
              />
          ))}
        </Marquee>
      </HStack>
    </Box>
  );
};

export default sponsor;
