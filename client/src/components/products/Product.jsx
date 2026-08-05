import {
  Box,
  Heading,
  HStack,
  IconButton,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Edit, Trash2 } from "lucide-react";
import React from "react";
import useProductStore from "../../store/productStore";
import useCustomToast from "../../hooks/useCustomToast";

function Product({ title, image, price, productId }) {
  const textColor = useColorModeValue("gray.600", "gray.300");
  const { successToast, errorToast } = useCustomToast();
  const { loading, error, deleteProduct } = useProductStore();

  async function handleProductDelete(id) {
    const { success, message } = await deleteProduct(id);

    if (!success) {
      errorToast(message);
    }; 
    
    successToast(message);
  }

  return (
    <>
      <Image src={image} alt={title} h={48} w="full" objectFit={"cover"} />
      <Box p={4}>
        <Heading as={"h3"} size={"md"} mb={2} color={textColor} noOfLines={1}>
          {title}
        </Heading>
        <Text fontWeight={"bold"} fontSize={"lg"} color={textColor} mb={2}>
          ₹{Number(price).toLocaleString()}
        </Text>
        <HStack spacing={4} mt={4}>
          <IconButton
            p={1}
            icon={<Edit />}
            onClick={() => ""}
            colorScheme={useColorModeValue("blue", "green")}
            size={20}
          />
          <IconButton
            icon={<Trash2 />}
            colorScheme="red"
            size={20}
            p={1}
            onClick={() => handleProductDelete(productId)}
          />
        </HStack>
      </Box>
    </>
  );
}

export default Product;
