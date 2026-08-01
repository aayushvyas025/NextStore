import { Container, Flex, HStack, Text, useColorMode} from "@chakra-ui/react";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import DarkMode from "./DarkMode";
import NavLink from "./NavLink";

function Navbar() {
  const { pathname } = useLocation();
  const { colorMode, toggleColorMode } = useColorMode();
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
          bgGradient={"linear(to-r, teal.400, green.500)"}
          bgClip={"text"}
          textTransform={"uppercase"}
          textAlign={"center"}
          fontWeight={"bold"}
        >
          <Link to={"/"}>Next Store</Link>
        </Text>
        <HStack spacing={2} alignItems={"center"}>
          <NavLink link={pathname === "/" ? "/create" : "/"} route={pathname} />
          <DarkMode mode={colorMode} onClickHandler={toggleColorMode} />
        </HStack>
      </Flex>
    </Container>
  );
}

export default Navbar;
