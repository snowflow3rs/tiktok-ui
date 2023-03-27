import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import PropTypes from 'prop-types';
import Img from '~/components/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function AccountItem({ data }) {
    return (
        <Link to={`@${data.nickname}`} state={data} className={cx('wrapper')}>
            <Img src={data.avatar} alt={data.avatar} className={cx('avatar')} />
            <div className={cx('info')}>
                <h4 className={cx('tagname')}>
                    <span>{data.nickname}</span>
                    {data.tick && <FontAwesomeIcon icon={faCheckCircle} className={cx('icon')} />}
                </h4>

                <span className={cx('username')}>{data.full_name}</span>
            </div>
        </Link>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};
export default AccountItem;
