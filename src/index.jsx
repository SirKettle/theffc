import React from 'react';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router5';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import App from './components/App';
import theme from './domains/theme';
import configureStore from './store/configureStore';
import createRouter from './utils/createRouter';

import routes from './routes';

const router = createRouter(routes, {
  strictQueryParams: false,
});
const store = configureStore(router);
const wrappedApp = (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </ThemeProvider>
  </Provider>
);

router.start((/* err, state */) => {
  ReactDOM.render(wrappedApp, document.getElementById('app'));
  // document.body.style.backgroundImage = `url(${wallpaper})`;
});
