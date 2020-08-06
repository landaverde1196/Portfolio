import React from "react";
import classes from "./Portfolio.module.css";

import ProjectsList from "./ProjectsList/ProjectsList";

const Portfolio = (props) => (
  <div className={classes.Projects}>
    <div className={classes.Content}>
      <div className={classes.Title}>
        <h1>My Portfolio</h1>
      </div>
      <ProjectsList />
    </div>
  </div>
);

export default Portfolio;
