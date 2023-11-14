import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import App from "./App.jsx";
import AppContext from "./context/AppContext.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <React.StrictMode>
            <NextUIProvider>
                <main className="dark text-foreground bg-background">
                    <AppContext>
                        <App />
                    </AppContext>
                </main>
            </NextUIProvider>
        </React.StrictMode>
    </BrowserRouter>
);
