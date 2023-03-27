import Tippy from '@tippyjs/react';
import { Link } from 'react-router-dom';
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
import Search from '~/layouts/components/Search';
import config from '~/config';
import SwitchTheme from '~/components/SwitchTheme';
import { useContext } from 'react';
import { ThemeContext, ModalContext } from '~/hooks';

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
        theme: <SwitchTheme />,
    },
];

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

function Header({ stretch }) {
    const { theme } = useContext(ThemeContext);
    const context = useContext(ModalContext);
    const isTheme = theme === 'dark';
    const isUser = false;

    //handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // Handle change language
                break;
            default:
        }
    };
    //Menu users

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner', { stretch: stretch })}>
                <div className={cx('logo')}>
                    <Link to={config.routes.home} className={cx('logo-link')}>
                        <img src={isTheme ? images.logoL : images.logo} alt="Tik tok" />
                    </Link>
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
                                    <MessagesIcon className={cx('ikon')} />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 100]} content="Inbox">
                                <button className={cx('inbox')}>
                                    <InboxIcon className={cx('ikon')} />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button
                                className={cx('cuz-color')}
                                onClick={context.handleShowModal}
                                leftIcon={<FontAwesomeIcon icon={faPlus} />}
                            >
                                Upload
                            </Button>
                            <Button primary onClick={context.handleShowModal}>
                                Login
                            </Button>
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
