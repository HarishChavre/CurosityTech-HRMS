// App.js
import React from "react";
import Dashboard from "./components/Dashboard";
import Login from "./pages/LoginPage";

function App() {
  return (
    <div className="App">
      <h1>Welcome to the App</h1>
      <Login />
      {/* Uncomment the line below to include the Dashboard component */}
      {/* <Dashboard /> */}
    </div>
    )
};

export default App;
