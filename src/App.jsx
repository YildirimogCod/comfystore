import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  HomeLayout,
  Landing,
  Error,
  Products,
  SingleProduct,
  Cart,
  About,
  Register,
  Login,
  Checkout,
  Orders,
} from "./pages";
import { ErrorElement } from "./components";
// loaders
import { loader as landingLoader } from "./pages/Landing";
import { loader as SingleProductLoader } from "./pages/SingleProduct";
import { loader as ProductsLoader } from "./pages/Products";
import { loader as checkoutLoader } from "./pages/Checkout";
import { loader as ordersLoader } from "./pages/Orders";
import { action as RegisterAction } from "./pages/Register";
import { action as LoginAction } from "./pages/Login";
import { action as checkoutAction } from "./components/CheckoutForm";
import { store } from "./store";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: ErrorElement,
        loader: landingLoader,
      },
      {
        path: "products",
        element: <Products />,
        loader: ProductsLoader,
      },
      {
        path: "products/:id",
        element: <SingleProduct />,
        loader: SingleProductLoader,
      },
      { path: "cart", element: <Cart /> },
      { path: "about", element: <About /> },
      {
        path: "checkout",
        element: <Checkout />,
        loader: checkoutLoader(store),
        action: checkoutAction(store),
      },
      { path: "orders", element: <Orders />, loader: ordersLoader(store) },
      { path: "error", element: <Error /> },
      { path: "*", element: <Error /> },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
    action: LoginAction(store),
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <Error />,
    action: RegisterAction,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;