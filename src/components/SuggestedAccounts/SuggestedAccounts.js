import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import PropTypes from 'prop-types';
import AccountItem from './AccountItems';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
function SuggestedAccounts({ title }) {
    const [users, setUsers] = useState([]);
    const [showMore, setShowMore] = useState(false);
    const [visibleUsers, setVisibleUsers] = useState([]); // show 10 users initially

    useEffect(() => {
        fetch('https://tiktok.fullstack.edu.vn/api/users/suggested?page=0&per_page=20')
            .then((res) => res.json())
            .then((res) => setUsers(res.data));
    }, []);

    useEffect(() => {
        setVisibleUsers(users.slice(0, 5));
    }, [users]);

    const handleToggle = () => {
        setShowMore(!showMore);
        if (showMore) {
            setVisibleUsers(users.slice(0, 5));
        } else {
            setVisibleUsers(users);
        }
    };
    return (
        <div className={cx('wrapper')}>
            <p className={cx('title')}>{title}</p>

            {visibleUsers.map((result) => (
                <AccountItem key={result.id} data={result} />
            ))}

            {users.length > 5 && (
                <p onClick={handleToggle} className={cx('more-btn')}>
                    {showMore ? 'See Less' : 'See More'}
                </p>
            )}
        </div>
    );
}
SuggestedAccounts.propTypes = {
    label: PropTypes.string,
};
export default SuggestedAccounts;
