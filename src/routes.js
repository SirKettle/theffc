
import { reduce, pick } from 'ramda';

import Home from './components/Routes/Home';
import About from './components/Routes/About';
import Services from './components/Routes/Services';
import Testimonials from './components/Routes/Testimonials';

export const ROUTES = {
  ROOT: { name: '__root__', path: '/', component: Home, label: 'Home', inNav: true },
  ABOUT: { name: 'about', path: '/about', component: About, label: 'About', inNav: true },
  SERVICES: { name: 'services', path: '/services', component: Services, label: 'Services', inNav: true },
  TESTIMONIALS: { name: 'testimonials', path: '/testimonials', component: Testimonials, label: 'Testimonials', inNav: true }
};

const composeLink = route => pick(['name', 'label'], route);
const composeRouteDefinition = route => pick(['name', 'path'], route);

export const components = reduce((acc, route) => ({
  ...acc,
  [route.name]: route.component
}), {}, Object.values(ROUTES));

const routes = Object.values(ROUTES)
  .map(composeRouteDefinition);

export const navItemLinks = Object.values(ROUTES)
  .filter(route => route.inNav === true)
  .map(composeLink);

export default routes;
