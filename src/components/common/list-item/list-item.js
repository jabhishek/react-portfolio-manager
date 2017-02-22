import React, {PropTypes} from 'react';
import classnames from 'classnames';
import styles from './list-item.less';

const ListItem = ({children, className, onClick}) => {
  const itemClass = classnames(styles.listItem, className || '');
  return (
    <li className={ itemClass } onClick={onClick}>
      { children }
    </li>
  );
};
ListItem.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string
};
export default ListItem;
