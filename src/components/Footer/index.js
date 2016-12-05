import React from 'react';

export default class Footer extends React.Component {

  static propTypes = {
    brandName: React.PropTypes.string.isRequired
  };

  render() {
    const { brandName } = this.props;
    return (
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center">
              <div className="footer-bottom">
                {/*
                <ul className="list-inline">
                  <li>
                    <IndexLink to="/">
                      Home
                    </IndexLink>
                  </li>
                  <li>
                    <Link to="/chat">
                      Chat
                    </Link>
                  </li>
                </ul>
                */}
                <span>{'© Copyright 2016. Designed by '}
                  <a href="http://www.base2industries.com">
                    {brandName}
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
