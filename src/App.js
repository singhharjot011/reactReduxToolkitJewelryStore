import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { loader as productsLoader } from "./features/products/Products";
import AppLayout from "./ui/AppLayout";
import PageNotFound from "./ui/PageNotFound";
import Category from "./features/category/Category";
import Products from "./features/products/Products";
import FeaturedProducts from "./features/products/FeaturedProducts";
import BestSellersProducts from "./features/products/BestSellerProducts";
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
        // loader: productsLoader,
        errorElement: <PageNotFound />,
      },
      {
        path: "/",
        element: <Category />,
      },

      {
        path: "/",
        element: <FeaturedProducts />,
      },
      {
        path: "/",
        element: <BestSellersProducts />,
      },
      {
        path: "/",
        element: <Wishlist />,
      },
      {
        path: "/",
        element: <Cart />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
