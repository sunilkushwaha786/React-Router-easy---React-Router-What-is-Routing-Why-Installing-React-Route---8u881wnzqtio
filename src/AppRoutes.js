import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Index from './Pages/Index';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Index/>}></Route>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='*' element={<NotFound/>}></Route>
        </Routes>

    )
}