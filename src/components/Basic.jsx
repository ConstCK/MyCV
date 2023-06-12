import React, { useState } from "react";
import myProfile from "../data/constants";
import store from "../redux/store";

function Basic() {
  const [currentLanguage, setLanguage] = useState(store.getState().language);
  const [headerClass, setHeaderClass] = useState("main-header active");
  const [containerClass, setContainerClass] = useState("main-info-container");
  let myInfo = myProfile[currentLanguage].main_info;
  let myHome = myProfile[currentLanguage].residence;
  let myAge = myProfile[currentLanguage].age;

  function hide() {
    if (headerClass == "main-header active") {
      setHeaderClass("main-header");
    } else {
      setHeaderClass("main-header active");
    }
    if (containerClass == "main-info-container") {
      setContainerClass("main-info-container hidden");
    } else {
      setContainerClass("main-info-container");
    }
  }

  store.subscribe(() => {
    setLanguage(store.getState().language);
  });

  return (
    <div className="basic">
      <h2 onClick={hide} className={headerClass}>
        {myInfo}
      </h2>
      <div className={containerClass}>
        <div className="main-info-cell">{myHome}</div>
        <div className="main-info-cell">{myAge}</div>
      </div>
    </div>
  );
}

export default Basic;
