import React, { useState } from "react";
import ReactDOM from "react-dom";

const root = document.getElementById("root");

function Application() {
  const [counter, setCounter] = useState(0);
  
  return (
    <>
      <h2>Welcome to my application</h2>
      <div>
        <button onClick={() => setCounter(oldValue => oldValue + 1)}>Click me</button>
      </div>
      <div>You have clicked {counter} times</div>
    </>
  );
}

ReactDOM.createRoot(root).render(<Application />);
