import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Profile.module.scss';
import { useLocation } from 'react-router-dom';
import Button from '~/components/Button';
import {
    LinkProfileIcon,
    LockIcon,
    OptionProfileIcon,
    ReportIcon,
    ShareProfileIcon,
    TopMenu,
} from '~/components/Icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBan, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Img from '~/components/Image/Image';
import images from '~/assets/images';
import VideoProfile from './VideoProfile';
import ShareVideos from '~/components/ShareVideos';

import Tippy from '@tippyjs/react/headless';
import { WrapperPop as PopperWrapper } from '~/components/Popper';
import { useContext } from 'react';
import { ModalContext } from '~/hooks';
const cx = classNames.bind(styles);
function Profile() {
    const context = useContext(ModalContext);
    const location = useLocation();
    const data = location.state;
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        fetch(`https://tiktok.fullstack.edu.vn/api/users/@${data.nickname}`)
            .then((response) => response.json())
            .then((res) => setVideos(res.data.videos));
    }, [data.nickname]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('profile-account')}>
                <Img className={cx('img')} src={data.avatar} alt={images.errImg} />

                <div className={cx('infor')}>
                    <h2 className={cx('heading-infor')}>
                        <span>{data.nickname}</span>
                        {data.tick && <FontAwesomeIcon icon={faCheckCircle} className={cx('icon-tick')} />}
                    </h2>
                    <h1 className={cx('name')}>{data.first_name && data.last_name}</h1>
                    <Button onClick={context.handleShowModal} className={cx('btn')} primary>
                        Follow
                    </Button>
                </div>

                <div className={cx('icon')}>
                    <div>
                        <ShareVideos arrowTop offset={[-100, 10]}>
                            <div>
                                <ShareProfileIcon strokeColor="true" className={cx('icon-share')} />
                            </div>
                        </ShareVideos>
                    </div>

                    <Tippy
                        placement="top-start"
                        delay={[200, 700]}
                        offset={[-130, 0]}
                        interactive
                        zIndex={10000}
                        render={(attrs) => (
                            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                <PopperWrapper className={cx('wrap-search')}>
                                    <div className={cx('container')}>
                                        <div className={cx('rp')}>
                                            <ReportIcon />
                                            <span>Report</span>
                                        </div>
                                    </div>
                                    <div className={cx('container')}>
                                        <div className={cx('block')}>
                                            <FontAwesomeIcon icon={faBan} />
                                            <span>Block</span>
                                        </div>
                                    </div>
                                </PopperWrapper>
                                <TopMenu className={cx('arrowTop')} />
                            </div>
                        )}
                    >
                        <div className={cx('wrap-icon')}>
                            <OptionProfileIcon className={cx('icon-option')} />
                        </div>
                    </Tippy>
                </div>
            </div>

            <div className={cx('count-infor')}>
                <div className={cx('stat-infor')}>
                    <strong className={cx('mount')}>{data.followings_count}</strong>
                    <span className={cx('name-stat')}>Following</span>
                </div>
                <div className={cx('stat-infor')}>
                    <strong className={cx('mount')}>{data.followers_count}</strong>
                    <span className={cx('name-stat')}>Followers</span>
                </div>
                <div className={cx('stat-infor')}>
                    <strong className={cx('mount')}>{data.likes_count}</strong>
                    <span className={cx('name-stat')}>Likes</span>
                </div>
            </div>

            <div className={cx('bio')}>{data.bio}</div>
            {data.website_url && (
                <div className={cx('share-link')}>
                    <LinkProfileIcon />
                    <span> {data.website_url}</span>
                </div>
            )}
            <div className={cx('videos-container')}>
                <div className={cx('tabs-list')}>
                    <div className={cx('tab-items')}>Videos</div>
                    <div className={cx('tab-items')}>
                        <LockIcon />
                        <span>Liked</span>
                    </div>
                    <div className={cx('underline')} />
                </div>
                <div className={cx('vids')}>
                    {videos.map((video, index) => (
                        <VideoProfile key={index} data={video} />
                    ))}
                </div>
            </div>
        </div>
    );
}
export default Profile;
