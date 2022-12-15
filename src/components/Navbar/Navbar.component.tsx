import React, { FC } from 'react';
import styles from './Navbar.module.css';
import { SearchBarComponent } from '../SearchBar/SearchBar.component';

export const NavbarComponent: FC = () => {
  return (
    <section className={styles.navbar}>
      <SearchBarComponent />
    </section>
  );
};
