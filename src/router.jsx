import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Clients from "./pages/Clients";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/AboutUs";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/linh-vuc-hoat-dong", element: <Services /> },
      { path: "/khach-hang", element: <Clients /> },
      { path: "/tuyen-dung", element: <Careers /> },
      { path: "/lien-he", element: <Contact /> },
      { path: "*", element: <NotFound /> },
      {
        path: "/gioi-thieu",
        element: <AboutUs />,
      },
    ],
  },
]);
