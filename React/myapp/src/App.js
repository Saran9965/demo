import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/home";
import "./App.css";

function App() {
  const [user, setUser] = useState('Guest...');

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Signup />,
    },
    {
      path: "/login",
      element: <Login user={user} setUser={setUser} />,
    },
    {
      path: "/home",
      element: <Home user={user} setUser={setUser} />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;