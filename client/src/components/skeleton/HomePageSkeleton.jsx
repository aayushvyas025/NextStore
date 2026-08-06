import {
  Box,
  Container,
  HStack,
  SimpleGrid,
  Skeleton,
  SkeletonText,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";

function HomePageSkeleton() {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={10}>
        <HStack w="full" justify="space-between">
          <Skeleton height="40px" width="220px" />

          <HStack spacing={3}>
            <Skeleton boxSize="45px" rounded="md" />
            <Skeleton boxSize="45px" rounded="md" />
          </HStack>
        </HStack>
        <Skeleton height="45px" width="300px" />
        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
            lg: 3,
          }}
          spacing={10}
          w="full"
        >
          {Array.from({ length: 6 }).map((_, index) => (
            <Box
              key={index}
              bg={useColorModeValue("white", "green.700")}
              rounded="lg"
              overflow="hidden"
              shadow="md"
            >

              <Skeleton height="230px" />

              <VStack align="stretch" p={5} spacing={4}>
                <SkeletonText
                  noOfLines={2}
                  spacing="3"
                  skeletonHeight="5"
                />
                <Skeleton height="28px" width="100px" />
                <HStack spacing={4}>
                  <Skeleton boxSize="40px" rounded="md" />
                  <Skeleton boxSize="40px" rounded="md" />
                </HStack>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
}

export default HomePageSkeleton;