import { createBrowserRouter } from "react-router-dom";
import Main from "../Pages/Main/Main";
import Home from "../Pages/Home/Home/Home";
import Shop from "../Pages/Shop/Shop/Shop";
import About from "../Pages/About/About";
import Blog from "../Pages/Blog/Blog";
import Login from "../Pages/Login/Login";
import Ragistration from "../Pages/Registration/Ragistration";
import Wishlist from "../Pages/Wishlist/Wishlist";
import Cart from "../Pages/Cart/Cart";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"shop",
            element:<Shop></Shop>
        },
        {
            path:"about",
            element:<About></About>
        },
        {
            path:"blog",
            element:<Blog></Blog>
        },
        {
            path:"login",
            element:<Login></Login>
        },
        {
            path:"registration",
            element:<Ragistration></Ragistration>
        },
        {
            path:"wishlist",
            element:<Wishlist></Wishlist>
        },
        {
            path:"cart",
            element:<Cart></Cart>
        },
      ]
    },
  ]);

  export default router