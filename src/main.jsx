import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppShell from './components/Layouts/AppShell'
import Home from './pages/home'


const router = createBrowserRouter([
  {
    path: "/",
    element: <AppShell />,
    children: [
      { path: "/", element: <Home /> }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
