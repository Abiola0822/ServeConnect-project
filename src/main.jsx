import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import Signup from "./components/signup";
import "./index.css";

const router = createBrowserRouter(
  createRoutesFromElements([
    // {
    //   path: "/",
    //   element: <App />,
    //   errorElement: <div>Error Page</div>,
    //   children: [
    //     { index: true, element: <Login /> },
    //     { path: "login", element: <Login /> },
    //     { path: "signup", element: <Signup /> },
    //     { path: "Landingpage", element: <LandingPage /> }, // Default to login
    //   ],
    // },
    <Route path="/" element={<App />}>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Landingpage" element={<LandingPage />} />
    </Route>,
  ])
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
