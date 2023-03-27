import classNames from 'classnames/bind';
import styles from './Video.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faHeart } from '@fortawesome/free-solid-svg-icons';
import { useRef, useEffect } from 'react';
import { TagMusicIcon } from '~/components/Icons';
import { BsFillChatDotsFill } from 'react-icons/bs';
import { RiShareForwardFill } from 'react-icons/ri';
import ControlVid from '../ControlVid/ControlVid';
import images from '~/assets/images';
import Img from '~/components/Image/Image';
import ShareVideos from '~/components/ShareVideos';
import Tippy from '@tippyjs/react/headless';
import { WrapperPop as PopperWrapper } from '~/components/Popper';
import Button from '~/components/Button';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ModalContext } from '~/hooks';
const cx = classNames.bind(styles);

function Video({ data }) {
    const vidRef = useRef();
    const context = useContext(ModalContext);

    useEffect(() => {
        const video = vidRef.current;

        video.muted = false;
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('infor')}>
                <div>
                    <Tippy
                        delay={[600, 600]}
                        interactive
                        offset={[270, 6]}
                        placement="top-end"
                        render={(attrs) => (
                            <div className={cx('preview-user')} tabIndex="-1" {...attrs}>
                                <PopperWrapper className={cx('wrapper-popper')}>
                                    <div className={cx('wrapper-prev')}>
                                        <Link
                                            to={`/@${data.user.nickname}`}
                                            state={data.user}
                                            className={cx('head-prev')}
                                        >
                                            <Img
                                                className={cx('avatar-prev')}
                                                src={data.user.avatar}
                                                alt={images.errImg}
                                            />
                                            <Button className={cx('btn-prev')} outline>
                                                Follow
                                            </Button>
                                        </Link>
                                        <div className={cx('body-prev')}>
                                            <p className={cx('infor-prev')}>
                                                <strong className={cx('nickname-prev')}>{data.user.nickname}</strong>
                                                {data.tick && (
                                                    <FontAwesomeIcon icon={faCheckCircle} className={cx('icon')} />
                                                )}
                                            </p>
                                            <p className={cx('name-prev')}>
                                                {data.user.first_name} {data.user.last_name}
                                            </p>
                                            <p className={cx('stat-prev')}>
                                                <span className={cx('value-prev')}> {data.user.followers_count}</span>
                                                <span className={cx('label-prev')}>Followers</span>
                                                <span className={cx('value-prev')}>{data.user.likes_count}</span>
                                                <span className={cx('label-prev')}>Likes</span>
                                            </p>
                                            <p className={cx('bio-prev')}>{data.user.bio}</p>
                                        </div>
                                    </div>
                                </PopperWrapper>
                            </div>
                        )}
                    >
                        <Link to={`/@${data.user.nickname}`} state={data.user}>
                            <Img className={cx('avatar')} src={data.user.avatar} alt={images.errImg} />
                        </Link>
                    </Tippy>
                </div>
                <div className={cx('wrap-infor')}>
                    <Link to={`/@${data.user.nickname}`} state={data.user} className={cx('user-infor')}>
                        <p href="/" className={cx('nickname')}>
                            {data.user.nickname}
                        </p>
                        {data.user.tick && <FontAwesomeIcon icon={faCheckCircle} className={cx('icon')} />}
                        <h4 className={cx('name')}>
                            {data.user.first_name}
                            {data.user.last_name}
                        </h4>
                    </Link>
                    <span className={cx('caption')}>{data.description}</span>
                    <a href="/" className={cx('caption-music')}>
                        <TagMusicIcon className={cx('icon-music')} />
                        <span>original sound - {data.music}</span>
                    </a>
                    <div className={cx('wrap-content')}>
                        <video ref={vidRef} width={336} height={600} src={data.file_url} className={cx('vid')} loop />
                        <ControlVid vidRef={vidRef} data={data} />
                        <div className={cx('social')}>
                            <button className={cx('btn-social')} onClick={context.handleShowModal}>
                                <FontAwesomeIcon icon={faHeart} className={cx('icon-social')} />
                            </button>
                            <span className={cx('count')}>{data.likes_count}</span>
                            <button className={cx('btn-social')} onClick={context.handleShowModal}>
                                <BsFillChatDotsFill className={cx('icon-social')} />
                            </button>
                            <span className={cx('count')}>{data.comments_count}</span>
                            <ShareVideos arrowDown offset={[90, 10]}>
                                <div className={cx('wrap-share')}>
                                    <button className={cx('btn-social')}>
                                        <RiShareForwardFill className={cx('icon-social')} />
                                    </button>
                                    <span className={cx('count')}>{data.shares_count}</span>
                                </div>
                            </ShareVideos>
                        </div>
                    </div>
                </div>
            </div>

            <button className={cx('btn')} onClick={context.handleShowModal}>
                Follow
            </button>
        </div>
    );
}

export default Video;
