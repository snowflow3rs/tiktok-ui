import classNames from 'classnames/bind';
import Header from '~/layouts/components/Header';
import Sidebar from '~/layouts/components/Sidebar';
import styles from './DefaultLayout.module.scss';
import PropTypes from 'prop-types';
import ModalForm from '~/components/ModalForm';
import { useContext } from 'react';
import { ModalContext } from '~/hooks';

const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
    const context = useContext(ModalContext);
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />

                <div className={cx('content')}>{children}</div>
            </div>
            {context.show && <ModalForm onHide={context.handleHideModal} />}
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};
export default DefaultLayout;
