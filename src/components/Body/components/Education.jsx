import React from 'react';
import cl from '../Body.module.css';

const Education = () => {
  return (
    <>
      <h2>EDUCATION</h2>
      <br />
      <div className={cl.education}>
        <span className={cl.education}>Alexandria Polytechnic College</span>
        <span className={cl.years}>2018-2022</span>
      </div>
      <p>Junior specialist in software engineering</p>
      <br />
      <div className={cl.education}>
        <span className={cl.education}>Self-study</span>
        <span className={cl.years}>always</span>
      </div>
    </>
  );
};

export default Education;
