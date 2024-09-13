import Homepage from "../pages/homepage";
import Lightings from "../pages/lightings";
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
        path:'lightings',
        exact: true,
        component: Lightings
    },{
        id:102,
        parent: null,
        path:'speakers',
        exact: true,
        component: Speakers
    },
]

export default routes;