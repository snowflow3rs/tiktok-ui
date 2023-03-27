import React from 'react';
import classNames from 'classnames/bind';
import styles from './SwitchTheme.module.scss';
import { ThemeContext } from '~/hooks';
import { useContext } from 'react';
const cx = classNames.bind(styles);

function SwitchTheme() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <div className={cx('wrapper')}>
            <input
                type="checkbox"
                className={cx('checkbox')}
                id="checkbox"
                onClick={toggleTheme}
                onChange={() => {}}
                checked={theme === 'dark'}
            />
            <label htmlFor="checkbox" className={cx('label')}>
                <div className={cx('ball')} />
            </label>
        </div>
    );
}
export default SwitchTheme;
