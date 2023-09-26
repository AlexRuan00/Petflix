import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Video from './pages/Video.jsx'
import './index.css'



const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/video/:idVideo', element: <Video /> },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
