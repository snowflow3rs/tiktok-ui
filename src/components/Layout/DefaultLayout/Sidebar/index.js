import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function Siderbar() {
    return (
        <div className={cx('wrapper')}>
            <h2>Side bar</h2>
        </div>
    );
}
export default Siderbar;
