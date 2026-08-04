import React from "react";
import { Text, useColorModeValue } from "@chakra-ui/react";

function Header({ title }) {
  return (
    <Text
      fontSize={"30"}
      fontWeight={"bold"}
      bgGradient={useColorModeValue(
        "linear(to-r, cyan.400, blue.500)",
        "linear(to-r, teal.400, green.500)",
      )}
      bgClip={"text"}
    >
      {title}
    </Text>
  );
}

export default Header;
