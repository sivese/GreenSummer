import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Projects, { ProjectRoutes } from "./pages/projects";
import Home from "./pages/home";
import Experience from "./pages/experience";
import BgmPlayer from "./components/bgm-player";

/*
    https://react.dev/learn/writing-markup-with-jsx
    https://cassidoo.co/
    https://yuichinabeshima.github.io/udayakumar-portfolio/
*/

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

const router = createBrowserRouter([
    { path: "/",            element: <Home /> },
    { path: "/projects",    element: <Projects /> },
    { path: "/projects/*",  element: <ProjectRoutes /> },
    { path: "/experience",  element: <Experience /> },
    { path: "/music",       element: <Experience /> },
    { path: "/contact",     element: <Experience /> },
    { path: "/blog",        element: <Experience /> },
]);

root.render(
    <React.StrictMode>
        <BgmPlayer>
            <RouterProvider router={router} />
        </BgmPlayer>
    </React.StrictMode>
)