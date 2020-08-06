import React from "react";
import classes from "./About.module.css";

const About = (props) => (
  <div className={classes.Background}>
    <div className={classes.Content}>
      <div>
        <h1>ABOUT</h1>
        <h2>My name is Alejandro Landaverde I'm a Web Developer</h2>
        <p>
          I’m a Web Developer looking for an opportunity in a Front End position
          to be able to develop and grow professionally within the company.
          <br />
          I like to code things from scratch, and enjoy bringing ideas to life
          in the browser, while I keep learning new things every day.
          <br />I know{" "}
          <span className={classes.Code}>
            HTML, CSS, FlexBox, Grid, Sass, JavaScript, React, Redux, Nodejs &
            Git
          </span>
          . My goal is to become a Full Stack Web Developer, control the Front
          End & the Back End and learn the most from it. The training I have
          acquired during these months, added to my interest in continuing to
          train and develop professionally, has given me the confidence and
          preparation necessary to be able to collaborate effectively in the
          functions and responsibilities that the position demands. <br />I hope
          to have the opportunity to speak with you shortly in an interview, to
          personally present my knowledge and my desire to be part of your team.
        </p>
      </div>

      <div className={classes.Experience}>
        <h1>EXPERIENCE</h1>
        <h2>Travel Agent (Jun-2017 to Dec-2019)</h2>
        <p>
          I worked as a travel agent in a Travel Agency named Hossana Travel
          that is located in San Pedro Sula, Honduras. <br /> My job was to sell
          airplane Tickets, Hotels, Car rents, Cruise packages and build
          packages for the customers.
        </p>

        <h2>Sales Agent (Jan-2015 to May-2017)</h2>
        <p>
          I worked as a sales agent for the company Great Health Works that is
          located in Florida, my job was to sell different products such as
          Omegas, Probiotics & Vitamins. <br /> The products were sell in the
          U.S.A. and Canada.
        </p>
      </div>
    </div>
  </div>
);

export default About;
