import React, { useState } from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Exchange from './components/Exchange';
import ErrorPage from './components/Errorpage';
import Layout from './Layout';


const router=createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
  
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/Exchangerates",
    element:<Exchange/>
  },
  {
    path:"about",
    element:<About/>
  },
  {
    path:"Errorpage",
    element:<ErrorPage/>
  },
]}
])
const App = () => {
  return(
  <RouterProvider router={router}/>
  )
}
export default App;
