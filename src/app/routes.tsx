import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Policies } from "./components/Policies";
import { Policy1 } from "./components/Policy1";
import { Policy2 } from "./components/Policy2";
import { Policy3 } from "./components/Policy3";
import { Policy4 } from "./components/Policy4";
import { Policy5 } from "./components/Policy5";
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
      { path: "policy1", Component: Policy1 },
      { path: "policy2", Component: Policy2 },
      { path: "policy3", Component: Policy3 },
      { path: "policy4", Component: Policy4 },
      { path: "policy5", Component: Policy5 },
      { path: "vision", Component: Vision },
      { path: "contact", Component: Contact },
      { path: "*", Component: NotFound },
    ],
  },
]);