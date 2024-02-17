import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { PageHome, PageProfile, PageWorkout, PageNotFound } from "./pages/";
import ReactDOM from "react-dom/client";
import { AppProvider } from "./AppContext.tsx";
import App from "./App.tsx";
import "./index.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: "/",
        element: <PageHome />,
      },
      {
        path: "/profile",
        element: <PageProfile />,
      },
      {
        path: "/workout",
        element: <PageWorkout />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <AppProvider>
    <RouterProvider router={router} />
  </AppProvider>
);
