import {
  RouterProvider,
  createBrowserRouter,
  useLocation,
} from "react-router-dom";
import "./App.css";
import AppLayout from "./ui/AppLayout";
import PageNotFound from "./ui/PageNotFound";
import Products, {
  loader as productsLoader,
} from "./features/products/Products";
import ProductView, {
  loader as productDetailsLoader,
} from "./features/products/ProductView";
import Wishlist from "./features/wishlist/Wishlist";
import Cart from "./features/cart/Cart";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: "/",
        element: <Products />,
        errorElement: <PageNotFound />,
        loader: productsLoader,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
        errorElement: <PageNotFound />,
      },
      {
        path: "/cart",
        element: <Cart />,
        errorElement: <PageNotFound />,
      },
      {
        path: "/product/:productCode",
        element: <ProductView />,
        errorElement: <PageNotFound />,
        loader: productDetailsLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
