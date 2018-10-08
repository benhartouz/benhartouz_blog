import React, { Component } from "react";
import ToggleDisplay from "react-toggle-display";

import {
  Section,
  SectionTitle,
  UnorderedList,
  ListItem,
  ShowMoreButton,
  ContactMe ,
  Text
} from "../../shared/styles/styled-components";

import { links } from '../../data/socialLinks';

import { interestingFacts } from "../../data/interesting";

class Contact extends Component {
  state = {
    show: false,
    text: "Show me more"
  };

  handleClick() {
    this.setState({
      show: !this.state.show,
      text: "That's Enough!"
    });
  }

  render() {
    return (
      <Section>
        <SectionTitle>Be in touch 📩 </SectionTitle>
        <Text>
          If you'd like to collaborate on a project, app or hire me as a consultant,
          <ContactMe href={links.email}>drop me an email.</ContactMe>
        </Text>  
      </Section>
    );
  }
}

export default Contact;
