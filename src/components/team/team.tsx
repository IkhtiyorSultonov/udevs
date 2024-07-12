import { Box, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import TextField from "../text-field/text-field";
import CountUp from 'react-countup';

const team = () => {
  return (
    <Box
      h={"570px"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={'center'}
      bg={'#f4f7ff'}
    >
      <Box w={"6xl"}>
        <TextField children={"Team"} fontSize="65px"/>
        <Box display={'flex'} justifyContent={'space-between'}>
          <HStack flexDirection={'column'} alignItems={'start'} justify={'center'}>
            <Text  w={'500px'} color={'#464359'} fontSize={'20px'} fontWeight={500} lineHeight={'40px'}>
            For each project, we form a team that includes a project manager,
            business analyst, UI / UX designer, DevOps, QA engineer, backend and
            front-end developers.
            </Text>
            <Text display={'block'} fontSize={'120px'} fontWeight={'bold'} color={'#1b5bf7'}><CountUp end={100}  duration={5.75}/>+</Text>
            <Text fontSize={'40px'} color={'#464359'} mt={-10} fontWeight={800}>Dedicated team</Text>
          </HStack>
          <HStack>
            <Image src="./images/teamBg.svg" w={'500px'}/>
          </HStack>
        </Box>
      </Box>
    </Box>
  );
};

export default team;
