import { Box } from "@chakra-ui/react";
import React from "react";

function Layout({ minHeight, children }) {
  return <Box minH={minHeight}>{children}</Box>;
}

export default Layout;
