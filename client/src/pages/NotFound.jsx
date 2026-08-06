import {
  Box,
  Button,
  Heading,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { AlertTriangle } from "lucide-react";
import { Suspense } from "react";
import { Link } from "react-router-dom";
import NotFoundSkeleton from "../components/skeleton/NotFoundSkeleton";

function NotFound() {
  return (
    <Suspense fallback={<NotFoundSkeleton />}>
      <Box
        minH="80vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        px={4}
      >
        <VStack spacing={6} textAlign="center">
          <AlertTriangle
            size={70}
            color={useColorModeValue("#3182CE", "#38A169")}
          />

          <Heading size="3xl" color={useColorModeValue("gray.700", "white")}>
            404
          </Heading>

          <Heading size="lg" color={useColorModeValue("gray.600", "gray.200")}>
            Page Not Found
          </Heading>

          <Text maxW="420px" color={useColorModeValue("gray.500", "gray.400")}>
            Sorry, the page you're looking for doesn't exist or may have been
            moved.
          </Text>

          <Button
            as={Link}
            to="/"
            bg={useColorModeValue("#3182CE", "#38A169")}
            color={"white"}
            colorScheme={useColorModeValue("blue", "green")}
            size="lg"
          >
            Go Back Home
          </Button>
        </VStack>
      </Box>
    </Suspense>
  );
}

export default NotFound;
