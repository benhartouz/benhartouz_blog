import React from "react";

import Avatar from "../Avatar/index";
import SocialLinks from "../SocialLinks/index";

const Info = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Avatar />
      <div>
        <h1>Hi, I'm Mohamed BEN HARTOUZ👋</h1>
        <h3>Fullstack Javascript Developer 👨‍💻</h3>
        <SocialLinks />
      </div>
    </div>
  );
};

export default Info;
