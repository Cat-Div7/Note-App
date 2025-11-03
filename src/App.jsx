import { createBrowserRouter, RouterProvider } from "react-router";
import {
  LayoutPage,
  ErrorPage,
  CreateNotePage,
  AllNotesPage,
  HomePage,
  StatisticsPage,
} from "@pages";

const router = createBrowserRouter([
  {
    path: "",
    element: <LayoutPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "create",
        element: <CreateNotePage />,
      },
      {
        path: "all-notes",
        element: <AllNotesPage />,
      },
      {
        path: "statistics",
        element: <StatisticsPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
