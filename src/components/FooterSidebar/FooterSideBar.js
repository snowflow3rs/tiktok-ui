import classNames from 'classnames/bind';
import styles from './FooterSideBar.module.scss';
const cx = classNames.bind(styles);

function FooterSideBar() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content-link')}>
                <a href="#" className={cx('link')}>
                    About
                </a>
                <a href="#" className={cx('link')}>
                    Newsroom
                </a>
                <a href="#" className={cx('link')}>
                    Contact
                </a>
                <a href="#" className={cx('link')}>
                    Careers
                </a>
                <a href="#" className={cx('link')}>
                    ByteDance
                </a>
            </div>
            <div className={cx('content-link')}>
                <a href="#" className={cx('link')}>
                    TikTok for good
                </a>
                <a href="#" className={cx('link')}>
                    Advertise
                </a>
                <a href="#" className={cx('link')}>
                    Developers
                </a>
                <a href="#" className={cx('link')}>
                    Transparency
                </a>
            </div>
            <div className={cx('content-link')}>
                <a href="#" className={cx('link')}>
                    TikTok Rewards
                </a>
                <a href="#" className={cx('link')}>
                    TikTok Browse
                </a>
                <a href="#" className={cx('link')}>
                    TikTok Embeds
                </a>
            </div>
            <div className={cx('content-link')}>
                <a href="#" className={cx('link')}>
                    Help
                </a>
                <a href="#" className={cx('link')}>
                    Safety
                </a>
                <a href="#" className={cx('link')}>
                    Terms
                </a>
                <a href="#" className={cx('link')}>
                    Privacy
                </a>
                <a href="#" className={cx('link')}>
                    Creator Portal
                </a>
            </div>
            <div className={cx('content-link')}>
                <a href="#" className={cx('link')}>
                    Community Guidelines
                </a>
            </div>
            <div className={cx('content-link')}>
                <a href="#" className={cx('link')}>
                    © 202* TikTok
                </a>
            </div>
        </div>
    );
}
export default FooterSideBar;
