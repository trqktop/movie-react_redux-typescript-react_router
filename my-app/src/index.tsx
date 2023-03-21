import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import App from './components/App/App';
const container = document.getElementById('root')!;
const root = createRoot(container);





const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} />
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

{/* 

      */}



root.render(
  <RouterProvider router={router} />
  // <App />
);

