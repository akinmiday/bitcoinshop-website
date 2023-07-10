import React from 'react'
import { Route, createBrowserRouter, RouterProvider, createRoutesFromElements } from "react-router-dom"
import './App.css'



const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<h1>Bitcoin is the way</h1>} />
))

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
