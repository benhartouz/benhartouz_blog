import React from "react";
import { HeaderDiv, ListItem } from "./styled-uses";
class Uses extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <HeaderDiv>
                    <h1>🔭 Uses 🔭</h1>
                    <p>
                        As JavaScript developer this the tools i used during my
                        daily development.
                    </p>
                </HeaderDiv>
                <HeaderDiv>
                    <h1> 🌐 Software and Dev-Tools</h1>
                </HeaderDiv>
                <ul>
                    <ListItem>Visual Studio Code</ListItem>
                    <ListItem>Google Chrome</ListItem>
                    <ListItem>iTerm and oh my zsh</ListItem>
                    <ListItem>Todoist</ListItem>
                    <ListItem>Slack</ListItem>
                    <ListItem>Android Studio</ListItem>
                    <ListItem>Xcode</ListItem>
                    <ListItem>Postman</ListItem>
                    <ListItem>Realm Studio</ListItem>
                </ul>
                <HeaderDiv>
                    <h1> 🖥️ Hardware</h1>
                </HeaderDiv>
                <ul>
                    <ListItem>MacBook pro (Retina, 13-inch, 2015)</ListItem>
                </ul>
            </div>
        );
    }
}

export default Uses;
