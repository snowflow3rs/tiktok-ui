import classNames from 'classnames/bind';
import styles from './PreviewAccounts.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button';
import Img from '~/components/Image/Image';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function PreviewAccounts({ data }) {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('head')}>
                <Img className={cx('avatar')} src={data.avatar} alt={images.errImg} />
                <Button className={cx('btn')} primary>
                    Follow
                </Button>
            </header>
            <div className={cx('body')}>
                <p className={cx('infor')}>
                    <strong className={cx('nickname')}>{data.nickname}</strong>
                    {data.tick && <FontAwesomeIcon icon={faCheckCircle} className={cx('icon')} />}
                </p>
                <p className={cx('name')}>
                    {data.first_name} {data.last_name}
                </p>
                <p className={cx('stat')}>
                    <span className={cx('value')}> {data.followers_count}</span>
                    <span className={cx('label')}>Followers</span>
                    <span className={cx('value')}>{data.likes_count}</span>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default PreviewAccounts;
