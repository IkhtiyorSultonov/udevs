import {
  Box,
  Card,
  HStack,
  Image,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useCallback, useState } from "react";
import TextField from "../text-field/text-field";
import { categoryData, toolsData } from "@/config/tools";

const tools = () => {
  const [filter, setFilter] = useState("all");
  useCallback(() => {
    switch (filter) {
      case "frontend":
        return toolsData.filter((c) => c.category === "frontend");
      case "backend":
        return toolsData.filter((c) => c.category === "backend");
      case "devops":
        return toolsData.filter((c) => c.category === "devops");
      case "testing":
        return toolsData.filter((c) => c.category === "testing");
      case "uX/UI":
        return toolsData.filter((c) => c.category === "uX/UI");
      case "Infrastructure":
        return toolsData.filter((c) => c.category === "Infrastructure");
      case "mobile":
        return toolsData.filter((c) => c.category === "mobile");
      default:
        return toolsData;
    }
  }, [filter]);
  return (
    <Box
      bg={"#f4f7ff"}
      h={"800px"}
      mt={20}
      alignItems={"center"}
      justifyContent={"center"}
      display={"flex"}
      flexDirection={"column"}
    >
      <Box w={"6xl"} display={"flex"} flexDirection={"column"}>
        <TextField children={"Tools"} fontSize="64px" />
        <HStack spacing={6} pt={10}>
          <RadioGroup>
            <Stack direction="row">
              {categoryData.map((c, idx) => (
                <Radio
                  colorScheme="whiteAlpha"
                  border={"2px solid blue"}
                  size={"lg"}
                  key={idx}
                  value={c.name}
                  onChange={() => setFilter(c.name)}
                >
                  <Text textTransform={"capitalize"}>{c.name}</Text>
                </Radio>
              ))}
            </Stack>
          </RadioGroup>
        </HStack>
        <HStack justifyContent={"start"} pt={10} flexWrap={"wrap"} gap={4}>
          {toolsData.map((item, idx) => (
            <Card
              key={idx}
              bg={item.category === filter ? "#ced6ee" : "#f4f7ff"}
              boxShadow={"0"}
              color={"black"}
              w={"90px"}
              borderRadius={"5px"}
              h={"90px"}
              opacity={item.category === filter ? "100%" : "50%"}
              display={"flex"}
              flexDirection={"column"}
              justify={"center"}
              alignItems={"center"}
            >
              <Image src={item.img} w={"24px"} />
              <Text color={"#000"} mt={"15px"}>
                {item.name}
              </Text>
            </Card>
          ))}
        </HStack>
      </Box>
    </Box>
  );
};

export default tools;
