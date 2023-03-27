import classNames from 'classnames/bind';
import styles from './FollowingAccounts.module.scss';
import PropTypes from 'prop-types';
import AccountItems from './AccountItems';

const cx = classNames.bind(styles);
function FollowingAccounts({ title }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('title')}>{title}</p>
            <AccountItems />
            <AccountItems />
            <AccountItems />
            <AccountItems />
            <AccountItems />
            <AccountItems />
            <AccountItems />
            <AccountItems />
            <AccountItems />
            <AccountItems />
            <p className={cx('more-btn')}>See more</p>
        </div>
    );
}
FollowingAccounts.propTypes = {
    title: PropTypes.string.isRequired,
};
export default FollowingAccounts;
