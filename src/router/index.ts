import React from 'react';
import { WelcomeComponent } from '../pages/Welcome/Welcome.component';
import { WeatherComponent } from '../pages/Weather/Weather.component';

export interface IRoute {
  path: string;
  element: React.ComponentType;
  replace?: boolean;
}

export enum RouteNames {
  WELCOME = '/welcome',
  WEATHER = '/weather',
  NOT_FOUND = '*',
}

export const publicRoutes: IRoute[] = [
  {
    path: RouteNames.WELCOME,
    element: WelcomeComponent,
  },
  {
    path: RouteNames.WEATHER,
    element: WeatherComponent,
  },
  {
    path: RouteNames.NOT_FOUND,
    element: WelcomeComponent,
  },
];
