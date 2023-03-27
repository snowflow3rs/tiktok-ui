import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './GetApp.module.scss';
import Tippy from '@tippyjs/react/headless';
import { WrapperPop as PopperWrapper } from '~/components/Popper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PhoneIcon, ScreenIcon, ToTopIcon } from '../Icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function GetApp() {
    const [isVisible, setIsVisible] = useState(false);
    const [show, setShow] = useState(false);
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className={cx('wrapper', { isVisible })}>
            <div>
                <Tippy
                    visible={show}
                    interactive
                    onClickOutside={() => setShow(true)}
                    placement="bottom-start"
                    offset={[0, -100]}
                    delay={[[600, 0]]}
                    render={(attrs) => (
                        <div className={cx('wrap')} tabIndex="-1" {...attrs}>
                            <PopperWrapper className={cx('wrapper-popper')}>
                                <div className={cx('wrap-desktop')}>
                                    <button className={cx('btn-desk')}>
                                        <span className={cx('down')}>
                                            <ScreenIcon />
                                            <span> Get TikTok for desktop</span>
                                        </span>

                                        <FontAwesomeIcon
                                            icon={faXmark}
                                            className={cx('del')}
                                            onClick={() => {
                                                setShow(false);
                                            }}
                                        />
                                    </button>
                                </div>

                                <div className={cx('wrap-app')}>
                                    <button className={cx('btn-app')}>
                                        <PhoneIcon />
                                        <span>Get TikTok App</span>
                                    </button>
                                </div>
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <button
                        className={cx('btn-get')}
                        onClick={() => {
                            setShow(!show);
                        }}
                    >
                        Get app
                    </button>
                </Tippy>
            </div>

            {
                <button className={cx('toTopIcon')} onClick={scrollToTop}>
                    <ToTopIcon />
                </button>
            }
        </div>
    );
}

export default GetApp;
