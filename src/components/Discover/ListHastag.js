import classNames from 'classnames/bind';
import styles from './Discover.module.scss';

const cx = classNames.bind(styles);
function ListHastag({ icon, tagName }) {
    return (
        <div className={cx('wrap-list')}>
            <p className={cx('content')}>
                <span className={cx('icon')}>{icon}</span>

                <span className={cx('tag-name')}>{tagName}</span>
            </p>
        </div>
    );
}
export default ListHastag;
