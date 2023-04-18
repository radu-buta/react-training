import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./data/store";

import Main from "./pages/Main";
import AddTodo from "./pages/AddTodo";
import PageNotFound from "./pages/PageNotFound";
import SeeTodos from "./pages/SeeTodos";
import SeeUsers from "pages/SeeUsers";

import * as routes from "./routes";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const router = createBrowserRouter([
  {
    path: routes.HOME,
    element: <Main />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: routes.ADD_TODO,
        element: <AddTodo />,
      },
      {
        path: routes.SEE_TODOS,
        element: <SeeTodos />,
      },
      {
        path: routes.SEE_USERS,
        element: <SeeUsers />,
      },
    ],
  },
]);

root.render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
