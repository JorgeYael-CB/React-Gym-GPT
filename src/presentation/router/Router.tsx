import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/home";
import { RouterInterface } from "../../interface";
import { Payments } from "../pages/payments";
import { Support } from "../pages/support";
import { Faq } from "../pages/faq";
import { NavBar } from "../components/NavBar";



export const routes:RouterInterface[] = [
  {
    element: <Home/>,
    route: '/',
    title: 'Gym-AI',
  },
  {
    element: <Payments/>,
    route: '/payments',
    title: 'Payments',
  },
  {
    element: <Support/>,
    route: '/support',
    title: 'Support',
  },
  {
    element: <Faq/>,
    route: '/faq',
    title: 'F.A.Q.',
  },
]


export const Router = createBrowserRouter([
  {
    path: '/',
    element: <NavBar routes={ routes }/>,
    children: routes.map( r => (
      {
        path: r.route,
        element: r.element,
      }
    )),
  },
]);