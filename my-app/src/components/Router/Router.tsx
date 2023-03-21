
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import React from 'react';
import App from '../App/App';
import Layout from '../Layout/Layout';


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/">
            <Route index element={<App />} />
            <Route path='/movie' element={<Layout />} />
            <Route path='/serials' element={<Layout />} />
            <Route path='/cartoons/:1?' element={<Layout />} />
        </Route>
    )
)


export default router