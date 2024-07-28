import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home"
import About from "./components/About"
import Login from "./components/Login"
import Register from "./components/Register"
import { Navbar, Footer } from "./components/Navbar"
import Logout from './components/Logout';
import Dashboard from './components/Dashboard';
import Viewjobs from './components/Viewjobs';
import Addjob from './components/Addjob';
import Adminview from './components/Adminview';
import Adminlayout from './layouts/Adminlayout';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/viewjobs' element={<Viewjobs />} />

          <Route path='/admin' element={<Adminlayout />} >
            <Route path='addjob' element={<Addjob />} />
            <Route path='alljobs' element={<Adminview />} />
            {/* <Route path='responses' element={<responses />} /> */}
          </Route>

        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App

