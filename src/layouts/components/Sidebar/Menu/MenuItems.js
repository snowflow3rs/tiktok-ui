import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import styles from './Menu.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function MenuItems({ title, to, icon, activeIcon }) {
    return (
        <NavLink className={(nav) => cx('menu-items', { active: nav.isActive })} to={to}>
            <span className={cx('icon')}> {icon}</span>
            <span className={cx('active-icon')}> {activeIcon}</span>

            <span className={cx('title')}>{title}</span>
        </NavLink>
    );
}

MenuItems.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,

    activeIcon: PropTypes.node.isRequired,
};
export default MenuItems;
