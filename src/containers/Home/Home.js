import React from 'react';
import config from 'config';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import app from 'app';
import { Hero, NewsletterSignUp } from './../../components';
import { email } from './../../utils/validation';

const heroRightStyle = {
  maxHeight: 800
};

@connect(
  state => ({
    online: state.online
  })
)
export default class Home extends React.Component {

  static propTypes = {
    online: React.PropTypes.bool
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
    console.log(data);
    if (email(data.email)) {
      console.log('not an email');
      return false;
    }

    const campaignsService = app.service('campaigns');

    const campaignsData = data;

    campaignsService.create(campaignsData)
      .then(() => console.log('has been send'))
      .catch(error => console.log('error', error.message));
  }

  render() {
    const styles = require('./Home.scss');

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
                  <NewsletterSignUp onSubmit={this.handleSubmit} />
                </div>
              </div>
            </Hero>
          </div>
        </section>
      </div>
    );
  }
}
