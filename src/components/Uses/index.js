import React from "react";

import { HeaderDiv } from "./styled-uses";
/**
 * Blog
 *      
This blog was built with Jekyll using the Hyde theme and is hosted on GitHub Pages.

Terminal
I use the Hyper terminal using the hyper-snazzy plugin and the Source Code Pro for Powerline font.

I use the oh-my-zsh shell using the git npm z node brew zsh-syntax-highlighting zsh-nvm plugins.

As for my prompt, I either use the spaceship-prompt or the agnoster ZSH_THEME that comes baked into Oh My ZSH!.

Editor
I’m currently using the VS Code editor using the Cobalt2 Official Theme and the Fira Code font (a monospaced font with programming ligatures).

VS Code Extensions
Some of the extensions that I regularly use are listed below…

advanced-new-file
Debugger for Chrome
Duplicate action
ESLint
Formatting toggle
GitLens — Git supercharged
Import Cost
Material Icon Theme
Prettier - Code formatter
Settings Sync
TODO Highlight
Vim
Version Lens
Tools
Gif
LICEcap
Recordit
kap
 */
class Uses extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <HeaderDiv>
                    <h1>Uses</h1>
                </HeaderDiv>
                <HeaderDiv>
                    <h1>Software and dev tools</h1>
                </HeaderDiv>
                <ul>
                    <li>VS Code</li>
                </ul>
            </div>
        );
    }
}

export default Uses;
