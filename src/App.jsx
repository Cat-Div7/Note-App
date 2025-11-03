import { createBrowserRouter, RouterProvider } from "react-router";
import {
  LayoutPage,
  ErrorPage,
  CreateNote,
  AllNotesPage,
  HomePage,
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
        element: <CreateNote />,
      },
      {
        path: "all-notes",
        element: <AllNotesPage />,
      },
      {
        path: "statistics",
        element: <div>Statistics</div>,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
