import React from 'react'
import { Route, createBrowserRouter, RouterProvider, createRoutesFromElements } from "react-router-dom"
import './App.css'
import Layout from './components/layout'
import TitlePage from './pages/title'
import Rates from './pages/rates'



const router = createBrowserRouter(createRoutesFromElements(
  <Route path='' element={<Layout />} >
    <Route index element={<TitlePage />} />
    <Route path='/' element={<Rates />} />

  </Route>
))

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
