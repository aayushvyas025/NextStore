import { Box, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import Product from "./Product";

function ProductsCard({ product }) {
    const bgColor = useColorModeValue("white", "green.700")
  return (
    <Box
      shadow={"lg"}
      rounded={"lg"}
      overflow={"hidden"}
      transition={"all 0.3s"}
      _hover={{ transform: "translateY(-5px)", shadow: "xl", cursor:"pointer" }}
      bg={bgColor}
    >
      <Product
        product={product}
      />
    </Box>
  );
}

export default ProductsCard;
