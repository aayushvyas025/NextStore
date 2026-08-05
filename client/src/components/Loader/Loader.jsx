import { Spinner, useColorModeValue } from "@chakra-ui/react";

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
