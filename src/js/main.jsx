import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Index from './components/Index'
import Training from './components/Training'
import Notice from './components/Notice'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />
  },
  {
    path: '/training',
    element: <Training />
  },
  {
    path: '/notice',
    element: <Notice />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
