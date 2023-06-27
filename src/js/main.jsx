import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Index from './components/Index'
import Airbnb from './components/Airbnb'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />
  },
  {
    path: '/airbnb',
    element: <Airbnb />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
