import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Dog from './pages/Dog.jsx'
import Cat from './pages/Cat.jsx'
import './index.css'



const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/dog/:idVideo', element: <Dog /> },
  { path: '/cat/:idVideo', element: <Cat /> }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
