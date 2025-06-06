import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import RootLayout from './Route/RootLayout.jsx';
import Home from './Pages/Home.jsx';
import AvailableCars from './Pages/AvailableCars.jsx';
import Login from './Pages/LogIn.jsx';
import Register from './Pages/Register.jsx';
import AuthProvider from './AuthProvider.jsx';
import PrivateRoute from './Private/PrivateRoute.jsx';
import MyCars from './Pages/MyCars.jsx';
import AddCar from './Pages/AddCar.jsx';
import MyBookings from './Pages/MyBookings.jsx';
import Loading from './Components/Loading.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component:RootLayout,
    children:[
      {
        index:true,
        loader:()=>fetch('http://localhost:3000/latest-cars'),
        hydrateFallbackElement: <Loading></Loading>,
        Component:Home,
      },
      {
        path:'availableCars',
        Component:AvailableCars,
      },
      {
        path:'login',
        Component: Login,
      },
      {
        path:'register',
        Component: Register,
      },
      {
        path:'myCars',
     
        element:(
          <PrivateRoute><MyCars></MyCars></PrivateRoute>
        )
        
      },
      {
        path:'addCar',
        element:(
          <PrivateRoute><AddCar></AddCar></PrivateRoute>
        )
      },
      {
        path:'myBookings',
        element:(
          <PrivateRoute><MyBookings></MyBookings></PrivateRoute>
        )
      },
      
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
