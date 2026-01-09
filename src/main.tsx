import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// We do NOT add <BrowserRouter> here because it is already in App.tsx
createRoot(document.getElementById("root") as HTMLElement).render(
    <App />
);