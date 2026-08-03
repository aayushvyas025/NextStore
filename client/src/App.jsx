import React from "react";
import MainRoute from "./routes/MainRoute";
import Layout from "./layout/Layout";
import { useColorModeValue } from "@chakra-ui/react";
import Navbar from "./components/pages/Navbar";

function App() {
  return (
    <Layout
      minHeight={"100vh"}
      bgColor={useColorModeValue("gray.100", "green.900")}
    >
      <Navbar />
      <MainRoute />
    </Layout>
  );
}

export default App;
