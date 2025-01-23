import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import { StyledEngineProvider } from "@mui/material";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StyledEngineProvider injectFirst>
      <Router>
        <App />
      </Router>
    </StyledEngineProvider>
  </StrictMode>
);
