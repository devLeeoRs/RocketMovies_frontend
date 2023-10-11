import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/global";
import ReactDOM from "react-dom/client";
import { Router } from "./Routes";
import theme from "./styles/theme";
import { AuthProvider } from "./hooks/auth";
import React from "react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AuthProvider>
        <Router />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
