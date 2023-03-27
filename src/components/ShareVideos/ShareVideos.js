import { useState } from 'react';
import styles from './ShareVideos.module.scss';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { WrapperPop as PopperWrapper } from '~/components/Popper';

import {
    ArrowDown,
    EmailIcon,
    EmbedIcon,
    FbIcon,
    LineIcon,
    LinkIcon,
    LinkldnIcon,
    MenuIconDown,
    PinIcon,
    RedditIcon,
    SendIcon,
    TelegramIcon,
    TopMenu,
    TwitterIcon,
    WhatsAppIcon,
} from '../Icons';
const cx = classNames.bind(styles);
function ShareVideos({ children, offset, arrowTop, arrowDown }) {
    const [showMore, setShowMore] = useState(false);
    const SHARE_MENU = [
        {
            icon: <EmbedIcon />,
            title: 'Embed',
        },
        {
            icon: <SendIcon />,
            title: 'Send to friends',
        },
        {
            icon: <FbIcon />,
            title: 'Share to Facebook',
        },
        {
            icon: <WhatsAppIcon />,
            title: 'Share to WhatsApp',
        },
        {
            icon: <LinkIcon />,
            title: 'Copy link',
        },

        {
            icon: <TwitterIcon />,
            title: 'Share to Twitter',
        },
        {
            icon: <LinkldnIcon />,
            title: 'Share to Linkedln',
        },
        {
            icon: <RedditIcon />,
            title: 'Share to Reddit',
        },
        {
            icon: <TelegramIcon />,
            title: 'Share to Telegram',
        },
        {
            icon: <EmailIcon />,
            title: 'Share to Email',
        },
        {
            icon: <LineIcon />,
            title: 'Share to Line',
        },
        {
            icon: <PinIcon />,
            title: 'Share to Pinterest',
        },
    ];
    const currentList = showMore ? SHARE_MENU : SHARE_MENU.splice(0, 5);

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };
    return (
        <Tippy
            delay={[200, 700]}
            offset={offset}
            interactive
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('wrap-search')}>
                        {currentList.map((item, index) => (
                            <div className={cx('items')} key={index}>
                                {item.icon}
                                {item.title}
                            </div>
                        ))}

                        {!showMore && (
                            <div className={cx('more-btn')} onClick={toggleShowMore}>
                                <MenuIconDown />
                            </div>
                        )}
                    </PopperWrapper>
                    <TopMenu className={cx({ arrowDown: arrowDown, arrowTop: arrowTop })} />
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default ShareVideos;
