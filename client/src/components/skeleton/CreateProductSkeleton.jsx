import React from "react";
import {
  Box,
  Container,
  Skeleton,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";

function CreateProductSkeleton() {
  return (
    <Container maxW="container.sm">
      <VStack spacing={8}>
        {/* Heading */}
        <Skeleton
          height="40px"
          width="260px"
          borderRadius="md"
          startColor={useColorModeValue("gray.100", "gray.700")}
          endColor={useColorModeValue("gray.300", "gray.600")}
        />

        {/* Card */}
        <Box
          w="full"
          bg={useColorModeValue("white", "green.700")}
          p={6}
          rounded="lg"
          shadow="md"
        >
          <VStack spacing={4}>
            {/* Product Name */}
            <Skeleton
              height="40px"
              w="full"
              borderRadius="md"
            />

            {/* Price */}
            <Skeleton
              height="40px"
              w="full"
              borderRadius="md"
            />

            {/* Image URL */}
            <Skeleton
              height="40px"
              w="full"
              borderRadius="md"
            />

            {/* Button */}
            <Skeleton
              height="40px"
              w="full"
              borderRadius="md"
            />
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
}

export default CreateProductSkeleton;