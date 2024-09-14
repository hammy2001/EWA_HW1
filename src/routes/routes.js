import Account from "../pages/account";
import Cart from "../pages/cart";
import Checkout from "../pages/checkout";
import Homepage from "../pages/homepage";
import Item from "../pages/item";
import Login from "../pages/login";
import Products from "../pages/products";
import Speakers from "../pages/speakers";


const routes=[
    {
        id:1000,
        parent: null,
        path:'login',
        exact: true,
        component: Login
    },{
        id:100,
        parent: null,
        path:'home',
        exact: true,
        component: Homepage
    },{
        id:101,
        parent: null,
        path:'lighting',
        exact: true,
        component: Products
    },{
        id:102,
        parent: null,
        path:'speaker',
        exact: true,
        component: Speakers
    },{
        id:103,
        parent: null,
        path:'/lighting/item',
        exact: true,
        component: Item
    },{
        id:103,
        parent: null,
        path:'cart',
        exact: true,
        component: Cart
    },{
        id:104,
        parent: null,
        path:'checkout',
        exact: true,
        component: Checkout
    },{
        id:105,
        parent: null,
        path:'account',
        exact: true,
        component: Account
    },
]

export default routes;