import React from 'react';
import { Button } from './../Helper';

export default class SignupButton extends React.Component {
  static propTypes = {
    type: React.PropTypes.string,
    handleAction: React.PropTypes.func,
    bsSize: React.PropTypes.string,
    bsStyle: React.PropTypes.string,
  }

  render() {
    const { type, handleAction, ...rest } = this.props; // eslint-disable-line no-shadow

    return (
      <Button onClick={handleAction} {...rest}>
        {type}
      </Button>
    );
  }
}
