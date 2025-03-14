import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;


