import React from "react";
import './index.css'
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from './pages/About';
import ProfilePage from "./pages/ProfilePage";
import ContactPage from "./pages/ContactPage";
const router = createBrowserRouter([
  {
path : "/",
element: <App/>
  },
  {
   path : "/about", 
   element: <About/>
  },
  {
path: "/profile",
element: <ProfilePage/>
  },
{
path : "/contact",
element : <ContactPage/>
},

])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router= {router}/>
  
);
