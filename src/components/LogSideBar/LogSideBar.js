import styles from './LogSideBar.module.module.scss';
import classNames from 'classnames/bind';
import Button from '../Button';
import { useContext } from 'react';
import { ModalContext } from '~/hooks';
const cx = classNames.bind(styles);

function LogSideBar({ title }) {
    const context = useContext(ModalContext);
    return (
        <div className={cx('wrapper')}>
            <p className={cx('title')}>{title}</p>
            <Button onClick={context.handleShowModal} outline className={cx('btn')}>
                Log in
            </Button>
        </div>
    );
}

export default LogSideBar;
