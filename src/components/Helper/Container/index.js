import React from 'react';
import classNames from 'classnames';

export default class Container extends React.Component {

  static propTypes = {
    className: React.PropTypes.object,
    fluid: React.PropTypes.string,
    children: React.PropTypes.oneOfType([
      React.PropTypes.array,
      React.PropTypes.object
    ]),
  };

  render() {
    const { fluid, className, children } = this.props;
    const _className = classNames({
      container: !fluid,
      'container-fluid': fluid
    }, className);
    return <div className={_className}>{children}</div>;
  }
}
