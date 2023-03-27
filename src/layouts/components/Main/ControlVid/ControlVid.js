import { useState, useEffect } from 'react';
import { faFontAwesome, faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { MuteIcon, SoundIcon } from '~/components/Icons';
import styles from './ControlVid.module.scss';
import useElementOnScreen from '~/hooks/IntersectionObserver';

const cx = classNames.bind(styles);

function ControlVid({ vidRef, data }) {
    const [playing, setPlaying] = useState(false);
    const [muted, setMuted] = useState(false);
    const [volume, setVolume] = useState(1);
    //handle scroll play video
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
    };
    const isVisibile = useElementOnScreen(options, vidRef);

    useEffect(() => {
        if (isVisibile) {
            if (!playing) {
                vidRef.current.play();
                setPlaying(true);
            }
        } else {
            if (playing) {
                vidRef.current.pause();
                setPlaying(false);
            }
        }
    }, [isVisibile]);

    //handle toggle play pause video
    const playVideo = () => {
        if (playing === false) {
            vidRef.current.play();
            setPlaying(true);
        }
    };

    const pauseVideo = () => {
        if (playing === true) {
            vidRef.current.pause();
            setPlaying(false);
        }
    };

    const togglePlayVideo = () => {
        if (playing === false) {
            playVideo();
        } else {
            pauseVideo();
        }
    };

    // handle mute
    const handleMute = () => {
        if (muted) {
            vidRef.current.muted = false;
        } else {
            vidRef.current.muted = true;
        }
        setMuted(!muted);
    };

    const handleVolumeChange = (e) => {
        const newVolume = e.target.value;
        setVolume(newVolume);
        vidRef.current.volume = newVolume;
    };
    return (
        <div className={cx('wrapper')}>
            <div onClick={togglePlayVideo}>
                {!playing ? (
                    <span className={cx('play')}>
                        <FontAwesomeIcon icon={faPlay} />
                    </span>
                ) : (
                    <span className={cx('pause')}>
                        <FontAwesomeIcon icon={faPause} />
                    </span>
                )}
            </div>

            <span className={cx('report')}>
                <FontAwesomeIcon icon={faFontAwesome} className={cx('ri')} />
                <span className={cx('rp')}>Report</span>
            </span>

            <div className={cx('speaker')}>
                <span className={cx('sound')} onClick={handleMute}>
                    {!muted ? <SoundIcon /> : <MuteIcon />}
                </span>

                <div className={cx('volume')}>
                    <input
                        className={cx('range')}
                        type="range"
                        min="0"
                        max="1"
                        step="0.1"
                        value={volume}
                        onChange={handleVolumeChange}
                    />
                </div>
            </div>
        </div>
    );
}

export default ControlVid;
