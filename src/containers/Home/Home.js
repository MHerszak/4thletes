import React from 'react';
import config from 'config';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import * as emailActions from 'redux/modules/email';
import { Hero, NewsletterSignUp } from './../../components';
import { email } from './../../utils/validation';

const heroRightStyle = {
  maxHeight: 800
};

@connect(
  state => ({
    online: state.online
  }), emailActions
)
export default class Home extends React.Component {

  static propTypes = {
    online: React.PropTypes.bool,
    sendEmail: React.PropTypes.func
  };

  state = {
    ...heroRightStyle
  };

  componentWillMount() {
    const hero = Object.assign({}, heroRightStyle, {
      backgroundBlendMode: 'difference luminosity',
      backgroundImage: 'url("https://s3-us-west-2.amazonaws.com/sponsors4athletes/images/i-collage.jpg")',
      backgroundSize: '100%',
      backgroundPosition: '0% 0%',
    });

    this.setState({
      heroRightStyle: hero
    });
  }

  handleSubmit = (data) => {
    if (email(data.email)) {
      console.log('not an email');
      return false;
    }

    this.props.sendEmail(data);
  }

  render() {
    const styles = require('./Home.scss');

    const { online } = this.props;

    console.log(`You are online: ${online}`);

    return (
      <div className={styles.home}>
        <Helmet title="Home" />
        <section id="home">
          <div className={styles.masthead} style={this.state.heroRightStyle}>
            <Hero className={styles.jumbotron}>
              <div className={`${styles.text} ${styles.panel}`}>
                <h3 className={styles.H4}>Coming soon!</h3>
                <h1>{config.app.title}</h1>
                <p>Is here to help brands to help athletes!</p>
                <p>Sign up here so we can keep you in the loop!</p>
                <div className={styles.newsletterSignUp}>
                  <NewsletterSignUp onSubmit={this.props.sendEmail} />
                </div>
              </div>
            </Hero>
          </div>
        </section>
      </div>
    );
  }
}
