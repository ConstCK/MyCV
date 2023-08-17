import React, { useState } from "react";
import "../styles/ProjectsBlock.css";

const ProjectsBlock = (props) => {
  const [headerClass, setHeaderClass] = useState("main-header active");
  const [containerClass, setContainerClass] = useState(
    "projects-info-container"
  );

  function hide() {
    if (headerClass == "main-header active") {
      setHeaderClass("main-header");
    } else {
      setHeaderClass("main-header active");
    }
    if (containerClass == "projects-info-container") {
      setContainerClass("projects-info-container hidden");
    } else {
      setContainerClass("projects-info-container");
    }
  }

  return (
    <div className="projects-info-block">
      <h3 onClick={hide} className={headerClass}>
        {props.data.title}
      </h3>
      <div className={containerClass}>
        {props.data.info.map((el) => {
          return (
            <div key={el.name} className="projects-info-cell">
              <h3 className="projects-info-name">{el.name}</h3>
              <div className="projects-info-techs">{el.techs}</div>
              <a href={el.link} target="_blank">
                {el.link}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsBlock;
