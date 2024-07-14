import {
  Box,
  Card,
  Image,
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
      h={{base:'auto',lg:"500px"}}
      flexDirection={"column"}
      alignItems={"center"}
    >
      <Box w={{base:'95%',lg:"6xl"}}>
        <TextField children={"How we work!"} fontSize={{base:'32px',lg:"64px"}} />
      </Box>
      <Box
        display={{base:'none',lg:"flex"}}
        mt={{base:0,lg:20}}
        w={"90%"}
        flexDirection={{base:'column',lg:'row'}}
        justifyContent={"space-between"}
        pos={"relative"}
      >
        <Image
          src={"./images/stipper.svg"}
          pos={"absolute"}
          zIndex={1}
          top={10}
          left={{base:'0',lg:'10%'}}
        />
        {workData.map((item, idx) => (
          <Card
            key={idx}
            w={"250px"}
            mt={{base:10,lg:0}}
            h={{base:'180px',lg:"160px"}}
            alignItems={{base:'start',lg:"center"}}
            bg={"#fff"}
            boxShadow={"0"}
            justifyContent={"space-between"}
          >
            <Image src={item.img} w={"81px"} h={"80px"} zIndex={2} />
            <Text color={"black"} fontWeight={700} mt={2}>
              {item.name}
            </Text>
            <Text fontSize={"16px"} textAlign={{base:'start',lg:'center'}} color={"#000"} mt={{base:0,lg:2}}>
              {item.title}
            </Text>
          </Card>
        ))}
      </Box>
      <Stepper index={5} orientation='vertical' w={'90%'} height='400px' gap='0' mt={5} display={{base:'block',lg:'none'}}>
      {workData.map((step, index) => (
        <Step key={index} style={{marginTop:'30px'}}>
          <StepIndicator  w={'61px'} h={'60px'}>
          <Image src={step.img} w={"61px"} h={"60px"} zIndex={2} />
          </StepIndicator>
          <Box  w={'90%'} >
            <StepTitle  style={{fontWeight:'bold'}}>{step.name}</StepTitle>
            <StepDescription>{step.title}</StepDescription>
          </Box>

          <StepSeparator />
        </Step>
      ))}
    </Stepper>
    </Box>
  );
};

export default howWork;
