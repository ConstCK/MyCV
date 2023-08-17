import React, { useState } from "react";
import "../styles/Contacts.css";
import store from "../redux/store";
import myProfile from "../data/constants";

import tel from "../assets/images/Telephone-icon.png";
import telegram from "../assets/images/Telegram-icon.png";
import mail from "../assets/images/Mail-icon.png";
import git from "../assets/images/Git-icon.png";

function Contacts() {
  const [currentLanguage, setLanguage] = useState(store.getState().language);
  const [headerClass, setHeaderClass] = useState("sidebar-header active");
  const [containerClass, setContainerClass] = useState("sidebar-container");
  let myContact = myProfile[currentLanguage].contacts.title;
  let myNumber = myProfile[currentLanguage].contacts.tel;
  let myTelegram = myProfile[currentLanguage].contacts.telegram;
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
          <a
            className="contact-details"
            href={`tel: ${myNumber}`}
            target="_blank"
          >
            {myNumber}
          </a>
        </div>
        <div className="contact">
          <img className="icons" src={telegram} alt="My telegram" />
          <a className="contact-details" href={myTelegram} target="_blank">
            {myTelegram}
          </a>
        </div>
        <div className="contact">
          <img className="icons" src={mail} alt="My mail" />
          <a
            className="contact-details"
            href={`mailto: ${myMail}`}
            target="_blank"
          >
            {myMail}
          </a>
        </div>
        <div className="contact">
          <img className="icons" src={git} alt="My git" />
          <a className="contact-details" href={myGit} target="_blank">
            {myGit}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
