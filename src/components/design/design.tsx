import { Box, Card, HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'
import TextField from '../text-field/text-field'
import { designData, designTech } from '@/config/design'

const design = () => {
  return (
    <Box
      h={"850px"}
      bgImg={"url(./images/bg.jpg)"}
      bgPosition={"center"}
      bgRepeat={"no-repeat"}
      bgSize={"cover"}
      mt={'50px'}
      display={"flex"}
      alignItems={"center"}
      lineHeight={"64px"}
      justifyContent={"center"}
    >
      <Box w={"6xl"} mt={"50px"} pt={"50px"}>
        <TextField
          children={"UI / UX design"}
          fontSize="64px"
          width="800px"
        />
        <Box display={"flex"} justifyContent={"space-between"} pt={"60px"}>
          <HStack
            w={"500px"}
            flexDirection={"column"}
            alignItems={"start"}
            justifyContent={"center"}
          >
            <Text
              fontSize={"24px"}
              lineHeight={"40px"}
              color={"#18191f"}
              fontWeight={500}
              mb={"25px"}
            >
              Our company takes a human-centered approach to design
            </Text>
            <Box
              display={"flex"}
              w={"full"}
              flexWrap={'wrap'}
              justifyContent={"space-between"}
              mb={"40px"}
            >
              {designData.map((item, idx) => (
                <Card
                    mt={5}
                  bg={"#f4f7ff"}
                  w={"150px"}
                  h={"118px"}
                  p={"10px"}
                  key={idx}
                >
                  <Image src={item.img} w={"56px"} />
                  <Text color={"black"}>{item.name}</Text>
                </Card>
              ))}
            </Box>
            <Text fontSize={"42px"} color={"#464359"}>
              Technologies
            </Text>
            <Box
              display={"flex"}
              w={"500px"}
              mt={'20px'}
              mb={"40px"}
              justifyContent={"space-between"}
            >
              {designTech.map((item, idx) => (
                <Card w={"100px"} key={idx} bg={"#fff"} boxShadow={"0"}>
                  <Image src={item.img} w={"56px"} />
                  <Text pl={"10px"} color={"black"}>
                    {item.name}
                  </Text>
                </Card>
              ))}
            </Box>
          </HStack>
          <HStack
            h={'700px'}
            bgImg={"url(./images/mobileBg.png)"}
            bgPosition={"center"}
            bgRepeat={"no-repeat"}
            bgSize={"cover"}
          >
            <Image src={"./images/mobileImg.png"} w={"500px"} />
          </HStack>
        </Box>
      </Box>
    </Box>
  )
}

export default design