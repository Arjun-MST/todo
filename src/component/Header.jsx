import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={styles.header}>
      <nav style={styles.nav}>
        <Link to ="/" >home</Link>
        <Link to="/people" style={styles.link}>People</Link>
      </nav>
    </header>
  );
}
const styles = {
  header: {
    padding: '10px 20px',
    backgroundColor: '#282c34',
  },
  nav: {
    display: 'flex',
    gap: '15px',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
};

export default Header;
