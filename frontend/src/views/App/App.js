/**
 * App.js
 * Written by: Alex Kasemir
 */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from 'react-router-dom';

import routes from 'root/routes';
import Header from 'containers/Header';
import Footer from 'components/Footer';


const PrivateRoute = ({ isAuthenticated, ...rest }) => ( // eslint-disable-line
  isAuthenticated
    ? <Route { ...rest } />
    : (
      <Redirect
        push
        to={ {
          pathname: `/login`,
          search: `${rest.location.search}`,
          state: { redirect: rest.computedMatch.url },
        } }
      />
    )
);


/**
 * The App view wraps all other views in the React application, providing a
 * consistent look and feel across all views
 */
export class App extends PureComponent {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
            <div className="page-wrap">
              <Switch>
                {
                  routes.map((r) => {
                    const Route = r.private
                      ? PrivateRoute
                      : Route;

                    return <Route key={ r.path } { ...r } />;
                  })
                }
              </Switch>
            </div>
          <Footer />
        </div>
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
