import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from '../Components/two/Footer'

import Home from './two/Home'
import AllServices from './One/AllServices'
import Final from './four/Final'
import About from './two/About'
import Signin from './three/LoginSignin/Signin'

import SingleService from './two/SingleService'
import Haircare from './four/Haircare'

import Summary from './four/Summary'
import { Secpay } from './three/Sec_payment'
import Booking from './two/Booking'

const AllRoutes = () => {
  return (
    <div>
      
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/allservices" element={<AllServices/>}/>

            <Route path="/login" element={<Signin/>}/>
            <Route path="/booking" element={<Booking/>}/>

            <Route path="/login" element={<Home/>}/>
            <Route path="/signup" element={<Signin/>}/>

            <Route path="/blog" element={<Final/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/services" element={<SingleService/>}/>
            <Route path="/haircare" element={<Haircare/>}/>
            <Route path="/cart" element={<Summary/>}/>
            <Route path="/payment" element={<Secpay/>}/>
        </Routes>
        <Footer/>
    </div>
  )
}

export default AllRoutes