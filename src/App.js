import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import FormResult from "./FormResult";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "formResult",
      element: <FormResult />,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
