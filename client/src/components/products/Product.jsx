import {
  Box,
  Heading,
  HStack,
  IconButton,
  Image,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { Edit, Trash2 } from "lucide-react";
import React from "react";
import useProductStore from "../../store/productStore";
import useCustomToast from "../../hooks/useCustomToast";
import Modal from "../modal/Modal";

function Product({  product }) {
  const textColor = useColorModeValue("gray.600", "gray.300");
  const { successToast, errorToast } = useCustomToast();
  const { loading, error, deleteProduct } = useProductStore();
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();

  async function handleProductDelete(id) {
    const { success, message } = await deleteProduct(id);

    if (!success) {
      errorToast(message);
    }

    successToast(message);
  }

  return (
    <>
      <Image src={product.image} alt={product.title} h={48} w="full" objectFit={"cover"} />
      <Box p={4}>
        <Heading as={"h3"} size={"md"} mb={2} color={textColor} noOfLines={1}>
          {product.title}
        </Heading>
        <Text fontWeight={"bold"} fontSize={"lg"} color={textColor} mb={2}>
          ₹{Number(product.price).toLocaleString()}
        </Text>
        <HStack spacing={4} mt={4}>
          <IconButton
            p={1}
            icon={<Edit />}
            onClick={() => ""}
            colorScheme={useColorModeValue("blue", "green")}
            size={20}
            onClick={onOpen}
          />
          <IconButton
            icon={<Trash2 />}
            colorScheme="red"
            size={20}
            p={1}
            onClick={() => handleProductDelete(product._id)}
          />
        </HStack>
        <Modal
          isOpen={isOpen}
          onClose={onClose}
          product={product}
        />
      </Box>
    </>
  );
}

export default Product;
