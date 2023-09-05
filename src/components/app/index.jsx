import Global from "components/global";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import routes from "routes";
import MainLayout from "components/layout";

const router = createBrowserRouter(
  routes.map((route) => {
    const Layout = route.layout;
    const Element = route.element;
    return {
      path: route.path,
      element: Layout ? (
        <Layout>
          <Element />
        </Layout>
      ) : route?.noLayout ? (
        <Element />
      ) : (
        <MainLayout>
          <Element />
        </MainLayout>
      )
    };
  })
);

const App = () => {
  return (
    <Global>
      <RouterProvider router={router} />
    </Global>
  );
};

export default App;
