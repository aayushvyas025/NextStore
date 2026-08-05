import React, { useEffect, useState } from "react";
import {
  Modal as Md,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useColorModeValue,
  Input,
  VStack,
  Button,
} from "@chakra-ui/react";
import useProductStore from "../../store/productStore";

function Modal({ isOpen, onClose, product }) {
  const [updateProduct, setUpdateProduct] = useState(product);

  const { isLoading, error, updatedProduct } = useProductStore();

  return (
    <Md isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg={useColorModeValue("white", "green.900")}>
        <ModalHeader>Update Product</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing={4}>
            <Input
              type="text"
              name="title"
              placeholder="Product Title"
              value={updateProduct.title}
              onChange={(event) => {
                setUpdateProduct({
                  ...updateProduct,
                  title: event.target.value,
                });
              }}
            />
            <Input
              type="number"
              name="price"
              placeholder="Product Price"
              value={updateProduct.price}
              onChange={(event) => {
                setUpdateProduct({
                  ...updateProduct,
                  price: event.target.value,
                });
              }}
            />
            <Input
              type="text"
              name="image"
              placeholder="Image URL"
              value={updateProduct.image}
              onChange={(event) =>
                setUpdateProduct({
                  ...updateProduct,
                  image: event.target.value,
                })
              }
            />
          </VStack>
        </ModalBody>
        <ModalFooter>
          <Button
            bg={useColorModeValue("blue.500", "green.500")}
            mr={3}
            _hover={{
              backgroundColor: useColorModeValue("blue.800", "green.800"),
            }}
            color={"white"}
            onClick={() => {}}
          >
            Update
          </Button>
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Md>
  );
}

export default Modal;
