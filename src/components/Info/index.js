import React from "react";

import Avatar from "../Avatar/index";
import SocialLinks from "../SocialLinks/index";

const Info = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Avatar />
      <div>
        <h1>Hi, I'm Mohamed BEN HARTOUZ👋</h1>
        <h3>FullStack JavaScript Developer 👨‍💻</h3>
        <hr />
        <h4>Code never lies, comments sometimes do (^_^). ‍💻</h4>
        <h4>Mail: benhartouzmohamed@gmail.com </h4>
        <SocialLinks />
      </div>
    </div>
  );
};

export default Info;
