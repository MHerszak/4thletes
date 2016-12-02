import React from 'react';
import { connect } from 'react-redux';
import Alert from 'react-bootstrap/lib/Alert';
import { isLoaded as isInfoLoaded, load as loadInfo } from 'redux/modules/info';
import { isLoaded as isAuthLoaded, load as loadAuth, logout } from 'redux/modules/auth';
import { Notifs, InfoBar } from 'components';
import { push } from 'react-router-redux';
import config from 'config';
import { asyncConnect } from 'redux-connect';
import { Footer, NavBarTop, Helmet } from './../../components';

@asyncConnect([{
  promise: ({ store: { dispatch, getState } }) => {
    const promises = [];

    if (!isAuthLoaded(getState())) {
      promises.push(dispatch(loadAuth()));
    }
    if (!isInfoLoaded(getState())) {
      promises.push(dispatch(loadInfo()));
    }
    return Promise.all(promises);
  }
}])
@connect(
  state => ({
    notifs: state.notifs,
    user: state.auth.user
  }),
  { logout, pushState: push })
export default class App extends React.Component {
  static propTypes = {
    children: React.PropTypes.object.isRequired,
    notifs: React.PropTypes.object,
  };

  static contextTypes = {
    store: React.PropTypes.object.isRequired,
  };

  render() {
    const { notifs, children } = this.props;
    const styles = require('./App.scss');

    return (
      <div className={styles.app}>
        <Helmet {...config.app.head} />
        <NavBarTop brandName={config.app.brand} />

        <div className={styles.appContent}>
          {notifs.global && <div className="container">
            <Notifs
              className={styles.notifs}
              namespace="global"
              NotifComponent={props => <Alert bsStyle={props.kind}>{props.message}</Alert>}
            />
          </div>}

          {children}
        </div>
        <InfoBar />

        <Footer brandName={config.app.developer} />
      </div>
    );
  }
}
