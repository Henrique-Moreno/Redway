import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Welcome} from "./pages/Welcome";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/welcome", element: <Welcome/> },
]);
