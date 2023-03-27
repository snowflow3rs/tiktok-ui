import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useState, useEffect, useMemo } from 'react';

import {
    AppleIcons,
    ArrowDown,
    FbLogIcons,
    GgLogIcons,
    InsIcons,
    KakaoIcons,
    LineIcon,
    PerLogIcons,
    QrIcons,
    TwitterIcon,
} from '../Icons';

import styles from './ModalForm.module.scss';
const cx = classNames.bind(styles);

function ModalForm({ onHide }) {
    const [loginForm, setLoginForm] = useState('login');
    const [filter, setFilter] = useState([]);
    const data = useMemo(() => [
        {
            type: 'login',
            title: 'Login in to TikTok',
            contents: [
                {
                    icon: <QrIcons />,
                    title: ' Use QR code',
                },
                {
                    icon: <PerLogIcons />,
                    title: ' Use phone/ email/ usersname',
                },
                {
                    icon: <FbLogIcons />,
                    title: ' Continue with Facebook',
                },
                {
                    icon: <GgLogIcons />,
                    title: ' Continue with Google',
                },
                {
                    icon: <TwitterIcon />,
                    title: ' Continue with Twitter',
                },
                {
                    icon: <LineIcon />,
                    title: ' Continue with LINE',
                },
                {
                    icon: <KakaoIcons />,
                    title: ' Continue with KakaoTalk',
                },
                {
                    icon: <AppleIcons />,
                    title: ' Continue with Apple',
                },
                {
                    icon: <InsIcons />,
                    title: ' Continue with Instagram',
                },
            ],
        },
        {
            type: 'register',
            title: 'Sign up for TikTok',
            showMore: true,
            contents: [
                {
                    icon: <PerLogIcons />,
                    title: 'Use phone or email',
                },
                {
                    icon: <FbLogIcons />,
                    title: 'Continue with Facebook',
                },
                {
                    icon: <GgLogIcons />,
                    title: 'Continue with Google',
                },
            ],
        },
        {
            type: 'register-expanded',
            title: 'Sign up for TikTok',
            contents: [
                {
                    icon: <PerLogIcons />,
                    title: 'Use phone or email',
                },
                {
                    icon: <FbLogIcons />,
                    title: 'Continue with Facebook',
                },
                {
                    icon: <GgLogIcons />,
                    title: 'Continue with Google',
                },
                {
                    icon: <TwitterIcon />,
                    title: 'Continue with Twitter',
                },
                {
                    icon: <LineIcon />,
                    title: 'Continue with LINE',
                },
                {
                    icon: <KakaoIcons />,
                    title: 'Continue with KakaoTalk',
                },
            ],
        },
    ]);
    useEffect(() => {
        const instanceModal = data.find((form) => form.type === loginForm);
        setFilter(instanceModal);
    }, [loginForm]);
    return (
        <div className={cx('overlay')}>
            <div className={cx('wrapper')}>
                <div className={cx('container')}>
                    <div className={cx('inner')}>
                        <h2 className={cx('heading')}>{filter.title}</h2>

                        <div className={cx('list-log')}>
                            {filter.contents?.map((content, index) => (
                                <div className={cx('items')} key={index} onClick={content.onClick}>
                                    <span className={cx('icon')}>{content.icon}</span>
                                    <p className={cx('platform')}>{content.title}</p>
                                </div>
                            ))}
                            {filter.showMore && (
                                <div className={cx('show-more')} onClick={() => setLoginForm('register-expanded')}>
                                    <ArrowDown />
                                </div>
                            )}
                        </div>
                    </div>
                    {loginForm.startsWith('register') && (
                        <div className={cx('agreement')}>
                            <p>
                                By continuing, you agree to TikTok's <a href="/">Terms of Service</a> and confirm that
                                you have read TikTok's <a href="/">Privacy Policy</a>.
                            </p>
                        </div>
                    )}
                    <div className={cx('footer')}>
                        {loginForm === 'login' ? (
                            <>
                                Don't have an account? <p onClick={() => setLoginForm('register')}> Sign up</p>{' '}
                            </>
                        ) : (
                            <>
                                Already have an account? <p onClick={() => setLoginForm('login')}>Log in</p>
                            </>
                        )}
                    </div>
                </div>

                <div className={cx('close-btn')}>
                    <FontAwesomeIcon icon={faXmark} onClick={onHide} />
                </div>
            </div>
        </div>
    );
}

export default ModalForm;
