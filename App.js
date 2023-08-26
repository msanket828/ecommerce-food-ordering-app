import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { Provider } from "react-redux";
import store from "./redux/store";
import Cart from "./components/Cart";
// import Grocery from "./components/Gorcery";

const Grocery = lazy(() => import("./components/Gorcery"));
const App = () => {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Outlet />
      </Provider>
    </>
  );
};
const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>...Loading</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurantmenu/:resid",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);
// const heading = React.createElement("div", {}, "i m div");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={browserRouter} />);
