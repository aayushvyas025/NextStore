import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

const theme = localStorage.getItem("chakra-ui-color-mode");

document.documentElement.style.backgroundColor =
  theme === "dark" ? "#1C4532" : "#F7FAFC";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </BrowserRouter>,
);
