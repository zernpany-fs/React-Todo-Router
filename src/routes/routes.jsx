import { createBrowserRouter } from "react-router";
import RootLayout from "../components/RootLayout";
import CreateTodoPage from "../pages/CreateTodoPage";
import EditTodoPage from "../pages/EditTodoPage";
import HomePage from "../pages/HomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { path: "/create", Component: CreateTodoPage },
      { path: "/edit/:todoId", Component: EditTodoPage },
      { path: "/home", Component: HomePage },
    ],
  },
]);
