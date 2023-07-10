import React from 'react'
import { Route, createBrowserRouter, RouterProvider, createRoutesFromElements } from "react-router-dom"
import './App.css'



const router = createBrowserRouter(createRoutesFromElements(<h1>Bitcoin is the way</h1>))

function App() {

  return (
    <>
      <h1>Bitcoin shop</h1>
    </>
  )
}

export default App
