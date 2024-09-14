import Cart from "../pages/cart";
import Homepage from "../pages/homepage";
import Item from "../pages/item";
import Products from "../pages/products";
import Speakers from "../pages/speakers";

const routes = [
  {
    id: 100,
    parent: null,
    path: "",
    exact: true,
    component: Homepage,
  },
  {
    id: 101,
    parent: null,
    path: "lighting",
    exact: true,
    component: Products,
  },
  {
    id: 102,
    parent: null,
    path: "speaker",
    exact: true,
    component: Products,
  },
  {
    id: 103,
    parent: null,
    path: "doorbell",
    exact: true,
    component: Products,
  },
  {
    id: 104,
    parent: null,
    path: "thermostat",
    exact: true,
    component: Products,
  },
  {
    id: 105,
    parent: null,
    path: "doorlock",
    exact: true,
    component: Products,
  },
  {
    id: 106,
    parent: null,
    path: "/lighting/item",
    exact: true,
    component: Item,
  },
  {
    id: 107,
    parent: null,
    path: "cart",
    exact: true,
    component: Cart,
  },
];

export default routes;
