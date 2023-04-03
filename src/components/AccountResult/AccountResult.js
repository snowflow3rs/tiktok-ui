import classNames from 'classnames/bind';
import styles from './AccountResult.module.scss';
import { Link } from 'react-router-dom';
import Img from '~/components/Image/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import images from '~/assets/images';
const cx = classNames.bind(styles);
function AccountResult({ data }) {
    return (
        <Link className={cx('result-item')} to={`/@${data?.nickname}`} state={data}>
            <Img className={cx('avatar')} src={data.avatar} alt={images.errImg} />
            <div className={cx('body')}>
                <h3 className={cx('username')}>
                    <span className={cx('name')}>{data.nickname}</span>
                    {data.tick && <FontAwesomeIcon icon={faCheckCircle} className={cx('icon')} />}
                </h3>
                <p className={cx('info')}>
                    <span className={cx('infor-name')}>{data.full_name || `${data.first_name} ${data.last_name}`}</span>
                    {' · '}
                    <strong className={cx('count-follower')}>{data.followers_count}</strong> Follower
                </p>
                <p className={cx('bio')}>{data.bio}</p>
            </div>
        </Link>
    );
}

export default AccountResult;
