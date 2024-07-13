import { deleverData } from "@/config/delever";
import { Box, Card, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";

const iman = () => {
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
                <Stack direction={"column"} ml={10}>
                    <Image src={"./images/imanLogo.svg"} w={"170px"} mb={5} />
                    <Box
                        w={"142px"}
                        justifyContent={"center"}
                        h={"36px"}
                        display={"flex"}
                        alignItems={"center"}
                        bg={"rgba(1,202,176,0.2)"}
                        borderRadius={"100px"}
                    >
                        <Image src={"./images/finance.svg"} />
                        <Text pl={2} fontSize={"14px"} color={"#01CAB0"}>
                            Finance
                        </Text>
                    </Box>
                    <Text
                        w={"547px"}
                        fontSize={"20px"}
                        mt={"35px"}
                        color={"#464359"}
                        lineHeight={"40px"}
                    >
                        Iman - It is a mutual financing platform based on the principles of
                        Islamic Finance. Buyers, sellers and investors meet here.
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
                        {deleverData.slice(0, 3).map((item, idx) => (
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
                <Stack flexDirection={"column"}>
                    <Image src={"./images/smsuz.png"} w={"550px"} />
                </Stack>
            </Box>
        </Box>
    );
};

export default iman;
