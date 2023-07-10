import React from 'react'
import { Route, createBrowserRouter, RouterProvider, createRoutesFromElements } from "react-router-dom"
import './App.css'
import Layout from './components/layout'



const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />} />
))

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
