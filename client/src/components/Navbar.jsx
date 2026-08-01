import {
  Button,
  Center,
  Container,
  Flex,
  HStack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import DarkMode from "./DarkMode";

function Navbar() {
  return (
    <Container maxW={"1140px"} px={4}>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{ base: "column", sm: "row" }}
      >
        <Text
          fontSize={{ base: "22", sm: "28" }}
          bgGradient={"linear(to-r, teal.500, green.500)"}
          bgClip={"text"}
          textTransform={"uppercase"}
          textAlign={"center"}
          fontWeight={"bold"}
          display={"flex"}
        >
          <Link to={"/"}>Next Store</Link>
        </Text>
        <HStack spacing={2} alignItems={"center"}>
          <Link to={"/create"}>
            <Button>
              <Plus />
            </Button>
          </Link> 
         <DarkMode />
        </HStack>
      </Flex>
    </Container>
  );
}

export default Navbar;
