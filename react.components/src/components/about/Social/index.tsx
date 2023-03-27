import React from 'react';
import { NavLink } from 'react-router-dom';
import rsSrc from '../../../assets/icons/rs_school.svg';
import ghSrc from '../../../assets/icons/github.svg';
import './index.scss';

const Social = () => {
  return (
    <div className="about__social">
      <NavLink
        to="https://github.com/rolling-scopes-school/tasks/tree/master/react/modules/module01"
        target="_blank"
        className="about__rs"
      >
        <img src={rsSrc} alt="rs school" />
      </NavLink>
      <NavLink
        to="https://github.com/Elijah-I?tab=repositories"
        target="_blank"
        className="about__gh"
      >
        <img src={ghSrc} alt="github Elijah-I" />
      </NavLink>
    </div>
  );
};

export default Social;
