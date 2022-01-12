import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <div>
      <NavLink
        to="/users/signup"
        exact
        className={s.link}
        activeClassName={s.activeLink}
      >
        Sign up
      </NavLink>
      <NavLink
        to="/users/login"
        exact
        className={s.link}
        activeClassName={s.activeLink}
      >
        Log in
      </NavLink>
    </div>
  );
};

export default AuthNav;
