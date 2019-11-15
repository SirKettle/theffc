import { reduce, pick } from 'ramda';

import Home from './components/Routes/Home';
import Kitchens from './components/Routes/Kitchens';
import Bedroom from './components/Routes/Bedroom';
import Living from './components/Routes/Living';

export const ROUTES = {
  ROOT: { name: '__root__', path: '/', component: Home, label: 'Home', inNav: true },
  KITCHENS: { name: 'kitchens', path: '/kitchens', component: Kitchens, label: 'Kitchens', inNav: true },
  BEDROOM: { name: 'bedroom', path: '/bedroom', component: Bedroom, label: 'Bedroom', inNav: true },
  LIVING: { name: 'living', path: '/living', component: Living, label: 'Living', inNav: true },
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

export default routes;
