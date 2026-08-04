import { Image } from "@chakra-ui/react";
import React from "react";

function Product({ title, image, price }) {
  return (
    <>
      <Image src={image} alt={title} h={48} w="full" objectFit={"cover"} />
    </>
  );
}

export default Product;
