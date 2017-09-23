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

import Spinner from 'elemental/lib/components/Spinner';

import routes from 'root/routes';
import Header from 'containers/Header';
import Footer from 'components/Footer';

import userActions from 'store/user/actions';

import { getLocalStorage } from 'utils';

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
  constructor(props) {
    super(props);
    this.state = {
      tokenChecked: false,
    };
  }

  componentWillMount() {
    this.checkAuth();
  }

  checkAuth = () => {
    const { jwt, loadSession, loadToken, history } = this.props;
    const jwtToken = getLocalStorage(`jwtToken`);

    // check if jwt in session Storage but not in redux store
    if (!jwt && jwtToken) {
      loadToken()
        .then(() => {
          this.setState({ tokenChecked: true });
          loadSession();
        })
        .catch(() => {
          this.setState({ tokenChecked: true });
          history.push(`/login`);
        });
    } else {
      this.setState({ tokenChecked: true });
    }
  }

  render() {
    const { jwt } = this.props;
    const isAuthenticated = Boolean(jwt || getLocalStorage(`jwtToken`));

    const spinner = (
      <div className="center">
        <Spinner size="lg" />
      </div>
    );

    return (
      <Router>
        <div className="App">
          <Header isAuthenticated={ isAuthenticated } />
          <div className="page-wrap">
            {
              this.state.tokenChecked
                ? <Switch>
                  {
                    routes.map((r) => {
                      const RendRoute = r.private
                        ? PrivateRoute
                        : Route;

                      return <RendRoute key={ r.path } { ...r } />;
                    })
                  }
                </Switch>
                : spinner
            }
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
    jwt: PropTypes.string.isRequired,
    loadSession: PropTypes.func.isRequired,
    loadToken: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
  };
}

export default connect((state) => ({
  jwt: state.user.auth.token,
}), {
  loadSession: userActions.loadSession,
  loadToken: userActions.loadToken,
})(App);
