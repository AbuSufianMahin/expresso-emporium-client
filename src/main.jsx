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
import EditCoffee from './Components/Pages/EditCoffee';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        loader: () => fetch('https://expresso-emporium-server-eta.vercel.app/coffees'),
        Component: HomePage
      },
      {
        path: '/add-coffee',
        
        Component: AddCoffee
      },
      {
        path: '/coffee-details/:id',
        loader: ({params}) => fetch(`https://expresso-emporium-server-eta.vercel.app/coffees/${params.id}`),
        Component: CoffeeDetails,
      },
      {
        path: '/edit-coffee/:id',
        loader: ({params}) => fetch(`https://expresso-emporium-server-eta.vercel.app/coffees/${params.id}`),
        Component: EditCoffee,
      }

    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
