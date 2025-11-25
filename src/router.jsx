import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Clients from "./pages/Clients";
import ClientDetail from "./pages/ClientDetail";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/AboutUs";
import AboutVision from "./pages/AboutVision";
import AboutMission from "./pages/AboutMission";
import AboutCoreValues from "./pages/AboutCoreValues";
import AutomotiveMobile from "./pages/AutomotiveMobile";
import TechnicalServices from "./pages/TechnicalServices";
import ArtificialIntelligence from "./pages/ArtificialIntelligence";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/linh-vuc-hoat-dong", element: <Services /> },
      { path: "/o-to-di-dong", element: <AutomotiveMobile /> },
      { path: "/dich-vu-ki-thuat", element: <TechnicalServices /> },
      { path: "/tri-tue-nhan-tao", element: <ArtificialIntelligence /> },
      { path: "/khach-hang", element: <Clients /> },
      { path: "/khach-hang/:slug", element: <ClientDetail /> },
      { path: "/tuyen-dung", element: <Careers /> },
      { path: "/lien-he", element: <Contact /> },
      {
        path: "/gioi-thieu",
        element: <AboutUs />,
      },
      {
        path: "/tam-nhin",
        element: <AboutVision />,
      },
      {
        path: "/su-menh",
        element: <AboutMission />,
      },
      {
        path: "/gia-tri-cot-loi",
        element: <AboutCoreValues />,
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
