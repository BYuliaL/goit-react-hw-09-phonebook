import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: 'white',
  },
  activeLink: {
    color: '#0275d8',
    fontSize: 'large',
  },
};

export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);
  return (
    <nav>
      <NavLink to="/" exact style={styles.link} activeStyle={styles.activeLink}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          to="/contacts"
          exact
          style={styles.link}
          activeStyle={styles.activeLink}
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
}

// const mapStateToProps = state => ({
//   isAuthenticated: authSelectors.getIsAuthenticated(state),
// });

// export default connect(mapStateToProps)(Navigation);
