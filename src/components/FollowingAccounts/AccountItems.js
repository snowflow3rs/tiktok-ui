import classNames from 'classnames/bind';
import styles from './FollowingAccounts.module.scss';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function AccountItems() {
    return (
        <div className={cx('account-items')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/a187c4dfa896a5ea449a4c5d3927b20a~c5_100x100.jpeg?x-expires=1677661200&x-signature=Lq4M8aTm0nZKfxnVaRQgnkGCfOs%3D"
                alt="User"
            />

            <div className={cx('infor')}>
                <p className={cx('nickname')}>
                    <span>mixigaming</span>
                    <FontAwesomeIcon icon={faCheckCircle} className={cx('icon')} />
                </p>

                <p className={cx('name')}>Độ Phùng</p>
            </div>
        </div>
    );
}

AccountItems.propTypes = {};
export default AccountItems;
