import React from 'react'
import { Route, createBrowserRouter, RouterProvider, createRoutesFromElements } from "react-router-dom"
import './App.css'
import Layout from './components/layout'
import TitlePage from './pages/title'



const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />} >
    <Route path='title' element={<TitlePage />} />
  </Route>
))

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
