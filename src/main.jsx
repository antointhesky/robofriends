import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import CardList from "./CardList.jsx";
import { robots } from "./robots.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CardList robots={robots} />
  </StrictMode>
);
