import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faCircleNotch, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import HeadlessTippy from '@tippyjs/react/headless';
import config from '~/config';

import { WrapperPop as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import useDebounce from '~/hooks/useDebounce';
import { Link } from 'react-router-dom';
import * as searchServices from '~/services/searchServices';
const cx = classNames.bind(styles);
function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);
    const inputRef = useRef();
    const debounced = useDebounce(searchValue, 500);
    useEffect(() => {
        // remove special characters and spaces :1

        if (!debounced.trim()) {
            return;
        }

        // encode value input and call API with fetch

        // fetch(` https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debounced)}&type=less`)
        //     .then((res) => res.json())
        //     .then((res) => {
        //         setSearchResult(res.data);
        //         setLoading(false);
        //     });

        //call API with axios

        const fetchApi = async () => {
            setLoading(true);
            const result = await searchServices.search(debounced);

            setSearchResult(result);
            setLoading(false);
        };
        fetchApi();
    }, [debounced]);

    //handle input change

    const handleClear = () => {
        setSearchValue('');
        inputRef.current.focus();
    };

    const handleResult = () => {
        setShowResult(false);
    };

    //handle onChange input and remove special characters and spaces :2
    const handleInput = (e) => {
        const searchValue = e.target.value;

        if (!searchValue.startsWith(' ')) {
            setSearchValue(e.target.value);
        }
    };

    const handleBlurSearch = () => {
        inputRef.current.blur();
        setShowResult(false);
    };
    return (
        <div>
            <HeadlessTippy
                interactive={true}
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper className={cx('wrap-search')}>
                            <Link
                                to={`${config.routes.search}?q=${searchValue}`}
                                state={searchValue}
                                className={cx('text-result')}
                            >
                                <FontAwesomeIcon icon={faMagnifyingGlass} className={cx('magicon')} />
                                <span className={cx('text')}>{searchValue}</span>
                            </Link>
                            <h4 className={cx('search-title')}>Account</h4>
                            {searchResult.map((result) => (
                                <AccountItem key={result.id} data={result} />
                            ))}
                            <Link
                                state={searchValue}
                                onClick={handleBlurSearch}
                                to={`${config.routes.search}?q=${searchValue}`}
                                className={cx('view-all')}
                            >
                                <span>View all results for "{searchValue}"</span>
                            </Link>
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleResult}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder="Search accounts and videos"
                        value={searchValue}
                        onChange={handleInput}
                        onFocus={() => setShowResult(true)}
                    />
                    {!!searchValue && !loading && (
                        <button className={cx('close')} onClick={handleClear}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}

                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faCircleNotch} />}

                    <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}
export default Search;
