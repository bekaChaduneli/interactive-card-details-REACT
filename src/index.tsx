import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const color = {
  brand: {
    500: "#fff",
  },
};
const theme = extendTheme({
  fonts: {
    body: "Space Grotesk, sans-serif",
  },

  breakpoints: {
    sm: "280px",
    md: "768px",
    lg: "960px",
    xl: "1440px",
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
