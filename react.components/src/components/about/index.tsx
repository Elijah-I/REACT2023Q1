import React from 'react';
import { NavLink } from 'react-router-dom';
import avatarSrc from './../../assets/img/avatar.jpg';
import rsSrc from '../../assets/icons/rs_school.svg';
import ghSrc from '../../assets/icons/github.svg';
import './index.scss';

class About extends React.PureComponent {
  render() {
    return (
      <>
        <div className="about__author">
          <div className="about__img">
            <img src={avatarSrc} alt="author" />
          </div>
          <div className="about__info">
            <div className="about__title">Elijah Ivanik</div>
            <div className="about__description">
              Been working in IT since I was 19 (over 17 years for now). I started as frontend, but
              the more people were leaving my company the more duty I received. So by the time I got
              experience in UI/UX, design (photoshop), backend (PHP), databases (MySQL), devops
              (FreeBSD, UNIX: Apache, Nginx configuration, websocket PHP server configuration etc.).
              So for now I have a wide IT experience and know well how the data-flow circulates over
              application. There were only 1 downside of my work - my CEO, since he was very against
              of using any libraries or frameworks. So I don`t know any. That is why I`m here: to
              catch up with modern stack of technologies!
            </div>
          </div>
        </div>

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
      </>
    );
  }
}

export default About;
