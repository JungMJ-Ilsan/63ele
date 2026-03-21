import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Policies } from "./components/Policies";
import { Vision } from "./components/Vision";
import { Contact } from "./components/Contact";
import { NotFound } from "./components/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "policies", Component: Policies },
      { path: "vision", Component: Vision },
      { path: "contact", Component: Contact },
      { path: "*", Component: NotFound },
    ],
  },
]);
