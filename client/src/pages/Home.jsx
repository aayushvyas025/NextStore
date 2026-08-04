import React, { Suspense } from "react";
import { Container, VStack } from "@chakra-ui/react";
import Header from "../components/pages/Header";

function Home() {
  return (
    <Suspense>
      <Container maxW={"container.xl"} py={12}>
        <VStack>
          <Header title={"Current Products"} />
        </VStack>
      </Container>
    </Suspense>
  );
}

export default Home;
