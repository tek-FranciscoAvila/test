import React from "react";
import ReactDOM from "react-dom/client";
import "@mantine/core/styles.css";
import { TenantProvider } from "./context/TenantContext";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TenantProvider>
      <App />
    </TenantProvider>
  </React.StrictMode>
);
