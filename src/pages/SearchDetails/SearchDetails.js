import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import * as searchServices from '~/services/searchServices';
import styles from './SearchDetails.module.scss';
import classNames from 'classnames/bind';
import AccountResult from '~/components/AccountResult';
import { ArrowDown } from '~/components/Icons';

const cx = classNames.bind(styles);
function SearchDetails() {
    const location = useLocation();
    const [searchResults, setSearchResults] = useState([]);

    const [page, setPage] = useState(1);
    const tabLineRef = useRef();

    useEffect(() => {
        const fetchAPI = async () => {
            const result = await searchServices.search(location.state, 'more');
            setSearchResults(result);

            setPage(1);
        };

        fetchAPI();
    }, [location.state]);
    const handleLoadMore = async () => {
        const result = await searchServices.search(location.state, 'more', page + 1);
        setSearchResults((prev) => [...prev, ...result]);
        setPage(page + 1);
    };

    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <ul className={cx('nav')}>
                    <li className={cx('tab-item')}>Top</li>
                    <li className={cx('tab-item', 'active')}>Accounts</li>
                    <li className={cx('tab-item')}>Videos</li>
                </ul>
                <div ref={tabLineRef} className={cx('tab-line')}></div>
            </header>

            <section className={cx('content')}>
                {searchResults.map((result, index) => (
                    <AccountResult data={result} key={index} />
                ))}
            </section>

            <div className={cx('load-more')} onClick={handleLoadMore}>
                Load more
                <ArrowDown />
            </div>
        </div>
    );
}

export default SearchDetails;
