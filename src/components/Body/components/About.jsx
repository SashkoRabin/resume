import React from 'react';
import cl from '../Body.module.css';

const About = () => {
  return (
    <>
      <h2>Frontend_developer</h2>
      <p>sashrabin@gmail.com</p>
      <br />
      <div className={cl.contacts}>
        <span className={cl.contacts__span}>
          <i className="fa-solid fa-link" />
          <a
            href="https://github.com/SashkoRabin"
            target="_blank"
            rel="noreferrer"
          >
            My GitHub
          </a>
          , here you can see my projects
        </span>
        <span className={cl.contacts__span}>
          <i className="fa-solid fa-phone "></i>
          +38(095)-163-2772
        </span>
      </div>
      <br />
      <div className="about_me">
        An enthusiastic Frontend developer seeking an entry-level position to
        use and improve my skills in programming, communication and problem
        solving
      </div>
    </>
  );
};

export default About;
