import React, { FC, useEffect } from 'react';
import { publicRoutes } from '../../router';
import { Route, Routes, useNavigate } from 'react-router-dom';

export const AppRouterComponent: FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const visited = localStorage.getItem('visited');
    if (visited !== 'true') {
      return navigate('/welcome');
    }
    localStorage.setItem('visited', 'true');
  }, []);

  return (
    <Routes>
      {publicRoutes.map((route) => (
        <Route path={route.path} element={<route.element />} key={route.path}></Route>
      ))}
    </Routes>
  );
};
