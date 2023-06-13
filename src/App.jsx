import React from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Main from "./components/Main.jsx";
import store from "./redux/store.js";

function App() {  
  return (
    <React.Fragment>
      <Header />
      <div className="main-container">
        <Sidebar />
        <Main />
      </div>
    </React.Fragment>
  );
}

export default App;
