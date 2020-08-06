import React from "react";
import classes from "./Projects.module.css";

const Projects = (props) => (
  <li className={classes.List}>
    <div className={classes.MyProjects}>
      <div className={classes.Thumbnail}>
        <img src={props.picture} alt={props.alt} className={classes.Image} />
      </div>
      <div className={classes.Content}>
        <h1>{props.name}</h1>
        <p>{props.description}</p>
        <a href={props.app} target="_blank" rel="noopener noreferrer">
          CHECK IT OUT
        </a>
        <a href={props.code} target="_blank" rel="noopener noreferrer">
          SEE CODE
        </a>
      </div>
    </div>
  </li>
);

export default Projects;
