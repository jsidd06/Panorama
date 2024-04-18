import * as ROUTES from '@/container';

export const routes = [
  {
    id: Math.random(),
    name: 'HomeScreen',
    component: ROUTES.HomeScreen,
  },
  {
    id: Math.random(),
    name: 'WeatherScreen',
    component: ROUTES.WeatherScreen,
  },
  {
    id: Math.random(),
    name: 'OnBoardingScreen',
    component: ROUTES.OnBoardingScreen,
  },
  {
    id: Math.random(),
    name: 'DogsScreen',
    component: ROUTES.DogsScreen,
  },
  {
    id: Math.random(),
    name: 'BabyNamesScreen',
    component: ROUTES.BabyNamesScreen,
  },
];