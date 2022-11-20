import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom'


import Inicio from '../views/Inicio'
import {PageNotFound} from '../views/PageNotFound'
import PantallaPrincipal from '../views/PantallaPrincipal';
import Futur from '../views/Futur'

const routers = () => {
    return (
        <BrowserRouter>

            <Routes>
                <Route path='/' element={< PantallaPrincipal />} />
                <Route path='/casos' element={< Inicio/>} />
                <Route path='*' element={<PageNotFound />} />
                <Route path='/seguirCasos' element={<Futur />} />
            </Routes>
        </BrowserRouter>
    )
}

export default routers
