import { Text,  useColorModeValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function NoProducts() {
  return (
    <Text
      fontSize={"xl"}
      textAlign={"center"}
      fontWeight={"bold"}
      color={useColorModeValue("gray.600", "gray.300")}
    >
      No Products Found 😬 
      <Link to={"/create"}>
        <Text
          as="span"
          color={useColorModeValue("blue.500", "green.400")}
          _hover={{ textDecoration: "underline" }}
          px={2}
        >
           Create a Products
        </Text>
      </Link>
    </Text>
  );
}

export default NoProducts;
