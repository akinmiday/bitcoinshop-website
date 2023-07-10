import React from 'react'
import { Route, createBrowserRouter, RouterProvider, createRoutesFromElements } from "react-router-dom"
import './App.css'
import Header from './components/header'



const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Header />} />
))

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
