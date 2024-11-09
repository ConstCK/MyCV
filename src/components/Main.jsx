import React, { useState } from "react";
import "../styles/Main.css";
import myProfile from "../data/constants";
import store from "../redux/store";
import Basic from "./Basic.jsx";
import MainInfoBlock from "./MainInfoBlock.jsx";
import ProjectsBlock from "./ProjectsBlock.jsx";
import About from "./About.jsx";

function Main() {
  const [currentLanguage, setLanguage] = useState(store.getState().language);

  let myEducation = myProfile[currentLanguage].education;
  let myJob = myProfile[currentLanguage].job;
  let myProjects = myProfile[currentLanguage].projects;

  const changeLanguage = () => {
    return store.dispatch({ type: "CHANGE_LANGUAGE" });
  };

  store.subscribe(() => {
    setLanguage(store.getState().language);
  });

  return (
    <div className="main">
      <div className="btn-container">
        <button onClick={changeLanguage}>
          {currentLanguage == "en" ? "en" : "ru"}
        </button>
      </div>
      <Basic />
      <ProjectsBlock data={myProjects} />
      <MainInfoBlock data={myEducation} />
      <MainInfoBlock data={myJob} />
      <About />
    </div>
  );
}

export default Main;
