import React from "react";
import Link from "gatsby-link";

import {
  Sides,
  LeftSide,
  RightSideHome
} from "../shared/styles/styled-components";

import Info from "../components/Info";
import Who from "../components/Who";
import CurrentProjects from "../components/CurrentProjects";
import DevStack from "../components/DevStack";
import Technologies from "../components/Technologies";
import Projects from "../components/Projects";
import SideProjects from "../components/SideProjects";
import Blogs from "../components/Blogs";
import OpenSourceCommits from "../components/OpenSourceCommits";
import Libraries from "../components/Libraries";
import Contact from "../components/Contact";

const IndexPage = () => (
  <div>
    <Sides>
      <LeftSide>
        <Info />
      </LeftSide>
      <RightSideHome>
        <Who />
        <CurrentProjects />
        <DevStack />
        <Technologies />
        <Projects />
        <Contact />
        {/*
          <OpenSourceCommits />
          <SideProjects />
          <Blogs />
          <Libraries />
        */}
      </RightSideHome>
    </Sides>
  </div>
);

export default IndexPage;
