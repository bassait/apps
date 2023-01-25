import { createBrowserRouter } from "react-router-dom";
import App from './App'
import AppPage from './Pages/AppPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "app",
    element: <AppPage />,
  },
]);

export default router;
