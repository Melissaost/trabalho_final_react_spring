import { createRoot } from "react-dom/client";
import Routers from "./routers";
import "./index.css";
import { AuthProvider } from "./services/Auth/AuthContext";

createRoot(document.getElementById("root")).render(
    <AuthProvider>
        <Routers />
    </AuthProvider>
);
