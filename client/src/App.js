import { Children } from "react";
import { createBrowserRouter ,RouterProvider,Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";
import About from "./pages/About/About";
import "./app.scss"
import Slider from "./components/Slider/Slider";
import { Cursor } from "./components/Cursor/cursor";



const Layout=()=>{
  return(
    <div className="app">
      <Navbar/>
      <Outlet/>
      <Footer/>
      <Cursor /> 
    </div>
  )
};



const router=createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
        {
          path:"/",
          element:<Home/>,
        },
        {
          path:"/products/:id",
          element:<Products/>,
        },
        {
          path:"/product/:id",
          element:<Product/>,
        },
        {
          path:"/about",
          element:<About/>,
        }
    ]
  }
]);

function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
