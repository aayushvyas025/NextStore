import { Spinner, useColorModeValue } from "@chakra-ui/react";
import React from "react";

function Loader() {
  return (
    <Spinner
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color={useColorModeValue("blue.500", "green.500")}
      size="xl"
    />
  );
}

export default Loader;
