import Button from '~/components/Button';
import classNames from 'classnames/bind';
import styles from './MenuSet.module.scss';
const cx = classNames.bind(styles);

function MenuItems({ data, onClick }) {
    const cn = cx('menu-items', { separate: data.separate });
    return (
        <Button className={cn} leftIcon={data.icon} to={data.to} onClick={onClick}>
            {data.title}
        </Button>
    );
}

export default MenuItems;
