import React, { FC } from 'react';
import styles from './Welcome.module.css';
import { Link } from 'react-router-dom';
import { RouteNames } from '../../router';

export const WelcomeComponent: FC = () => {
  return (
    <main className={styles.h100}>
      <section className={styles.section}>
        <h2 className={styles.h2}>Welcome!</h2>
        <h3 className={styles.h3}>
          This is weather table created with weather api and countries api
        </h3>
        <Link className={styles.link} to={RouteNames.WEATHER}>
          Go to app
        </Link>
      </section>
    </main>
  );
};
