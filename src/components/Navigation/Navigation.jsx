import s from './Navigation.module.css';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import authSelectors from '../../redux/auth/auth-selectors';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav className={s.nav}>
      {!isLoggedIn && (
        <NavLink to="/" exact className={s.link} activeClassName={s.activeLink}>
          Home
        </NavLink>
      )}

      {isLoggedIn && (
        <NavLink
          to="/contacts"
          className={s.link}
          activeClassName={s.activeLink}
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
