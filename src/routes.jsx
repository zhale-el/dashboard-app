// =========== import ==========

import Home from "./pages/home/Home";
import UserList from "./pages/user/UserList";
import NewUser from "./pages/newUser/NewUser";
import Products from "./pages/products/Products";

// =========== routes ==========

let routes = [
  { path: "/", element: <Home /> },
  { path: "/users", element: <UserList /> },
  { path: "/newuser", element: <NewUser /> },
  { path: "/products", element: <Products /> },
];

export default routes;
