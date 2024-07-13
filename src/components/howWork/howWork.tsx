import {
  Box,
  Card,
  HStack,
  Image,
  Progress,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  Stepper,
  StepSeparator,
  StepStatus,
  StepTitle,
  Text,
} from "@chakra-ui/react";
import React from "react";
import TextField from "../text-field/text-field";
import { workData } from "@/config/work";

const howWork = () => {
  return (
    <Box
      display={"flex"}
      h={"500px"}
      flexDirection={"column"}
      alignItems={"center"}
    >
      <Box w={"6xl"}>
        <TextField children={"How we work!"} fontSize="64px" />
      </Box>
      <Box
        display={"flex"}
        mt={20}
        w={"90%"}
        justifyContent={"space-between"}
        pos={"relative"}
      >
        <Image
          src={"./images/stipper.svg"}
          pos={"absolute"}
          zIndex={1}
          top={10}
          left={"10%"}
        />
        {workData.map((item, idx) => (
          <Card
            key={idx}
            w={"250px"}
            h={"160px"}
            alignItems={"center"}
            bg={"#fff"}
            boxShadow={"0"}
            justifyContent={"space-between"}
          >
            <Image src={item.img} w={"81px"} h={"80px"} zIndex={2} />
            <Text color={"black"} fontWeight={700} mt={2}>
              {item.name}
            </Text>
            <Text fontSize={"16px"} textAlign={"center"} color={"#000"} mt={2}>
              {item.title}
            </Text>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default howWork;
