import React from 'react';
import cl from '../Body.module.css';

const Skills = () => {
  return (
    <>
      <h2>SKILLS</h2>
      <br />
      <p className={cl.skills}>HTML5, CSS3</p>
      <p className={cl.skills}>
        Javascript(ES6, React, NodeJS(basic), NestJS (basic), TypeScript) +
        Redux, Webpack, Swagger (basic)
      </p>
      <p className={cl.skills}>
        DataBase: InterBase (SQL), MongoDB (basic), Firebase(basic)
      </p>
      <p className={cl.skills}>Git and GitHub</p>
    </>
  );
};

export default Skills;
