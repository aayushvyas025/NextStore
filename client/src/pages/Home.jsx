import React, { Suspense } from "react";
import { Container, VStack } from "@chakra-ui/react";
import Header from "../components/pages/Header";
import NoProducts from "../components/products/NoProducts";
import useProductStore from "../store/productStore";

function Home() {
  const { isLoading, error, fetchProduct } = useProductStore();
  return (
    <Suspense>
      <Container maxW={"container.xl"} py={12}>
        <VStack>
          <Header title={"Current Products"} />
          {!isLoading && <NoProducts />}
        </VStack>
      </Container>
    </Suspense>
  );
}

export default Home;
