import { deleverData } from '@/config/delever'
import { Box, Card, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const goodzone = () => {
  return (
    <Box
      h={"780px"}
      bgImg={"url(./images/bg.jpg)"}
      bgPosition={"center"}
      bgRepeat={"no-repeat"}
      bgSize={"cover"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Box w={"6xl"} display={"flex"} alignItems={"center"}>
        <Stack flexDirection={"column"}>
          <Image src={"./images/goodzone.png"} w={"550px"} />
        </Stack>
        <Stack direction={"column"} ml={10}>
          <Image src={"./images/gzLogo.png"} w={"292px"} mb={"30px"} />
          <Box
            w={"150px"}
            justifyContent={"center"}
            h={"36px"}
            display={"flex"}
            alignItems={"center"}
            bg={"rgba(245,0,0,0.2)"}
            borderRadius={"100px"}
          >
            <Image src="./images/bag.svg" w={"25px"} />
            <Text ml={2} fontSize={"14px"} color={"#FF5722"}>
            E-Commerce
            </Text>
          </Box>
          <Text
            w={"547px"}
            fontSize={"20px"}
            mt={"35px"}
            color={"#464359"}
            lineHeight={"40px"}
          >
           Goodzone - Internet shop of household appliances in Uzbekistan.
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
            w={"547px"}
            flexWrap={"wrap"}
            mb={"40px"}
            gap={5}
          >
            {deleverData.map((item, idx) => (
              <Card
                mt={2}
                bg={"#f4f7ff"}
                w={"160px"}
                h={"130px"}
                p={"20px"}
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
      </Box>
    </Box>
  )
}

export default goodzone