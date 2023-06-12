import React, { useState } from "react";
import "../styles/Contacts.css";
import store from "../redux/store";
import myProfile from "../data/constants";

import tel from "../assets/images/Telephone-icon.png";
import whatsApp from "../assets/images/Whatsapp-icon.png";
import mail from "../assets/images/Mail-icon.png";
import git from "../assets/images/Git-icon.png";

function Contacts() {
  const [currentLanguage, setLanguage] = useState(store.getState().language);
  const [headerClass, setHeaderClass] = useState("sidebar-header active");
  const [containerClass, setContainerClass] = useState("sidebar-container");
  let myContact = myProfile[currentLanguage].contacts.title;
  let myNumber = myProfile[currentLanguage].contacts.tel;
  let myMail = myProfile[currentLanguage].contacts.mail;
  let myGit = myProfile[currentLanguage].contacts.git;

  store.subscribe(() => {
    setLanguage(store.getState().language);
  });

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
    <div className="contacts">
      <h4 onClick={hide} className={headerClass}>
        {myContact}
      </h4>
      <div className={containerClass}>
        <div className="contact">
          <img className="icons" src={tel} alt="My telephone" />
          <div className="contact-details">{myNumber}</div>
        </div>
        <div className="contact">
          <img className="icons" src={whatsApp} alt="My whatsapp" />
          <div className="contact-details">{myNumber}</div>
        </div>
        <div className="contact">
          <img className="icons" src={mail} alt="My mail" />
          <div className="contact-details">{myMail}</div>
        </div>
        <div className="contact">
          <img className="icons" src={git} alt="My git" />
          <div className="contact-details">{myGit}</div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
