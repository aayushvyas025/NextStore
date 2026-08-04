import { Box } from "@chakra-ui/react";
import React from "react";
import Product from "./Product";

function ProductsCard({ product }) {
  return (
    <Box
      shadow={"lg"}
      rounded={"lg"}
      overflow={"hidden"}
      transition={"all 0.3s"}
      _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
    >
      <Product />
    </Box>
  );
}

export default ProductsCard;
