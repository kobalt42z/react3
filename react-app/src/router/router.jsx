import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeLayoutes from '../layouts/homeLayoutes'
import SharedLayout from '../layouts/sharedLayout'
const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<SharedLayout/>}>
                    <Route index element={<HomeLayoutes/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router