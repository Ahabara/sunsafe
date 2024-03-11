import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import ErrorPage from "./components/ErrorPage";
import MeetTheTeam from "./components/MeetTheTeam";
import Application from "./components/Application";

const router = createBrowserRouter([
    {
        path: "/sunsafe/*",
        element: <App/>,
        errorElement: <ErrorPage/>,
    },

    {
        path: "sunsafe/teams",
        element: <MeetTheTeam/>
    },
    {
        path: "sunsafe/app",
        element: <Application/>,
        errorElement: <ErrorPage/>,

    },

]);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <React.StrictMode>
            <RouterProvider router={router}/>
        </React.StrictMode>
    </React.StrictMode>,
)
