import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import UserLayout from './Components/UserLayout/UserLayout';
import About from './Components/About/About';
import DubballupWeb from './Components/DubballupWeb/DubballupWeb';
import Contact from './Components/Contact/Contact';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Header from './Components/Header/Header';
import Content from './Components/Content/Content';

export default function App() {
  let routes = createBrowserRouter([
    {
      path: "/",
      element: <UserLayout/>,
      children: [
        {
          index: true,
          element: (
         <Content/>
          ),
        },
        {
          path: "about",
          element: (
          <About/>
          ),
        }, 
        {
          path: "dubballup",
          element: (
          <DubballupWeb/>
          ),
        }, 
        {
          path: "contact",
          element: (
          <Contact/>
          ),
        }, 
        {
          path: "login",
          element: (
         <Login/>
          ),
        },
        {
          path: "signup",
          element: (
       <Signup/>
          ),
        },
      ],
    },
    
  ]);
  return (
   <RouterProvider router={routes}/>
  )
}
