import { Box, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import TextField from "../text-field/text-field";
import CountUp from "react-countup";

const team = () => {
  return (
    <Box
      h={{ base: "730px", lg: "570px" }}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      bg={"#f4f7ff"}
    >
      <Box w={{ base: "95% ", lg: "95%", xl: "6xl" }}>
        <TextField
          children={"Team"}
          fontSize={{ base: "32px", md: "50px", lg: "65px" }}
        />
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          flexDirection={{ base: "column", md: "row" }}
        >
          <HStack
            flexDirection={"column"}
            alignItems={{ base: "center", md: "start" }}
            justify={"center"}
          >
            <Image
              src="./images/teamBg.svg"
              w={"300px"}
              display={{ base: "block", md: "none" }}
              mt={5}
            />
            <Text
              mt={4}
              w={{ sm: "95%", md: "500px" }}
              color={"#464359"}
              fontSize={{ base: "16px", md: "20px" }}
              fontWeight={500}
              lineHeight={{ base: "30px", md: "40px" }}
            >
              For each project, we form a team that includes a project manager,
              business analyst, UI / UX designer, DevOps, QA engineer, backend
              and front-end developers.
            </Text>
            <Text
              display={"block"}
              fontSize={{ base: "80px", md: "120px" }}
              alignSelf={"start"}
              fontWeight={"bold"}
              color={"#1b5bf7"}
            >
              <CountUp end={100} duration={5.75} />+
            </Text>
            <Text
              fontSize={{ base: "24px", md: "40px" }}
              color={"#464359"}
              mt={-10}
              fontWeight={800}
              alignSelf={"start"}
              marginTop={{ base: "1", md: "0" }}
            >
              Dedicated team
            </Text>
          </HStack>
          <HStack>
            <Image
              src="./images/teamBg.svg"
              w={"500px"}
              display={{ base: "none", md: "block" }}
            />
          </HStack>
        </Box>
      </Box>
    </Box>
  );
};

export default team;
