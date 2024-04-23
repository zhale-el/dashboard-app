// =========== import ==========

import Home from "./pages/home/Home";
import UserList from "./pages/user/UserList";
import NewUser from "./pages/newUser/NewUser";
import Products from "./pages/products/Products";
import ProductItem from "./pages/productitem/ProductItem";

// =========== routes ==========

let routes = [
  { path: "/", element: <Home /> },
  { path: "/users", element: <UserList /> },
  { path: "/newuser", element: <NewUser /> },
  { path: "/products", element: <Products /> },
  { path: "/productitem/:productId", element: <ProductItem /> },
];

export default routes;
