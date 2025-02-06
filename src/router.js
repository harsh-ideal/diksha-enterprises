import React ,{lazy} from "react";
import { createBrowserRouter } from "react-router-dom";
import DikshaNavbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import AnimationTrail from "./components/AnimationTrial.jsx";
import CarPainting from "./components/CarPainting.jsx";
const App = lazy(() => import("./pages/App.jsx"));

export const router = createBrowserRouter([
  
    {
      path: "/",
      element: <App/>,
      children: [
        { path: "/", element: <Home /> },
        { path: "/animation", element: <CarPainting /> },
        // { path: "/signin", element: <SignIn to="signin" /> },
        // { path: "/signup", element: <SignIn to="signup" /> },
      ]
      },
      ]);

