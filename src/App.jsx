import { useState } from 'react'
import Heading from './components/Heading'
import SaveForm from './components/SaveFrom'
import SignupForm from './components/Signup'
import Auth from './pages/Auth'
import { createBrowserRouter, createRoutesFromElements,Route, RouterProvider } from 'react-router-dom'
import Layout from './layout/layout'

function App() {
  const router=createBrowserRouter( 
    createRoutesFromElements(
      <Route path="/" element={<Layout/>}>
        <Route path="auth" element={<Auth/>}/>
      </Route>
      
    )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
  ) 
  return (
    <RouterProvider router={router}/>
  )
}

export default App
