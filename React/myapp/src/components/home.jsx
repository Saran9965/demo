import React from "react";

const Home = ({ user, setUser }) => {
  return (
    <div>
      <h1>Welcome to Home Page</h1>
      <h1>Hello {user}</h1>
    </div>
  );
};

export default Home;
