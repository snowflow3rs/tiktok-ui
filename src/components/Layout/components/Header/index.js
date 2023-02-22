import { useEffect, useState } from 'react';
import Tippy from '@tippyjs/react';

import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';

import images from '~/assets/images';
import styles from './Header.module.scss';

import Button from '~/components/Button';
import MenuSet from '~/components/Popper/MenuSet';

import {
    AccountIcon,
    CameraIcon,
    CoinIcon,
    FeedbackIcon,
    InboxIcon,
    KeyboardIcon,
    LanguageIcon,
    LogoutIcon,
    MessagesIcon,
    MoonIcon,
    PlusIcon,
    SettingIcon,
} from '~/components/Icons';
import Img from '~/components/Image';
import Search from '~/components/Layout/components/Search';

const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <LanguageIcon />,
        title: 'English',

        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Vietnamese',
                },
                {
                    code: 'kr',
                    title: '한국어 (대한민국)',
                },
                {
                    code: 'cn',
                    title: '简体中文(China)',
                },
            ],
        },
    },
    {
        icon: <FeedbackIcon />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <KeyboardIcon />,
        title: 'Keyboard shortcuts',
    },
    {
        icon: <MoonIcon />,
        title: 'Dark mode',
    },
];

function Header() {
    const [searchResult, setSearchResult] = useState([]);
    const isUser = true;
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3]);
        }, 2000);
    }, []);

    //handle logic
    const handleMenuChange = (MenuItems) => {
        console.log(MenuItems);
    };
    //Menu users
    const USER_MENU = [
        {
            icon: <AccountIcon />,
            title: 'View profile',

            to: '/profile',
        },
        {
            icon: <CoinIcon />,
            title: 'Get coin',
            to: '/getcoin',
        },
        {
            icon: <CameraIcon />,
            title: 'LIVE studio',
            to: '/livestudio',
        },
        {
            icon: <SettingIcon />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <LogoutIcon className={cx('logout')} />,
            title: 'Logout',
            to: '/logout',
            separate: true,
        },
    ];
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tik tok" />
                </div>
                <Search />
                {/* search */}
                <div className={cx('action')}>
                    {isUser ? (
                        <>
                            <Button className={cx('cuz-color')} leftIcon={<PlusIcon />}>
                                Upload
                            </Button>
                            <Tippy delay={[0, 100]} content="Messages">
                                <button className={cx('message')}>
                                    <MessagesIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 100]} content="Inbox">
                                <button className={cx('inbox')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button className={cx('cuz-color')} leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                                Upload
                            </Button>
                            <Button primary>Login</Button>
                        </>
                    )}
                    <MenuSet items={isUser ? USER_MENU : MENU_ITEMS} onChange={handleMenuChange}>
                        {isUser ? (
                            <Img
                                className={cx('user-avatar')}
                                src="https://i.pinimg.com/564x/df/9b/ac/df9bacd4e665cb9eb5b21ff3f1d10d17.jpg"
                                alt="Error404"
                                fallback="none"
                            />
                        ) : (
                            <button className={cx('setting')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </MenuSet>
                </div>
            </div>
        </header>
    );
}
export default Header;
