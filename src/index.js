import React , {lazy , Suspense , useEffect , useState} from "react";

import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import css from "./App.css";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestrauntMenu from "./components/RestrauntMenu";
import appStore from "./useStore";
import Cart from "./components/Cart";
import UserContext from "./UserContext";
import { Provider } from "react-redux";


const Grocery = lazy(() => import("./components/Grocery"));



const AppLayout = () => {
  const [userName, setUserName] = useState();

  //authentication
  useEffect(() => {
    // Make an API call and send username and password
    const data = {
      name: "Sejal Patil",
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestrauntMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);


// Chanking
// const Grocery =lazy (() => 
//     import("./components/Grocery"));


// const AppLayout = () => {
//   return (
//     <React.Fragment>
//       <Header />
//       <Outlet />
//       <Footer />
//     </React.Fragment>
//   );
// };


// const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <AppLayout />,
//     errorElement: <Error />,

//     children: [
//       {
//         path: "/",
//         element: <Body/>
//       },
//       {
//         path: "/about",
//         element: <About />,
//         children: [
//           {
//             path: "profile", //when i am writting this type then it will be wriiten localhost:1234/about/profile
//             element: <Profile />,
//           },
//         ],
//       },
//       {
//         path: "/contact",
//         element: <Contact />,
//       },
//       {
//         path: "/grocery",
//         element: <Suspense fallback={<h1>Loading.....</h1>}><Grocery /></Suspense>,
//       },
//       {
//         path: "/restaurant/:resId",
//         element: <RestrauntMenu />,
//       },
//       {
//         path: "/cart",
//         element: <Cart />,
//       },
//     ],
//   },
// ]);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<RouterProvider router={appRouter} />);
// // ReactDOM.render(<RouterProvider/> , document.getElementById("root"));
