import React from 'react';
import { icons } from './icons';

/**
 * @summary Take an icon name (such as "open") and return the HTML code to display the icon
 * @param {string} iconName - the name of the icon
 * @param {string} [iconClass] - an optional class to assign to the icon
 */
export default class Icon extends React.Component {

  static propTypes = {
    iconClass: React.PropTypes.string,
    name: React.PropTypes.string
  };

  displayName = 'Icon';

  render() {
    let { iconClass } = this.props;
    const { name } = this.props;
    const iconCode = icons[name] ? icons[name] : name;
    iconClass = (typeof iconClass === 'string') ? ` ${iconClass}` : '';
    const c = `icon fa fa-fw fa-${iconCode} icon-${name} ${iconClass}`;
    return <i className={c} aria-hidden="true"></i>;
  }
}
