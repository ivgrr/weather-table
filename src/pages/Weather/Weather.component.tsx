import React, { FC } from 'react';
import styles from './Weather.module.css';

import { WeatherItemComponent } from '../../components/WeatherItem/WeatherItem.component';
import { NavbarComponent } from '../../components/Navbar/Navbar.component';
import { useTypedSelector } from '../../hooks/useTypedSelector';

export const WeatherComponent: FC = () => {
  const { weatherItems } = useTypedSelector((state) => state.weather);
  const { error } = useTypedSelector((state) => state.cities);
  return (
    <main className={styles.main}>
      <NavbarComponent />
      {!error && (
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.th}>City</th>
              <th className={styles.th}>MinTemp</th>
              <th className={styles.th}>MaxTemp</th>
            </tr>
          </thead>
          <tbody>
            {weatherItems.map((city) => (
              <WeatherItemComponent key={city.id} name={city.name} temperature={city.temperature} />
            ))}
          </tbody>
        </table>
      )}
      {error && <p className={styles.error}>Error!</p>}
    </main>
  );
};
