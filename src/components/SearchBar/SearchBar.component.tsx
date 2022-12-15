import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';
import { SearchItemComponent } from '../SearchItem/SearchItem.component';

import { loadCitiesBySearch } from '../../store/reducer/cities/cities-action';
import { setSearch } from '../../store/reducer/controls/controls-action';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import styles from './SearchBar.module.css';
import { loadWeatherItem } from '../../store/reducer/weather/weather-action';

export const SearchBarComponent: FC = () => {
  const { search } = useTypedSelector((state) => state.controls);
  const { cities, status } = useTypedSelector((state) => state.cities);
  const { selectableCityInfo } = useTypedSelector((state) => state.cities);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(loadCitiesBySearch(search));
  }, [dispatch, search]);

  useEffect(() => {
    const { latitude, longitude } = selectableCityInfo;
    if (latitude || longitude) {
      dispatch(loadWeatherItem());
    }
  }, [selectableCityInfo, dispatch]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearch(e.target.value));
  };
  return (
    <>
      <input
        className={styles.input}
        value={search}
        placeholder={'Search...'}
        onChange={handleSearch}
      ></input>
      {status === 'loaded' && cities?.length && (
        <ul className={styles.ul}>
          {cities?.map((city) => (
            <SearchItemComponent
              name={city.name}
              id={city.id}
              key={city.id}
              latitude={city.latitude}
              longitude={city.longitude}
              timezone={city.timezone}
            />
          ))}
        </ul>
      )}
    </>
  );
};
