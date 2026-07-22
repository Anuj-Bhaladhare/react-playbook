import React from "react";
import "./App.css";

import Counter from "./components/Counter.jsx";

const App = () => {

  return (
    <div className="App">
      <h1>Context API</h1>

      <div>
        <Counter />
      </div>
    </div>
  );

}

export default App;
