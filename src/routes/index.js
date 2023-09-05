import NotFound from "pages/NotFound";
import Files from "pages/Files";
import Home from "pages/Home";
import Todo from "pages/Todo";
import Tools from "pages/Tools";
import UnAuthorized from "pages/UnAuthorized";

const routes = [
  {
    path: "/404",
    element: NotFound,
    noLayout: true
  },
  {
    path: "/403",
    element: UnAuthorized
  },
  {
    path: "/",
    element: Home
  },
  {
    path: "/files",
    element: Files
  },
  {
    path: "/todo",
    element: Todo
  },
  {
    path: "/tools",
    element: Tools
  }
];

export default routes;
