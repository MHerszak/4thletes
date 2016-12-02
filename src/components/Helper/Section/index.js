import React from 'react';
import classNames from 'classnames';

export default class Section extends React.Component {

  static propTypes = {
    heading: React.PropTypes.node,
    className: React.PropTypes.object,
    children: React.PropTypes.oneOfType([
      React.PropTypes.array,
      React.PropTypes.object
    ]),
  };

  render() {
    const { className, heading, children } = this.props;
    const syltes = require('./Section.scss');
    const _className = classNames(syltes['base2ind-section'], className);
    return (
      <div className={_className}>
        <div className="container">
          { heading ? <h2>{ heading }</h2> : null }
          { children }
        </div>
      </div>
    );
  }
}
