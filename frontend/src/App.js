import React from "react";
import Home from "./Home";
import "./App.css";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <div>
        <Toaster position="top-center"></Toaster>
      </div>
      <div className="app">
        <div className="appWrapper">
          <Home />
        </div>
      </div>
    </>
  );
}

export default App;
