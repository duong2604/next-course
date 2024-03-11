"use client";

import { useState } from "react";

const Homepage = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div>
        <button className="btn btn-warning btn-square">{count}</button>
      </div>
      <button className="btn btn-accent" onClick={(e) => setCount(count + 1)}>
        Click
      </button>
    </div>
  );
};
export default Homepage;
