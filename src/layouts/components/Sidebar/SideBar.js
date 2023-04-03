import classNames from 'classnames/bind';

import styles from './Sidebar.module.scss';
import config from '~/config';
import Menu, { MenuItems } from './Menu';
import { FollowIcon, HomeActiveIcon, HomeIcon, LiveActiveIcon, LiveIcon, FollowActiveIcon } from '~/components/Icons';
import SuggestedAccounts from '~/components/SuggestedAccounts';
import FollowingAccounts from '~/components/FollowingAccounts';
import Discover from '~/components/Discover';
import LogSideBar from '~/components/LogSideBar';
import FooterSideBar from '~/components/FooterSidebar';

const cx = classNames.bind(styles);

function SideBar({ shrink }) {
    const isUser = false;
    return (
        <aside className={cx('wrapper', { shrink: shrink })}>
            <div className={cx('inner')}>
                <Menu>
                    <MenuItems
                        icon={<HomeIcon />}
                        to={config.routes.home}
                        title="For You"
                        activeIcon={<HomeActiveIcon />}
                    />
                    <MenuItems
                        icon={<FollowIcon />}
                        to={config.routes.following}
                        title="Following"
                        activeIcon={<FollowActiveIcon />}
                    />
                    <MenuItems
                        icon={<LiveIcon />}
                        to={config.routes.live}
                        title="LIVE"
                        activeIcon={<LiveActiveIcon />}
                    />
                </Menu>
                <LogSideBar title="Log in to follow creators, like videos, and view comments." />
                {isUser ? (
                    <FollowingAccounts title="Following accounts" />
                ) : (
                    <SuggestedAccounts title="Suggested accounts" />
                )}

                <Discover title="Discover" />
                <FooterSideBar />
            </div>
        </aside>
    );
}
export default SideBar;
