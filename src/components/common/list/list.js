import React, {PropTypes} from 'react';
import classnames from 'classnames';
import styles from './list.less';

const List = ({children, className}) => {
  const headerClass = classnames(styles.list, className || '');
  return (
    <ul className={ headerClass }>
      { children }
    </ul>
  );
};
List.propTypes = {
  children: PropTypes.array,
  className: PropTypes.string
};
export default List;
