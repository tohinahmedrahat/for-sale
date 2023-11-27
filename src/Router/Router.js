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
import SinglePost from "../Pages/Blog/SinglePost";
import Checkout from "../Shear/Checkout/Checkout";
import SingleOrder from "../Shear/SingleOrder/SingleOrder";
import Dashboard from "../Pages/Dashboard/Dashboard";

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
            path:"/post/:id",
            element:<SinglePost></SinglePost>
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
        {
            path:"/checkout",
            element:<Checkout></Checkout>
        },
        {
            path:"/order/:id",
            element:<SingleOrder></SingleOrder>
        },
        {
            path:"dashboard",
            element:<Dashboard></Dashboard>,
            children:[
                {
                    path:"/dashboard/addProduct",
                    element:<h1>add product</h1>
                },
                {
                    path:"/dashboard/addCategory",
                    element:<h1>add category</h1>
                },
            ]
        },
      ]
    },
  ]);

  export default router