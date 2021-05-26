import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import defaultAvatar from './avatardefault.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
    color: '#fff',
  },
};

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  const onLogout = useCallback(
    () => dispatch(authOperations.logOut()),
    [dispatch],
  );

  return (
    <div style={styles.container}>
      <img src={defaultAvatar} alt="" width="32" style={styles.avatar} />
      <span style={styles.name}>Welcome, {name}</span>
      <Button type="button" onClick={onLogout}>
        Logout
      </Button>
    </div>
  );
}

// const mapStateToProps = state => ({
//   name: authSelectors.getUsername(state),
//   avatar: defaultAvatar,
// });

// const mapDispatchToProps = {
//   onLogout: authOperations.logOut,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
