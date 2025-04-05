import { reduce, pick, propEq, prop, propOr } from 'ramda';

import Home from './components/Routes/Home';
import Kitchens from './components/Routes/Kitchens';

export const ROUTES = {
  ROOT: {
    name: '__root__',
    path: '/',
    component: Home,
    label: 'Home',
    inNav: true,
    title: 'Handmade kitchens, fitted wardrobes and bespoke fitted furniture in Norwich',
  },
  KITCHENS: {
    name: 'kitchens',
    path: '/kitchens',
    component: Kitchens,
    label: 'Kitchens',
    inNav: true,
    title: 'Bespoke kitchens made in Norwich, Norfolk',
  },
};

const composeLink = route => pick(['name', 'label'], route);
const composeRouteDefinition = route => pick(['name', 'path'], route);

export const components = reduce(
  (acc, route) => ({
    ...acc,
    [route.name]: route.component,
  }),
  {},
  Object.values(ROUTES),
);

const routes = Object.values(ROUTES).map(composeRouteDefinition);

export const navItemLinks = Object.values(ROUTES)
  .filter(route => route.inNav === true)
  .map(composeLink);

export const getRouteByName = name => Object.values(ROUTES).find(propEq('name', name));

export const getRouteTitle = routerRoute => propOr('', 'title')(getRouteByName(prop('name')(routerRoute)));

export default routes;
