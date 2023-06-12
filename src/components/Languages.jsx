import React, { useEffect, useState, useRef } from "react";
import "../styles/Languages.css";
import store from "../redux/store";
import myProfile from "../data/constants";

function Languages() {
  const myRef = useRef(null);
  const [currentLanguage, setLanguage] = useState(store.getState().language);
  const [scaleSize, setScaleSize] = useState(0);
  const [barSize, setBarSize] = useState(0);
  const [headerClass, setHeaderClass] = useState("sidebar-header active");
  const [containerClass, setContainerClass] = useState("sidebar-container");
  let myLanguagesTitle = myProfile[currentLanguage].languages.title;
  let myLanguagesContent = myProfile[currentLanguage].languages.content;

  store.subscribe(() => {
    setLanguage(store.getState().language);
  });

  useEffect(() => {
    if (scaleSize < 95) {
      setTimeout(() => {
        setScaleSize(scaleSize + 1);
      }, 15);
    }
  }, [scaleSize]);

  useEffect(() => {
    if (barSize < 4) {
      setTimeout(() => {
        setBarSize(barSize + 1);
        myRef.current.children[barSize].style = "background-color:orange";
      }, 300);
    }
  }, [barSize]);

  function hide() {
    if (headerClass == "sidebar-header active") {
      setHeaderClass("sidebar-header");
    } else {
      setHeaderClass("sidebar-header active");
    }
    if (containerClass == "sidebar-container") {
      setContainerClass("sidebar-container hidden");
    } else {
      setContainerClass("sidebar-container");
    }
  }

  return (
    <div className="language-skills">
      <h4 onClick={hide} className={headerClass}>
        {myLanguagesTitle}
      </h4>
      <div className={containerClass}>
        <div className="language-skills info">{myLanguagesContent[0]}</div>
        <div ref={myRef} className="language-skills bar">
          <div>A1</div>
          <div>A2</div>
          <div>B1</div>
          <div>B2</div>
          <div>C1</div>
          <div>C2</div>
        </div>
        <div className="language-skills info">{myLanguagesContent[1]}</div>
        <div className="language-skills scale">
          <div style={{ width: `${scaleSize}%` }} id="Russian">
            {scaleSize}%
          </div>
        </div>
      </div>
    </div>
  );
}

export default Languages;
