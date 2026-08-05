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
      _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
      bg={bgColor}
    >
      <Product
       productId ={product._id}
        title={product.title}
        image={product.image}
        price={product.price}
      />
    </Box>
  );
}

export default ProductsCard;
