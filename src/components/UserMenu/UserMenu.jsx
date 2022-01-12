import { useDispatch, useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import { logOutUser } from '../../redux/auth/auth-operations';
import defaultImg from '../../helpers/default-img.jpg';
import s from './UserMenu.module.css';

function UserMenu() {
  const dispatch = useDispatch();
  const userName = useSelector(authSelectors.getUsername);

  return (
    <div className={s.container}>
      <img src={defaultImg} alt="" width="60" className={s.avatar} />
      <span className={s.name}>Welcome, {userName}</span>
      <button
        type="button"
        className={s.button}
        onClick={() => dispatch(logOutUser())}
      >
        Log out
      </button>
    </div>
  );
}

export default UserMenu;
