
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Root from "./routes/root";
import Landing from "./routes/Landing";
import Home from "./routes/Home";
import App from "./App";

import "./index.css";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
    },
    {
        path: '/landing',
        element: <Landing />,
    },
    {
        path: '/home',
        element:<Home />,
    },

]);

const main = document.getElementById("root");
const root = createRoot(main);
root.render( <RouterProvider router={router}/>);
