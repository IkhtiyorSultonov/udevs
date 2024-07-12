import { Box, Card, HStack, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import TextField from "../text-field/text-field";
import { ourService } from "@/config/constains";
import { useTranslation } from "react-i18next";

const ourServices = () => {
    const {t}=useTranslation()
  return (
    <Box h={"611px"} w={"6xl"} margin={"50px auto"}>
      <TextField children={"Our services"} fontSize="64px" />
      <HStack justifyContent={"space-between"} flexWrap={"wrap"}>
        {ourService.map((card, idx) => (
          <Card key={idx} w={"353px"} h={"210px"} bg={"#f4f7ff"} p={card.scale?'10px':"32px"} mt={5}>
            <Image src={card.img} w={card.scale?'80px':'35px'} />
            <Text
              fontSize={"20px"}
              color={"#18191f"}
              fontWeight={"bold"}
              pt={card.scale?'0':'15px'}
              pl={card.scale?'20px':'0'}
              w={'95%'}
              textTransform={"capitalize"}
            >
              {t(card.name)}
            </Text>
          </Card>
        ))}
      </HStack>
    </Box>
  );
};

export default ourServices;
