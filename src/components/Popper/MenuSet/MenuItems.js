import Button from '~/components/Button';
import classNames from 'classnames/bind';
import styles from './MenuSet.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function MenuItems({ data, onClick }) {
    const cn = cx('menu-items', { separate: data.separate });
    return (
        <Button className={cn} leftIcon={data.icon} to={data.to} onClick={onClick}>
            {data.title} {data.theme}
        </Button>
    );
}

MenuItems.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};

export default MenuItems;
