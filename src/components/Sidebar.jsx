import React, { useState } from "react";
import "../styles/Sidebar.css";
import store from "../redux/store";
import Photo from "./Photo.jsx";
import Contacts from "./Contacts.jsx";
import Languages from "./Languages.jsx";
import SkillsInfoBlock from "./SkillsInfoBlock.jsx";
import myProfile from "../data/constants";

function Sidebar() {
  const [currentLanguage, setLanguage] = useState(store.getState().language);
  const MyCodingSkills = myProfile[currentLanguage].coding_skills;
  const MySkillsDetails = myProfile[currentLanguage].coding_details;
  const MyAppSkills = myProfile[currentLanguage].app_skills;
  store.subscribe(() => {
    setLanguage(store.getState().language);
  });

  return (
    <div className="sidebar">
      <Photo />
      <Contacts />
      <Languages />
      <SkillsInfoBlock data={MyCodingSkills} />
      <SkillsInfoBlock data={MySkillsDetails} />
      {/* <SkillsInfoBlock data={MyAppSkills} /> */}
    </div>
  );
}

export default Sidebar;
