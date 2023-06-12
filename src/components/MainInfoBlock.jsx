import React, { useState } from "react";

function MainInfoBlock(props) {
  const [headerClass, setHeaderClass] = useState("main-header active");
  const [containerClass, setContainerClass] = useState("main-info-container");

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

  return (
    <div className="main-info-block">
      <h3 onClick={hide} className={headerClass}>
        {props.data.title}
      </h3>
      <div className={containerClass}>
        {props.data.info.map((el) => {
          return (
            <div key={el.period} className="main-info-cell">
              <h3 className="main-info-period">{el.period}</h3>
              <div className="main-info-establishment">{el.establishment}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MainInfoBlock;
