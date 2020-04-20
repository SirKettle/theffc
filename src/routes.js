import { reduce, pick, propEq, prop, propOr } from 'ramda';

import Home from './components/Routes/Home';
import Kitchens from './components/Routes/Kitchens';
import Bedroom from './components/Routes/Bedroom';
import Living from './components/Routes/Living';

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
  BEDROOM: {
    name: 'bedroom',
    path: '/bedroom',
    component: Bedroom,
    label: 'Bedroom',
    inNav: true,
    title: 'Fitted wardrobes and bedroom furniture in Norwich, Norfolk',
  },
  LIVING: {
    name: 'living',
    path: '/living',
    component: Living,
    label: 'Living',
    inNav: true,
    title: 'Bookcases, Shelving and TV Media Units handmade in Norfolk',
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
