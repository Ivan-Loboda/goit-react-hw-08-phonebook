import s from './AppBar.module.css';
import Navigation from '../../components/Navigation';
import AuthNav from '../../components/AuthNav';
import UserMenu from '../../components/UserMenu';
import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';

const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <header className={s.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
