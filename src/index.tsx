import "./index.css";

import React from "react";
import { createRoot } from "react-dom/client";

import App from "./containers/App";

const root = createRoot(document.getElementById("root") as HTMLDivElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
