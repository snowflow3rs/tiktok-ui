import classNames from 'classnames/bind';
import styles from './VideoProfile.module.scss';

import { useRef } from 'react';
import { PlayProfile } from '~/components/Icons';
const cx = classNames.bind(styles);
function VideoProfile({ data }) {
    const vidRef = useRef();

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('wrap-vid')}>
                    <div className={cx('video-container')} onMouseEnter={() => vidRef.current.play()}>
                        <div className={cx('video-inner')}>
                            <div className={cx('image')}>
                                <img src={data.thumb_url} alt="" />
                            </div>
                            <div className={cx('video')}>
                                <video muted ref={vidRef} src={data.file_url} />
                            </div>
                            <div className={cx('views')}>
                                <PlayProfile />
                                <strong className={cx('count')}>{data.views_count}</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('des')}>{data.description}</div>
        </div>
    );
}

export default VideoProfile;
