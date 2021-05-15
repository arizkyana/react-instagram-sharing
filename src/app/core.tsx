import React, { Suspense } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import PageNotFound from '../layouts/not-found';

/**
 * routes configuration
 */

const routes: { component: string, path: string }[] = [
  { component: 'account', path: '/account' },
  { component: 'dashboard', path: '/dashboard' },
  { component: 'index', path: '/' },
  // {
  //   component: 'tickets/[id]/detail/[slug]/driver.tsx',
  //   path: '/tickets/:id/detail/:slug/driver'
  // },
  // {
  //   component: 'tickets/[id]/detail/[slug]/index.tsx',
  //   path: '/tickets/:id/detail/:slug'
  // },
  // {
  //   component: 'tickets/[id]/detail/[slug]/passanger.tsx',
  //   path: '/tickets/:id/detail/:slug/passanger'
  // },
  {
    component: 'tickets/[id]/index.tsx',
    path: '/tickets/:id'
  }
];

function Core() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          {
            routes.map((route) => {
              const child = import(`../pages/${route.component}`);
              return (
                <Route exact path={route.path} component={React.lazy(() => child)} />
              )
            })
          }
          <Route component={PageNotFound} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default Core;
