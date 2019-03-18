import React from "react";

import {
    Section,
    SectionTitle,
    ListItem,
    UnorderedList
} from "../../shared/styles/styled-components";

import { devstack, devops } from "../../data/technologies";

const DevStack = () => {
    return (
        <Section id="dev-stack">
            <SectionTitle> Current dev stack </SectionTitle>
            <UnorderedList>
                {devstack.map(item => (
                    <ListItem key={item.name}>{item.name}</ListItem>
                ))}
            </UnorderedList>
            <SectionTitle> Devops </SectionTitle>
            <UnorderedList>
                {devops.map(item => (
                    <ListItem key={item.name}>{item.name}</ListItem>
                ))}
            </UnorderedList>
        </Section>
    );
};

export default DevStack;
