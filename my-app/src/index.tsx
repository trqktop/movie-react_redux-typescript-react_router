import { createRoot } from 'react-dom/client';
import './index.css';
import router from './components/Router/Router';
import { RouterProvider } from 'react-router-dom';
import React from 'react';
const container = document.getElementById('root')!;
const root = createRoot(container);


root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

