
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import React from 'react';
import App from '../App/App';
import Layout from '../Layout/Layout';
import PostersCatalog from '../Pages/PostersCatalog';

import Request from '../../services/request';
const movie = Request()

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/">
            <Route index element={<App />} />
            <Route path='/movie'
                loader={
                    async ({ params }) => {
                        return await movie.getFilms()
                    }}
                element={<Layout><PostersCatalog /></Layout>} />
            <Route path='/serials' element={<Layout />} />
            <Route path='/cartoons/:1?' element={<Layout />} />
        </Route>
    )
)


export default router