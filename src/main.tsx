import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// We do NOT add <BrowserRouter> here because it is already in App.tsx
createRoot(document.getElementById("root")!).render(
    <App />
);