import React, { useState } from "react";
import "../styles/Header.css";
import store from "../redux/store";
import myProfile from "../data/constants";

function Header() {
  const [currentLanguage, setLanguage] = useState(store.getState().language);
  const myName = myProfile[currentLanguage].name;

  store.subscribe(() => {
    setLanguage(store.getState().language);
  });

  return (
    <div className="header">
      <h1>{myName}</h1>
    </div>
  );
}

export default Header;
