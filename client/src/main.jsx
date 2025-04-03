import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./styles/main.css";
import App from "./App.jsx";
import Main_Context from "../hooks/context/mainContext.jsx";

createRoot(document.getElementById("root")).render(
  <Main_Context>
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  </Main_Context>
);
