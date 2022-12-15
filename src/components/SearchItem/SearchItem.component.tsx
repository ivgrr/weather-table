import React, { FC } from 'react';
import { setSelectableCityInfo } from '../../store/reducer/cities/cities-action';
import { CityInterface } from '../../models/CityInterface';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';
import styles from './SearchItem.module.css';
import { clearControls } from '../../store/reducer/controls/controls-action';

export const SearchItemComponent: FC<CityInterface> = ({ name, latitude, longitude, timezone }) => {
  const dispatch = useDispatch<AppDispatch>();
  const handleSetCity: React.MouseEventHandler<HTMLAnchorElement> = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(
      setSelectableCityInfo({
        name,
        latitude,
        longitude,
      }),
    );
    dispatch(clearControls());
  };

  return (
    <li className={styles.li}>
      <a
        className={styles.link}
        onClick={handleSetCity}
      >{`${name} ${latitude} ${latitude} ${timezone}`}</a>
    </li>
  );
};
