import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ContactUs from './ContactUs/ContactUs'
import Home from './Home/Home'
import Login from './Login/Login'
import Services from './Services/Services'
import NotFound from './Shared/NotFound'
import SignUP from './SignUp/SignUP'

const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={< Home />} />
            <Route path='/services' element={<Services />} />
            <Route path='/contacts' element={<ContactUs />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUP />} />
            <Route path='/*' element={<NotFound />} />
        </Routes>
    )
}

export default Routers