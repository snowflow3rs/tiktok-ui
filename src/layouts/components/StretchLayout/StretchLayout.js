import styles from './StretchLayout.module.scss';
import classNames from 'classnames/bind';
import Header from '~/layouts/components/Header';
import SideBar from '~/layouts/components/Sidebar';
import { useContext } from 'react';
import { ModalContext } from '~/hooks';
import ModalForm from '~/components/ModalForm';

const cx = classNames.bind(styles);
function StretchLayout({ children }) {
    const context = useContext(ModalContext);
    return (
        <div className={cx('wrapper')}>
            <Header stretch />
            <div className={cx('container')}>
                <div className={cx('aside')}>
                    <SideBar shrink />
                </div>

                <div className={cx('contents')}>{children}</div>
            </div>
            {context.show && <ModalForm onHide={context.handleHideModal} />}
        </div>
    );
}

export default StretchLayout;
