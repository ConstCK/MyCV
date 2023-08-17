import React, { useState } from "react";
import "../styles/SkillsInfoBlock.css";

function SkillsInfoBlock(props) {
  const [headerClass, setHeaderClass] = useState("sidebar-header active");
  const [containerClass, setContainerClass] = useState("sidebar-container");

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
    <div className="skills-info-block">
      <h4 onClick={hide} className={headerClass}>
        {props.data.title}
      </h4>
      <div className={containerClass}>
        {props.data.content.map((el) => {
          return (
            <div key={el} className="skills-cell info">
              <div className="skills-detail">{el}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SkillsInfoBlock;
