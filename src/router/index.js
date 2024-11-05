import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout";
import Home from "../pages/home";
import FilterProvider from "../context/filterContext";
import PageNotFound from '../pages/pageNotFound';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <FilterProvider>
            <Home />
          </FilterProvider>
        ),
      },
    ],
  },{
    path:'*',
    element: <PageNotFound/>,
  }
]);

export default router;
