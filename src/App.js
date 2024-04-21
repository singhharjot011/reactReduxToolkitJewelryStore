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
import OurStory from "./ui/pages/OurStory";
import Reviews from "./ui/pages/Reviews";
import MyAccount from "./ui/pages/MyAccount";
import ContactUs from "./ui/pages/ContactUs";

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
      {
        path: "/our-story",
        element: <OurStory />,
        errorElement: <PageNotFound />,
      },
      {
        path: "/reviews",
        element: <Reviews />,
        errorElement: <PageNotFound />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
        errorElement: <PageNotFound />,
      },
      {
        path: "/myaccount",
        element: <MyAccount />,
        errorElement: <PageNotFound />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
