import classNames from 'classnames/bind';
import styles from './Discover.module.scss';
import PropTypes from 'prop-types';
import ListHastag from './ListHastag';
import { HashTagIcon, TagMusicIcon } from '../Icons';
const cx = classNames.bind(styles);

function Discover({ title }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('title')}>{title}</p>

            <div className={cx('list-content')}>
                <ListHastag tagName="tiktokshop" icon={<HashTagIcon />} />
                <ListHastag tagName="dance" icon={<TagMusicIcon />} />
                <ListHastag tagName="anime" icon={<HashTagIcon />} />
                <ListHastag tagName="capcut" icon={<TagMusicIcon />} />
                <ListHastag tagName="bts" icon={<TagMusicIcon />} />
                <ListHastag tagName="trending" icon={<HashTagIcon />} />
                <ListHastag tagName="fyp" icon={<HashTagIcon />} />
            </div>
        </div>
    );
}

Discover.propTypes = {
    title: PropTypes.string.isRequired,
};
export default Discover;
