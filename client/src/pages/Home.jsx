import React, { Suspense, useEffect } from "react";
import { Box, Container, SimpleGrid, VStack } from "@chakra-ui/react";
import Header from "../components/pages/Header";
import NoProducts from "../components/products/NoProducts";
import useProductStore from "../store/productStore";
import useCustomToast from "../hooks/useCustomToast";
import ProductsCard from "../components/products/ProductsCard";
import { LoaderPinwheel } from "lucide-react";
import Loader from "../components/Loader/Loader";

function Home() {
  const { isLoading, error, fetchProduct, products } = useProductStore();
  const { successToast, errorToast } = useCustomToast();

  async function handleFetchProduct() {
    const { success, message } = await fetchProduct();

    if (!success) {
      errorToast(message);
      return;
    }
    successToast(message);
  }

  useEffect(() => {
    handleFetchProduct();
  }, []);

  return (
    <Suspense>
      <Container maxW={"container.xl"} py={10}>
        <VStack>
          <Header title={"Current Products"} />
          {products.length === 0 && !isLoading && <NoProducts />}
          {isLoading && <Loader />}

          <SimpleGrid
            columns={{
              base: 1,
              md: 2,
              lg: 3,
            }}
            spacing={10}
            w={"full"}
            p={4}
          >
            {products.map((product) => (
              <ProductsCard key={product._id} product={product} />
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Suspense>
  );
}

export default Home;
