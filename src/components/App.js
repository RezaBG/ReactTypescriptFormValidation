import React from "react";

function App() {
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" />
        <button>
          <span>Add</span>
        </button>
      </div>
      <div>
        <li>A Item</li>
      </div>
    </div>
  );
}

export default App;
