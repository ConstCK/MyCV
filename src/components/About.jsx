import React, { useState } from "react";
import myProfile from "../data/constants";
import store from "../redux/store";

function About() {
  const [currentLanguage, setLanguage] = useState(store.getState().language);
  const [headerClass, setHeaderClass] = useState("main-header active");
  const [containerClass, setContainerClass] = useState("main-info-container");
  let myAboutTitle = myProfile[currentLanguage].about.title;
  let myAboutContent = myProfile[currentLanguage].about.content;

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
    <div className="about">
      <h3 onClick={hide} className={headerClass}>
        {myAboutTitle}
      </h3>
      <div className={containerClass}>
        <div className="main-info-cell">{myAboutContent}</div>
      </div>
    </div>
  );
}

export default About;
