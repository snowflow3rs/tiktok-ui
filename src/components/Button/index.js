import classNames from 'classnames/bind';
import styles from './Button.module.scss';

import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({
    outline = false,
    primary = false,
    small = false,
    large = false,
    text = false,
    black = false,
    disabled = false,
    rounded = false,
    className,
    leftIcon,
    rightIcon,
    to,
    href,
    onClick,
    children,
    ...passProps
}) {
    let Component = 'button';
    const props = { onClick, ...passProps };
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }
    if (to) {
        props.to = to;
        Component = Link;
    }
    if (href) {
        props.href = href;
        Component = 'a';
    }
    const cn = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        black,
        small,
        large,
        disabled,
        rounded,
    });
    return (
        <Component className={cn} {...props}>
            {leftIcon && <span className={cx('left-icon', 'icon')}>{leftIcon}</span>}

            <span className={cx('title')}>{children}</span>

            {rightIcon && <span className={cx('right-icon', 'icon')}>{rightIcon}</span>}
        </Component>
    );
}
export default Button;
