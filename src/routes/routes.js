import Homepage from "../pages/homepage";
import Item from "../pages/item";
import Products from "../pages/products";
import Speakers from "../pages/speakers";


const routes=[
    {
        id:100,
        parent: null,
        path:'',
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
    },
]

export default routes;