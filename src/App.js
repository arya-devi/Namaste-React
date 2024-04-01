import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Offers from "./components/Offers";
import Cart from "./components/Cart";
import Error from "./components/Error";
import Search from "./components/Search";
import Footer from "./components/Footer";
import { UserContext } from "./utils/globalContext";

// How to update the value of Context via our root component

const AppLayout = () => {
  const [userName, setUserName] = useState();
  //authentication
  useEffect(() => {
    //make an api call and send the user name
    const data = {
      name: "Arya",
    };
    setUserName(data.name);
  }, []);

  return (
    <div className="app">
      <UserContext.Provider value={{ loggedUser: userName, setUserName }}>
        {" "}
        // here we are passing the setState ability of user name to context api
        …and we are using that in our header compoent , onchange of username the
        username will change
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </div>
  );
};

const Body = lazy(() => import("./components/Body"));
const Help = lazy(() => import("./components/Help"));
const RestaurantMenu = lazy(() => import("./components/RestaurantMenu"));
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: (
          <Suspense>
            <Body />
          </Suspense>
        ),
      },
      {
        path: "/offers",
        element: <Offers />,
      },
      {
        path: "/help",
        element: (
          <Suspense fallback={<h1>...Loading</h1>}>
            <Help />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/restaurant/:id",
        element: (
          <Suspense>
            <RestaurantMenu />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
