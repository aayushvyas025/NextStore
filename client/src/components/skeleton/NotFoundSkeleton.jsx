import {
  Box,
  Button,
  Skeleton,
  VStack,
} from "@chakra-ui/react";

function NotFoundSkeleton() {
  return (
    <Box
      minH="80vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      px={4}
    >
      <VStack spacing={6} w="full" maxW="420px">
        <Skeleton
          boxSize="70px"
          borderRadius="full"
        />
        <Skeleton
          height="55px"
          width="120px"
        />
        <Skeleton
          height="28px"
          width="220px"
        />
        <Skeleton
          height="18px"
          width="100%"
        />
        <Skeleton
          height="18px"
          width="85%"
        />
        <Skeleton
          height="45px"
          width="170px"
          borderRadius="md"
        />
      </VStack>
    </Box>
  );
}

export default NotFoundSkeleton;