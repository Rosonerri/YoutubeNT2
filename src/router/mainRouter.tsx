import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import HomeScreen from "../pages/HomeScreen";
import Layout2 from "../components/Block/Layout2";
import Detailed from "../pages/Detailed";
export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
    ],
  },
  {
    path: "/detailed-page",
    element: <Layout2/>,
    children: [
      {
        index: true,
        element: <Detailed/>,
      }
    ]
  }
]);
