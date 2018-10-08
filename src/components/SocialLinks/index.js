import React from "react";
import { FaMedium, FaEnvelope, FaTwitter, FaGithub, FaLinkedin } from "react-icons/lib/fa";

import styles from "./socialLinksStyles.module.css";

const SocialLinks = () => {
  return (
    <div className={styles.socialLinks}>
      <ul>
        <li>
          <a href="mailto:benhartouzmohamed@gmail.com">
            <FaEnvelope />
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/mohamed-benhartouz-01593498/">
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a href="https://github.com/benhartouz">
            <FaGithub />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/KokizzSamii">
            <FaTwitter />
          </a>
        </li>
        <li>
          <a href="https://medium.com/@benhartouzmohamed">
            <FaMedium />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialLinks;
