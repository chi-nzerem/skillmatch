import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Root from "./routes/root";
import Landing from "./pages/Landing";
import App from "./App.jsx";

import "./index.css";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
    },
    {
        path: 'landing',
        element: <Landing />,
    },

]);

const root = createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
