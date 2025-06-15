import { createBrowserRouter,RouterProvider } from "react-router";
import { router as Routes } from "./routes";

const router = createBrowserRouter(Routes)

function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App;
