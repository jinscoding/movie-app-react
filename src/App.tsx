import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Layout from "./components/Layout";
import { useState } from "react";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <Layout>
          <Home />
        </Layout>
      ),
    },
    {
      path: "/movie/:id",
      element: (
        <Layout>
          <Detail />
        </Layout>
      ),
    },
  ],
  {
    basename: process.env.PUBLIC_URL,
  }
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
