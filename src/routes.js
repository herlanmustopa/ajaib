import { useRoutes } from "react-router-dom";
// layouts
import DashboardLayout from "./layouts/dashboard";

// pages
import Home from "./pages/dashboard";

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <DashboardLayout />,
      children: [{ path: "/", element: <Home /> }],
    },
  ]);
}
