import React from "react";
import { createRoot } from "react-dom/client";
import Routers from "./routers";
import "./index.css";
import { AuthProvider } from "./services/Auth/AuthContext";

const rootElement = document.getElementById("root");
if (!rootElement) {
    throw new Error("Não foi possível encontrar o elemento root");
}

const root = createRoot(rootElement);

root.render(
    <React.StrictMode>
        <AuthProvider>
            <Routers />
        </AuthProvider>
    </React.StrictMode>
);