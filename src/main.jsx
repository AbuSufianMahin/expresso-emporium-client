import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayout from './Components/Layouts/MainLayout';
import HomePage from './Components/Pages/HomePage';
import AddCoffee from './Components/Pages/AddCoffee';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        loader: () => fetch('http://localhost:3000/coffees'),
        Component: HomePage
      },
      {
        path: '/addCoffee',
        Component: AddCoffee
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
