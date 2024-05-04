/* @refresh reload */
import { render } from 'solid-js/web';
import { Route, Router } from "@solidjs/router";

import './index.css';
import { lazy } from 'solid-js';
// import { Home } from './pages/Home';

const Home = lazy(() => import('./pages/Home'));
const User = lazy(() => import('./pages/User'));
const Day = lazy(() => import('./pages/Day'));

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}


render(() => (<Router>
  <Route path="/" component={Home} />


  <Route path="/users">
    <Route path="/:id" component={User} />
    <Route path="/:id/:day" component={Day} />
  </Route>

</Router >), root!);