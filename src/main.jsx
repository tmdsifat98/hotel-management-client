import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./Routes/Route.jsx";
import ContextProvider from "./Providers/ContextProvider.jsx";
import { ThemeProvider } from "../src/Providers/ThemeProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </ContextProvider>
  </StrictMode>
);
