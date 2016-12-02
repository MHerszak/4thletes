import React from 'react';
import classNames from 'classnames';
import Container from './../Container';

export default class Hero extends React.Component {

  static propTypes = {
    backgroundImage: React.PropTypes.string,
    className: React.PropTypes.string,
    children: React.PropTypes.oneOfType([
      React.PropTypes.array,
      React.PropTypes.object
    ]),
    style: React.PropTypes.object
  };

  render() {
    const _style = this.props.style ? this.props.style : {};
    if (this.props.backgroundImage) {
      _style.backgroundImage = `url(${this.props.backgroundImage})`;
    }
    const _className = classNames('jumbotron', this.props.className);
    return (
      <div {...this.props} className={_className} style={_style}>
        <Container>
          { this.props.children }
        </Container>
      </div>
    );
  }
}
