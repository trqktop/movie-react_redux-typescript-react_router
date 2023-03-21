import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import PostersCatalog from './components/Pages/PostersCatalog';
import React from 'react';
import App from './components/App/App';
import Layout from './components/Layout/Layout'
import MainPage from './components/Pages/MainPage';
const container = document.getElementById('root')!;
const root = createRoot(container);



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<App />} />
      <Route path='/movie' element={<Layout />} />
      <Route path='/serials' element={<Layout />} />
      <Route path='/cartoons/:1?' element={<Layout />} />
    </Route>
    //   <Route>
    //   <Route path='/movie' element={<PostersCatalog />} />
    //   <Route path='/serials' element={<PostersCatalog />} />
    //   <Route path='/cartoons/:1?' element={<PostersCatalog />} />
    //   <Route
    //     path="/movie"
    //     element={<PostersCatalog />}
    //   />
    // </Route>
  )
)


root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

