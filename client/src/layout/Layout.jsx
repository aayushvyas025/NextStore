import { Box } from "@chakra-ui/react";
import React from "react";

function Layout({ minHeight, children, bgColor }) {
  return <Box minH={minHeight} bg={bgColor}>{children}</Box>;
}

export default Layout;
