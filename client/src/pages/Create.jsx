import React, { Suspense, useState } from "react";
import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

function Create() {
  const [newProduct, setNewProduct] = useState({
    title: "",
    price: 0,
    image: "",
  });

  function handleSubmit() {
  }
  return (
    <Suspense>
      <Container maxW={"container.sm"}>
        <VStack spacing={8}>
          <Heading as={"h1"} size={"xl"} textAlign={"center"} mb={8}>
            Create New Product
          </Heading>
          <Box
            w={"full"}
            bg={useColorModeValue("white", "green.700")}
            p={6}
            rounded={"lg"}
            shadow={"md"}
          >
            <VStack spacing={4}>
              <Input
                type="text"
                name="title"
                placeholder="Product Name"
                value={newProduct.title}
                onChange={(event) =>
                  setNewProduct({ ...newProduct, title: event.target.value })
                }
              />
              <Input
                type="number"
                name="price"
                placeholder="Product Price"
                value={newProduct.price}
                onChange={(event) =>
                  setNewProduct({ ...newProduct, price: event.target.value })
                }
              />
              <Input
                type="text"
                name="image"
                placeholder="Image URL"
                value={newProduct.image}
                onChange={(event) =>
                  setNewProduct({ ...newProduct, image: event.target.value })
                }
              />
              <Button colorScheme="green" w={"full"} onClick={handleSubmit}>
                Add Product
              </Button>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Suspense>
  );
}

export default Create;
