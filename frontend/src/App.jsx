import React from "react"
import {BrowserRouter,Routes,  Route} from "react-router-dom"
import {Signup} from "./pages/Signup.jsx"
import { Signin } from "./pages/Sign.jsx"

import {Send} from "./pages/Send.jsx"
import {Dashboard} from "./pages/Dashboard.jsx"


function App() {
 

  return (
  <>
  <BrowserRouter>
  <Routes>
    <Route  path="/signup" element={<Signup />} />
    <Route  path="/signin" element={ <Signin />} />
    <Route  path="/send" element={ <Send />} />
    <Route  path="/dashboard" element={ <Dashboard />} />
 
  </Routes>
  </BrowserRouter>
  </>
  )
}

export default App
