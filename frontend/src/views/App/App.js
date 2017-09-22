/**
 * App.js
 * Written by: Connor Taylor
 */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import {
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';

import { Helmet } from 'react-helmet';

import AppWrap from 'pantheon-client/lib/components/AppWrap';
import PageWrap from 'pantheon-client/lib/components/PageWrap';
import EventRoute from 'pantheon-client/lib/components/EventRoute';

import requiresAuth from 'pantheon-client/lib/hocs/requiresAuth';

import routes from 'root/routes';

// Uncomment the section below for performance testing
// import Perf from 'react-addons-perf';

// Perf.start();

// setTimeout(() => {
//   Perf.stop();
//   Perf.printWasted();
// }, 5000);

const PrivateRoute = requiresAuth(EventRoute);

/**
 * The App view wraps all other views in the React application, providing a
 * consistent look and feel across all views
 */
export class App extends PureComponent {
  render() {
    return (
      <Router>
        <AppWrap>
          <Helmet>
            <title>
              Your App
            </title>
          </Helmet>
          <PageWrap>
            <Switch>
              {
                routes.map((r) => {
                  const Route = r.private
                    ? PrivateRoute
                    : EventRoute;

                  return <Route key={ r.path } { ...r } />;
                })
              }
            </Switch>
          </PageWrap>
        </AppWrap>
      </Router>
    );
  }
}

if (process.env.NODE_ENV !== `production`) {
  const PropTypes = require(`prop-types`); // eslint-disable-line
  App.propTypes = {

  };
}

export default connect(() => ({}), {

})(App);
