import {createBrowserRouter} from 'react-router-dom'
import App from '../App'
import Home from '../pages/Home';
import SearchPage from '../pages/SearchPage';
import Login from '../pages/Login';
import Register from '../pages/Register';
import ForgotPassword from '../pages/ForgotPassword';
import OtpVerification from '../pages/OtpVerification';
import ResetPassword from '../pages/ResetPassword';
import UserMenuMobile from '../pages/UserMenuMobile';
import Dashboard from '../layouts/Dashboard';
import Profile from '../pages/Profile';
import MyOrders from '../pages/MyOrders';
import Address from '../pages/Address';

import ProductAdmin from '../pages/ProductAdmin';

import SubCategory from '../pages/SubCategory';
import UploadProduct from '../pages/UploadProduct';
import CategoryPage from '../pages/CategoryPage';
import AdminPermision from '../layouts/AdminPermision';
import ProductListPage from '../pages/ProductListPage';
import ProductDisplayPage from '../pages/ProductDisplayPage';
import CartMobile from "../pages/CartMobile";
import CheckoutPage from "../pages/CheckoutPage";
import Success from "../pages/Success";
import Cancel from "../pages/Cancel";

const router = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/search',
                element:<SearchPage/>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/register',
                element:<Register/>
            },
            {
                path:'/forgot-password',
                element:<ForgotPassword/>
            },
            {
                path:'/verification-otp',
                element:<OtpVerification/>
            },
            {
                path:'/reset-password',
                element:<ResetPassword/>
            },
            {
                path:'/user',
                element:<UserMenuMobile/>
            },
            {
                path:'/dashboard',
                element:<Dashboard/>,
                children:[
                    {
                        path:'/dashboard/profile',
                        element:<Profile/>
                    },
                    {
                        path:'/dashboard/myorders',
                        element:<MyOrders/>
                    },
                    {
                        path:'/dashboard/address',
                        element:<Address/>
                    },
                    {
                        path:'/dashboard/product-admin',
                        element:<AdminPermision><ProductAdmin/></AdminPermision>
                    },
                    {
                        path:'/dashboard/sub-category',
                        element:<AdminPermision> <SubCategory/> </AdminPermision>
                    },
                    {
                        path:'/dashboard/upload-product',
                        element:<AdminPermision> <UploadProduct/></AdminPermision>
                    },
                    {
                        path:'/dashboard/category',
                        element:<AdminPermision><CategoryPage/> </AdminPermision>
                    },
                    
                   
                ]
            },
            {
                path:":category",
                children:[
                    {
                        path:":subCategory",
                        element:<ProductListPage/>
                    }
                ]
            },
            {
                path:"product/:product",
                element:<ProductDisplayPage/>
            },
            {
                path : 'cart',
                element : <CartMobile/>
            },
            {
                path : "checkout",
                element : <CheckoutPage/>
            },
            {
                path : "success",
                element : <Success/>
            },
            {
                path : 'cancel',
                element : <Cancel/>
            }
        ]
    }
]);

export default router