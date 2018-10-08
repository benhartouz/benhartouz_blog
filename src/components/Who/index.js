import React from "react";
import {
  Section,
  SectionTitle,
  UnderlinedLink,
  UnorderedList,
  ListItem, 
  Text
} from "../../shared/styles/styled-components";
import { textLinks } from "../../data/socialLinks";

const Who = () => {
  return (
    <Section id="who">
      <SectionTitle>Hey, 👋</SectionTitle>
      <Text> 
        I'm a 💻 Web /📱 Mobile application developer currently obsessed with Javascript world.<br />
        I work professionally on React application's and I consider myself a limitless learner focused about everything related to Web development / Mobile application .<br />
        My experience allows me to pick the right strategy for developing cross-platform applications that run on a variety of desktop computers as well as mobile devices.<br />
      </Text>
    </Section>
  );
};

export default Who;
