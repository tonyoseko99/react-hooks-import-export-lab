import React from "react";
import name from "../data/user"

function Home() {
  return (
    <div id="home">
      <h1>
        {name.username} is a Web Developer from {name.city}
      </h1>
    </div>
  );
}
export default Home;
