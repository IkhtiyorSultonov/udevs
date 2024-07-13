import { Box, Card, HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'
import TextField from '../text-field/text-field'
import { optizimationData } from '@/config/optizimation'

const optizimation = () => {
  return (
    <Box
    h={"900px"}
    mt={"100px"}
    bg={"#f4f7ff"}
    display={"flex"}
    flexDirection={"column"}
    justifyContent={"center"}
    alignItems={"center"}
  >
    <Box w={"6xl"}>
      <TextField children={"Optimization Infrastructure"} fontSize="64px" width='800px' lineHeight='65px' />
      <Box display={"flex"} justifyContent={"space-between"} mt={"80px"}>
        <HStack
          h={"500px"}
          bgImg={"url(./images/mobileBg.png)"}
          bgPosition={"center"}
          bgRepeat={"no-repeat"}
          bgSize={"cover"}
        >
          <Image src={"./images/erp.png"} w={"500px"} />
        </HStack>
        <HStack flexDirection={"column"} w={"500px"}>
          <Text
            w={"500px"}
            fontWeight={500}
            fontSize={"24px"}
            color={"#18191f"}
          >
            Our experienced professionals will help you optimize your infrastructure
          </Text>
          <HStack
            flexWrap={"wrap"}
            justifyContent={"space-between"}
            mt={"25px"}
          >
            {optizimationData.map((card, idx) => (
              <Card
                p={"10px"}
                mt={5}
                key={idx}
                bg={"#e0e8ff"}
                w={"150px"}
                h={"118px"}
              >
                <Image src={card.img} w={"56px"} />
                <Text color={"black"} pt={2}>
                  {card.name}
                </Text>
              </Card>
            ))}
          </HStack>
        </HStack>
      </Box>
    </Box>
  </Box>
  )
}

export default optizimation