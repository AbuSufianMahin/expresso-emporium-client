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
import CoffeeDetails from './Components/Pages/CoffeeDetails';

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
        path: '/add-coffee',
        
        Component: AddCoffee
      },
      {
        path: '/coffee-details/:id',
        loader: ({params}) => fetch(`http://localhost:3000/coffees/${params.id}`),
        Component: CoffeeDetails,
      }

    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
