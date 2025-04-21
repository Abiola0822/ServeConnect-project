import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import LandingPage  from './components/LandingPage'
import Login from './components/Login'
import Signup from './components/signup'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>Error Page</div>,
    children: [
      { index: true, element: <Login /> }, // Default to login
      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },
      { path: "Landingpage", element: <LandingPage /> }, 
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)