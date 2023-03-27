import classNames from 'classnames/bind';
import styles from './MenuSet.module.scss';
import Tippy from '@tippyjs/react/headless';

import PropTypes from 'prop-types';

import { WrapperPop as PopperWrapper } from '~/components/Popper';
import MenuItems from './MenuItems';
import Header from './Header';
import { useState } from 'react';
const cx = classNames.bind(styles);
const defaultfn = () => {};
function MenuSet({ children, items = [], hideOnClick = false, onChange = defaultfn }) {
    const [Open, setOpen] = useState([{ data: items }]);

    const current = Open[Open.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItems
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setOpen((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };
    const handleResetMenu = () => setOpen((prev) => prev.slice(0, 1));
    return (
        <Tippy
            hideOnClick={hideOnClick}
            placement="bottom-end"
            onHide={handleResetMenu}
            interactive
            delay={[0, 600]}
            render={(attrs) => (
                <div className={cx('menu-content')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        {Open.length > 1 && (
                            <Header
                                title={current.title}
                                onBack={() => {
                                    setOpen((prev) => prev.slice(0, prev.length - 1));
                                }}
                            />
                        )}

                        <div className={cx('menu-body')}>{renderItems()}</div>
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

MenuSet.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    hideOnClick: PropTypes.bool,
    onChange: PropTypes.func,
};

export default MenuSet;
