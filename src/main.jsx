import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Details from "./routes/Details"
import Root from "./routes/Root"

const router = createBrowserRouter([
  /**Each object in this array represents the number of routes in this project */
  {
    path: "/",
    element: <Root />
  },
  {
    path: "/details/:name",
    element: <Details />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
