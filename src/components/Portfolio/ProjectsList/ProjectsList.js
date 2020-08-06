import React from "react";
import classes from "./ProjectsList.module.css";

import Projects from "./Projects/Projects";
import Burger from "../../../assets/images/Burger.JPG";
import Ravenous from "../../../assets/images/Ravenous.png";
import Jamming from "../../../assets/images/Jamming.png";

const ProjectsList = (props) => (
  <ul className={classes.List}>
    <Projects
      picture={Burger}
      alt="BurgerBuilder"
      name="Burger Builder"
      description="Create a user and order your Burger!"
      app="https://react-burger-builder-94f16.web.app/"
      code="https://github.com/landaverde1196/Burger-Builder"
    />
    <Projects
      picture={Ravenous}
      alt="Ravenous"
      name="Ravenous"
      description="Search restaurants around the world!"
      code="https://github.com/landaverde1196/Ravenous"
    />
    <Projects
      picture={Jamming}
      alt="BurgerBuilder"
      name="Jamming"
      description="Faster way of making a playlist in Spotify!"
      code="https://github.com/landaverde1196/jamming"
    />
    {/* <Projects
      picture={Image}
      alt="BurgerBuilder"
      name="Project 4"
      description="Create a user and order your Burger!"
    /> */}
  </ul>
);

export default ProjectsList;
