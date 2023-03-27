import { useEffect, useState } from 'react';

import classNames from 'classnames/bind';
import styles from './Main.module.scss';
import Video from './Video/Video';
import * as videoServices from '~/services/videosServices';

const cx = classNames.bind(styles);

function Main() {
    const [videos, setVideos] = useState([]);
    const [page, setPage] = useState(1);
    useEffect(() => {
        const fetchVideos = async () => {
            const result = await videoServices.loadVideos('for-you', page);

            setVideos([...videos, ...result.data]);
        };
        fetchVideos();
    }, [page]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    function handleScroll() {
        if (window.scrollY + window.innerHeight >= document.body.offsetHeight) {
            setPage((page) => page + 1);
        }
    }

    return (
        <div className={cx('wrapper')}>
            {videos.map((result, index) => (
                <Video key={index} data={result} />
            ))}
        </div>
    );
}

export default Main;
