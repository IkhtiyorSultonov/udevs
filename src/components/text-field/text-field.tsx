import { Text } from "@chakra-ui/react";
import React, { FC } from "react";
import { TextFieldProps } from "./text-field.props";

const TextField: FC<TextFieldProps> = ({
  children,
  fontFamily,
  fontSize,
  width,
  lineHeight,
  display,
  textAlign,
  
}) => {
  return (
    <Text
      fontSize={fontSize}
      fontFamily={fontFamily}
      color={"#1b5bf7"}
      fontWeight={"bold"}
      w={width}
      textAlign={textAlign}
      lineHeight={lineHeight}
      display={display}
    >
      {children}
    </Text>
  );
};

export default TextField;
