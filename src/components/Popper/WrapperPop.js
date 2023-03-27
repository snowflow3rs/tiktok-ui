import styles from './Popper.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function WrapperPop({ children, className }) {
    return <div className={cx('wrapper', className)}>{children}</div>;
}

WrapperPop.propTypes = {
    children: PropTypes.node.isRequired,
    classNames: PropTypes.string,
};
export default WrapperPop;
