import React from 'react';
import About from './components/About';
import './Body.module.css';
import Education from './components/Education';
import PExp from './components/PExp';
import Skills from './components/Skills';

const Body = () => {
  return (
    <main>
      <About />
      <br />
      <Education />
      <br />
      <PExp />
      <br />
      <Skills />
      <br />
    </main>
  );
};

export default Body;
