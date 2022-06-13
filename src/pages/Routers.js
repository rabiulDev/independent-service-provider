import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AboutUs from './AboutUs/AboutUs'
import Blogs from './Blogs/Blogs'
import CheckOut from './CheckOut/CheckOut'
import ContactUs from './ContactUs/ContactUs'
import Home from './Home/Home'
import Login from './Login/Login'
import RequireAuth from './RequireAuth/RequireAuth'
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
            <Route path='/checkout' element={
                <RequireAuth>
                    <CheckOut />
                </RequireAuth>
            } />
            <Route path='/about' element={<AboutUs />} />
            <Route path='/blogs' element={<Blogs />} />
            <Route path='/*' element={<NotFound />} />
        </Routes>
    )
}

export default Routers