import React, { FC } from 'react';
import styles from './WeatherItem.module.css';

export const WeatherItemComponent: FC<{ name: string; temperature: number[] }> = ({
  name,
  temperature,
}) => {
  return (
    <tr>
      <td className={styles.td}>{name}</td>
      <td className={styles.td}>{Math.min(...temperature)}</td>
      <td className={styles.td}>{Math.max(...temperature)}</td>
    </tr>
  );
};
