import React from 'react';
import { connect } from 'react-redux';

@connect(
  (state, props) => ({ notifs: state.notifs[props.namespace] || [] }),
  {}
)
export default class Notifs extends React.Component {
  static propTypes = {
    notifs: React.PropTypes.array.isRequired,
    NotifComponent: React.PropTypes.func.isRequired,
    className: React.PropTypes.string
  };

  shouldComponentUpdate(nextProps) {
    return this.props.notifs.length !== nextProps.notifs.length;
  }

  notification = (notif) => {
    const { NotifComponent } = this.props;
    return (
      <NotifComponent key={notif.id} message={notif.message} kind={notif.kind} />
    );
  }

  render() {
    const { notifs, className } = this.props;
    if (notifs.length === 0) {
      return null;
    }

    return (
      <div className={`notif-container ${className}`}>
        {notifs.map(this.notification)}
      </div>
    );
  }
}
